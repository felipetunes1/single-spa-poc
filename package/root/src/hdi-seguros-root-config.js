import Routes from './service/routes.service'
import Elements from './service/elements.service'
import Template from './component/template.component'

import { registerApplication, start } from "single-spa";
import {
   constructApplications,
   constructRoutes,
   constructLayoutEngine,
} from "single-spa-layout";

function show(path, location) {
   const pattern = new RegExp(`^${path}$`);
   return pattern.test(location.pathname);

}

function insertNewImportMap(newMapJSON) {
   const newScript = document.createElement('script')
   newScript.type = 'systemjs-importmap'
   newScript.text = JSON.stringify(newMapJSON)
   const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

   allMaps[allMaps.length - 1].insertAdjacentElement(
      'afterEnd',
      newScript
   )
}

Promise.all([Elements(), Routes()]).then(([elements, applicationRoutes]) => {
   const template = Template(document, applicationRoutes, elements)
   const routes = constructRoutes(template)

   window.importMapOverrides.resetOverrides();
   applicationRoutes.map(({ app, endpoint }) => window.importMapOverrides.addOverride(app,endpoint))

   insertNewImportMap(applicationRoutes.map(({ endpoint }) => endpoint))

   const applications = constructApplications({
      routes,
      loadApp({ name }) {
         return System.import(name);
      },
   });

   const layoutEngine = constructLayoutEngine({ routes, applications });

   applications.forEach((curr) => {
      registerApplication(
         curr.name,
         curr.app,
         function (location) {
            let routeApp = applicationRoutes.find(({ app }) => curr.name == app)
            let except = routeApp.routeExcept.find(path => show(path, location))
            let notFound = applicationRoutes.find(({ route }) => show(route, location))
            return ((notFound && routeApp.default) ||
               show(routeApp.route, location) || routeApp.route == '') && !except
         },
         curr.customProps
      )
   })

   layoutEngine.activate();
   start();


})

// window.importMapOverrides.addOverride


import Routes from './service/routes.service'
import Elements from './service/elements.service'
import App from './service/app.service'
import Template from './component/template.component'
import auth from './service/login.service'

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
   let newScript = document.getElementById('hdi-seguros-systemjs-importmap')
   if(newScript)
      newScript.parentNode.removeChild(newScript);

   newScript = document.createElement('script')
   newScript.type = 'systemjs-importmap'
   newScript.id = 'hdi-seguros-systemjs-importmap'
   newScript.text = JSON.stringify(newMapJSON)
   const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

   allMaps[allMaps.length - 1].insertAdjacentElement(
      'afterEnd',
      newScript
   )
}

Promise.all([Elements(), Routes(), App()]).then(([elements, applicationRoutes, apps]) => {

   console.log(apps)
   const template = Template(document, applicationRoutes, elements)
   const routes = constructRoutes(template)

   window.importMapOverrides.resetOverrides();
   apps.map(({ app, endpoint }) => window.importMapOverrides.addOverride(app, endpoint))

   insertNewImportMap(applicationRoutes.map(({ endpoint }) => endpoint))
   // debugger

   const applications = constructApplications({
      routes,
      loadApp({ name }) {
         return System.import(name);
      },
   });

   const layoutEngine = constructLayoutEngine({ routes, applications });

   const menu = applicationRoutes.filter(app => app.menu)
      .map(({ route, name, order }) => ({ path: route, name, order }));
   console.log(menu)

   applications.forEach((curr) => {
      curr.customProps.customProps = "abc"
      registerApplication(
         curr.name,
         curr.app,
         function (location) {
            let routeApp = applicationRoutes.find(({ app }) => curr.name == app)
            let except = routeApp.routeExcept && routeApp.routeExcept.find(path => show(path, location))
            let notFound = applicationRoutes.find(({ route }) => show(route, location))
            return ((notFound && routeApp.default) ||
               show(routeApp.route, location) || routeApp.route == '') && !except
         },
         {
            menu,
            auth,
            functToken: function (res) {
               sessionStorage.setItem('sessionTeste', JSON.stringify(res))
            },
            getToken: function () {
               return sessionStorage.getItem('sessionTeste')
            },
            logout: function() {
               sessionStorage.clear()
               window.location = '/'
            }
         }
      )
   })

   layoutEngine.activate();
   start();

   // window.importMapOverrides.resetOverrides();

})

// window.importMapOverrides.addOverride


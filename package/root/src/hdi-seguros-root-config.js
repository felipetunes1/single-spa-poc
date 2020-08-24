import { registerApplication, start } from "single-spa";
import {
   constructApplications,
   constructRoutes,
   constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

function generateRouteList(path = "", rotas, isDefault) {
   rotas.forEach((route) => {
      let newPath = `${path}${route.default ? "" : route.path ? route.path : ''}`;
      if (route.type === "application") {
         if (!applicationMap[route.name]) {
            applicationMap[route.name] = [];
         }
         applicationMap[route.name].push({
            path : newPath,
            default: isDefault
         });
      } else if (route.type === "route") {
         generateRouteList(
            newPath,
            route.routes,
            route.default
         );
      } else if (route.routes) {
         generateRouteList(newPath, route.routes, route.default);
      }
   });

}

const applicationMap = {};
generateRouteList(undefined, routes.routes)

const applications = constructApplications({
   routes,
   loadApp({ name }) {
      return System.import(name);
   },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => {
   registerApplication(
      app.name,
      app.app,
      function (location) {
         let path = applicationMap[app.name][0].path;
         console.log(`${app.name} = ${path} === ${location.pathname}`)
         const pattern = new RegExp(`^${path}$`);
         return pattern.test(location.pathname) || (path === "" && !applicationMap[app.name][0].default);
      },
      app.customProps
   );
});

layoutEngine.activate();
start();

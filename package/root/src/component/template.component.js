export default function (document, routes, elements) {
   let singleSpaRouter = document.createElement('single-spa-router')
   let header = document.createElement('header')
   let nav = document.createElement('nav')
   let main = document.createElement('main')
   let footer = document.createElement('footer')

   singleSpaRouter.appendChild(header)
   singleSpaRouter.appendChild(nav)
   singleSpaRouter.appendChild(main)
   singleSpaRouter.appendChild(footer)

   elements.forEach(({ id, name }) => {
      routes.filter(({ elementId }) => elementId === id)
         .forEach((route) => {
            let application = document.createElement('application')
            application.setAttribute('name', route.app);

            if (route.route || route.default) {
               let routeElement = document.createElement('route')
               routeElement.appendChild(application)

               if (route.route)
                  routeElement.setAttribute('path', route.route);
               else
                  routeElement.setAttribute('default', '')

               singleSpaRouter.getElementsByTagName(name)[0].appendChild(routeElement)

            } else {
               singleSpaRouter.getElementsByTagName(name)[0].appendChild(application)

            }
         })
   })

   return singleSpaRouter;

}
import fetch from "node-fetch";

export default function auth(user, pass, callback, errorCallback) {
   console.log(`http://localhost:9001/auth?user=${user}&pass=${pass}`)
   fetch(`http://localhost:9001/auth?user=${user}&pass=${pass}`)
      .then((res) => res.json())
      .then(json => {
         if(json) {
            callback(json)
            window.location.href = '/'
         } else {
            errorCallback('User or Password Incorrect')
         }
      });
}
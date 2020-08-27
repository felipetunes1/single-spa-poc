import fetch from "node-fetch";

export default async function() {
   const session = JSON.parse(sessionStorage.getItem('sessionTeste')) 
   return await fetch(`http://localhost:9001/routes?user=${session ? session.username : ''}`).then(res => res.json());
}
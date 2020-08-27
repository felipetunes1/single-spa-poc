import fetch from "node-fetch";

export default async function() {
   return await fetch(`http://localhost:9001/app`).then(res => res.json());
}
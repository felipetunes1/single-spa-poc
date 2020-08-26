import fetch from "node-fetch";

export default async function() {
   return await fetch('http://localhost:9001/elements').then(res => res.json());
}
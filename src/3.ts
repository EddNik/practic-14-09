interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

console.log("user", user);

// !===============================================================
let person = ["Max", 21];

// !================================================================

import axios from "axios";

interface Url {
  url: string;
}

// async function fetchData(url: Url) {
//   try {
//     const response = await axios.get<Url>(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

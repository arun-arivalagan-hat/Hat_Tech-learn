import { users } from "./data.js";

import {
  filterUsers,
  sortByField,
  groupByField,
  getSummaryStats,
} from "./block1.js";


const filtered = filterUsers(users, "a");

console.log("Filtered:", filtered);


const sorted = sortByField(users, "age");

console.log("Sorted:", sorted);


const grouped = groupByField(users, "city");

console.log("Grouped:", grouped);


const stats = getSummaryStats(users);

console.log("Stats:", stats);
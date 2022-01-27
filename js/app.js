import { animations } from "./animations.js";
import { navMenu } from "./navMenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
  navMenu();
  animations();
});
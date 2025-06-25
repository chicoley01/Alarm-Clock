import { toggleSPA } from "./toggleSPA.js";
import { toggleActiveLink } from "./toggleActiveLink.js"

document.addEventListener("DOMContentLoaded", () => {
    toggleSPA({ toggleActiveLink });
})
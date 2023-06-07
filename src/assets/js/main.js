/*! --------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------*/
import * as bootstrap from "bootstrap";
import * as DOMPurify from "dompurify";

/*! --------------------------------------------------------------------
 * DOMPurif protect xss
 * --------------------------------------------------------------------*/
const sanitize = (string) => DOMPurify.sanitize(string);

let inputsApp = document.querySelectorAll(".form-control");
inputsApp.forEach((item) => {
    item.addEventListener("change", (e) => {
        const result = sanitize(e.target.value);
        console.log(result);
    });
});

/*! --------------------------------------------------------------------
 * mostra senha
 * --------------------------------------------------------------------*/
let btnShowAllPassword = document.querySelectorAll(".btn-showPass");

btnShowAllPassword.forEach((item) => {
    item.addEventListener("click", () => {
        item.children[0].classList.toggle("bi-unlock");
        const inputPass = item.parentNode.children[0];
        const type =
            inputPass.getAttribute("type") === "password" ? "text" : "password";
        inputPass.setAttribute("type", type);
    });
});

/*! --------------------------------------------------------------------
 * currentYear
 * --------------------------------------------------------------------*/
const currentYear = new Date().getFullYear();
document.querySelector('[data-js="currentYear"]').textContent = currentYear;

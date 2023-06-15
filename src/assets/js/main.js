/* ////////////////////////////////////////////////////////////////////
 *
 *  JS APP
 *
 * - Imports
 * - DOMPurif protect xss
 * - mostra senha
 * - currentYear
 * - navbarSideCollapse
 * - navigation-active
 * -
 *
 * //////////////////////////////////////////////////////////////////// */


/*! --------------------------------------------------------------------
 * Imports
 * --------------------------------------------------------------------*/

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

/* --------------------------------------------------------------------
* - navbarSideCollapse
---------------------------------------------------------------------- */
(() => {
    "use strict";
        document.querySelector("#navbarSideCollapse")?.addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

/*! --------------------------------------------------------------------
 * navigation-active
 * --------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll(`.navbar-nav .nav-item a[href$="${currentUrl}"]`);

    navLinks.forEach(function (link) {
        link.classList.add("active");

        const dropdownParent = link.closest(".nav-item.dropdown");
        dropdownParent?.classList.add("active");
    });
});

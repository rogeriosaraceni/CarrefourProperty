/* ////////////////////////////////////////////////////////////////////
 *
 *  JS CORE main
 *
 * - Enable tooltips
 * - mostra senha
 * - currentYear
 * - navbarSideCollapse
 * - navigation-active
 * - btnScrollToTop
 * - tab-datatable-scroll-x
 * - DOMPurif protect xss
 *
 *
 * //////////////////////////////////////////////////////////////////// */

/*! --------------------------------------------------------------------
 * Enable tooltips
 * --------------------------------------------------------------------*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

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
const divCurrentYear = document.querySelector('[data-js="currentYear"]')
if (divCurrentYear) {
    divCurrentYear.textContent = currentYear;
}

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
    const navLinks = document.querySelectorAll(
        `.navbar-nav .nav-item a[href$="${currentUrl}"]`
    );

    navLinks.forEach(function (link) {
        link.classList.add("active");

        const dropdownParent = link.closest(".nav-item.dropdown");
        dropdownParent?.classList.add("active");
    });
});

/* --------------------------------------------------------------------
* - btnScrollToTop
---------------------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", function () {
    const btnScrollToTop = document.querySelector('[data-scroll="top"]')

    if (btnScrollToTop) {
        btnScrollToTop.onclick = () => window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        window.onscroll = () => window.scrollY > 10 ? btnScrollToTop.style.opacity = 1 : btnScrollToTop.style.opacity = 0
    }
});

/* --------------------------------------------------------------------
* - tab-datatable-scroll-x
---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    $(".tab-datatable-scroll-x").DataTable({
        order: [[0, "asc"]],
        ordering: true,
        paging: true,
        info: true,
        scrollX: true,
        scrollCollapse: true,

        lengthMenu: [
            [15, 30, 50, 80, -1],
            [15, 30, 50, 80, "Tudo"],
        ],

        columnDefs: [
            {
                targets: "no-sort",
                orderable: false,
            },
        ],

        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
        },
    });

    $('[data-row="delete"]').click(function () {
        if (!confirm('Você tem certeza que deseja excluir?')) {
            return false;
        }
    })
})

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

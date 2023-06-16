const cards = [
    {
        name: "Ficha Técnica",
        icon: "bi bi-file-earmark-ruled",
        link: "../ficha-tecnica/index.html",
    },
    {
        name: "DOS",
        icon: "bi bi-bar-chart",
        link: "../dos/index.html",
    },
    {
        name: "Manutenção",
        icon: "bi bi-gear",
        link: "../manutencao/index.html",
    },
    {
        name: "Operações Galerias",
        icon: "bi bi-columns",
        link: "../operacoes-galerias/index.html",
    },
    {
        name: "Comercial",
        icon: "bi bi-buildings",
        link: "../comercial/index.html",
    },
    {
        name: "Projetos Galerias",
        icon: "bi bi-clipboard2-check",
        link: "../projetos-galerias/planta-galeria.html",
    },
];

const cardsContainer = document.querySelector('[data-js="cards"]');

function generateCardsTemplate(cards) {
    let html = "";

    cards.forEach((card) => {
        html += `
                        <a class="link-card col-lg-2 col-md-4 col-sm-6" href="${card.link}">
                            <figure>
                                <div class="content-icon">
                                    <i class="${card.icon}"></i>
                                </div>
                            </figure>
                            <h4>${card.name}</h4>
                        </a>
                    `;
    });
    return html;
}

cardsContainer.innerHTML = generateCardsTemplate(cards);

const cards = [
    {
        link: "../ficha-tecnica/index.html",
        icon: "bi bi-file-earmark-ruled",
        name: "Ficha Técnica",
        nameClassColor: "bg-app-green-400",
    },
    {
        link: "../dos/index.html",
        icon: "bi bi-bar-chart",
        name: "DOS",
        nameClassColor: "bg-app-cyan-400",
    },
    {
        link: "../manutencao/index.html",
        icon: "bi bi-gear",
        name: "Manutenção",
        nameClassColor: "bg-app-blue-400",
    },
    {
        link: "../operacoes-galerias/index.html",
        icon: "bi bi-columns",
        name: "Operações Galerias",
        nameClassColor: "bg-app-pink-700",
    },
    {
        link: "../comercial/index.html",
        icon: "bi bi-buildings",
        name: "Comercial",
        nameClassColor: "bg-app-red-400",
    },
    {
        link: "../projetos-galerias/page-planta-galeria.html",
        icon: "bi bi-clipboard2-check",
        name: "Projetos Galerias",
        nameClassColor: "bg-app-orange-400",
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
                <h4 class="${card.nameClassColor}">${card.name}</h4>
            </a>
        `;
    });
    return html;
}

cardsContainer.innerHTML = generateCardsTemplate(cards);

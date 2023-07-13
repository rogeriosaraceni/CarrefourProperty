const cards = [
    {
        link: "../ficha-tecnica/index.html",
        icon: "bi bi-file-earmark-ruled text-app-green-400",
        name: "Ficha Técnica",
        nameClassColor: "bg-app-green-400",
    },
    {
        link: "../dos/index.html",
        icon: "bi bi-bar-chart text-app-cyan-400",
        name: "DOS",
        nameClassColor: "bg-app-cyan-400",
    },
    {
        link: "../manutencao/index.html",
        icon: "bi bi-gear text-app-blue-400",
        name: "Manutenção",
        nameClassColor: "bg-app-blue-400",
    },
    {
        link: "../operacoes-galerias/index.html",
        icon: "bi bi-columns text-app-pink-700",
        name: "Operações Galerias",
        nameClassColor: "bg-app-pink-700",
    },
    {
        link: "../comercial/index.html",
        icon: "bi bi-buildings text-app-red-400",
        name: "Comercial",
        nameClassColor: "bg-app-red-400",
    },
    {
        link: "../pg-planta-galeria/index.html",
        icon: "bi bi-clipboard2-check text-app-orange-400",
        name: "Projetos Galerias",
        nameClassColor: "bg-app-orange-400",
    },
];

const cardsContainer = document.querySelector('[data-js="cards"]');

function generateCardsTemplate(cards) {
    let html = "";

    cards.forEach((card) => {
        html += `
            <div class="col-lg-2 col-md-4 col-sm-6">
            <a class="link-card" href="${card.link}">
                <figure>
                    <div class="content-icon">
                        <i class="${card.icon}"></i>
                    </div>
                </figure>
                <h4 class="${card.nameClassColor}">${card.name}</h4>
            </a>
            </div>
        `;
    });
    return html;
}

cardsContainer.innerHTML = generateCardsTemplate(cards);

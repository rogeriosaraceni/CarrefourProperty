const cards = [
    {
        name: "Ficha T\xe9cnica",
        icon: "bi bi-file-earmark-ruled",
        link: "#"
    },
    {
        name: "DOS",
        icon: "bi bi-bar-chart",
        link: "#"
    },
    {
        name: "Manuten\xe7\xe3o",
        icon: "bi bi-gear",
        link: "#"
    },
    {
        name: "Opera\xe7\xf5es Galerias",
        icon: "bi bi-columns",
        link: "#"
    },
    {
        name: "Comercial",
        icon: "bi bi-buildings",
        link: "#"
    },
    {
        name: "Projetos Galerias",
        icon: "bi bi-clipboard2-check",
        link: "#"
    }
];
const cardsContainer = document.querySelector('[data-js="cards"]');
function generateCardsTemplate(cards) {
    let html = "";
    cards.forEach((card)=>{
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

//# sourceMappingURL=index.abdcd206.js.map

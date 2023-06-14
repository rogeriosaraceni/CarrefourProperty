const cards = [
    {
        name: "Ficha Técnica",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEZpY2hhJTIwVCVDMyVBOWNuaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
    {
        name: "DOS",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW4lQzMlQTdhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
    {
        name: "Manutenção",
        image: "https://images.unsplash.com/photo-1513692398020-cbaea622c427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
    {
        name: "Operações Galerias",
        image: "https://images.unsplash.com/photo-1603117891853-8dad2d57e528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJ1c3NpbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
    {
        name: "Comercial",
        image: "https://images.unsplash.com/photo-1604328698804-8d5a31499ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbmZlciVDMyVBQW5jaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
    {
        name: "Projetos Galerias",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "#",
    },
];

const cardsContainer = document.querySelector('[data-js="cards"]');

function generateCardsTemplate(cards) {
    let html = "";

    cards.forEach((card) => {
        html += `
            <article class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <a class="card card-inicio h-100 d-flex flex-row justify-content-center" href="${card.link}">
                    <div class="card-img-content">
                        <img
                            class="card-img slide-in-left"
                            src="${card.image}"
                        />
                    </div>

                    <div class="card-body d-flex align-items-center justify-content-center">
                        <h5 class="card-title mb-0">${card.name}</h5>
                    </div>
                </a>
            </article>
        `;
    });

    return html;
}

cardsContainer.innerHTML = generateCardsTemplate(cards);
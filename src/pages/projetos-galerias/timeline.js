const timelines = [
    {
        status: "status-concluido",
        number: "1",
        link: "popup.html",
        popup: 'data-fancybox data-type="iframe"',
        iconStatus: "bi bi-check-circle-fill",
        iconStatusTooltip: "Concluído",
        value: "100",
        name: "Vistoria Inicial",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-concluido",
        number: "2",
        link: "#",
        iconStatus: "bi bi-check-circle-fill",
        iconStatusTooltip: "Concluído",
        value: "100",
        name: "Assinatura Contrato",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-progresso status-active",
        number: "3",
        link: "#",
        iconStatus: "bi bi-check-circle-fill",
        iconStatusTooltip: "Em progresso",
        value: "50",
        name: "Boas Vindas",
        text: "Em progresso",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "4",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Aprovação Projetos",
        text: "Aguardando",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-reprovado",
        number: "5",
        link: "#",
        iconStatus: "bi bi-x-circle",
        iconStatusTooltip: "Não Aprovado",
        value: "0",
        name: "Liberação Obras",
        text: "Não Aprovado",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "6",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Prevenção",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "7",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Sesmit",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "8",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Execução",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "9",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Vistoria Intermediária",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "10",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Vistoria Fina",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },

    {
        status: "status-aguardando",
        number: "11",
        link: "#",
        iconStatus: "bi bi-stop-circle",
        iconStatusTooltip: "Aguardando",
        value: "0",
        name: "Inauguração",
        text: "Processos Concluídos",
        data: "16/06/2023",
        hora: "10:44",
    },
];

const timelineContainer = document.querySelector('[data-template="timeline"]');
console.log(timelineContainer);

function generateTemplateTimeline(timelines) {
    let html = "";

    timelines.forEach((timeline) => {
        html += `
            <li class="stage ${timeline.status}">
                <div class="content-active">
                    <div class="ring">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <div class="text">Atual</div>
                            <i class="bi bi-arrow-down"></i>
                        </div>
                        <span></span>
                    </div>
                </div>

                <a class="card overflow-hidden text-decoration-none position-relative" data-bs-toggle="tooltip" data-bs-title="${timeline.iconStatusTooltip}" ${timeline.popup} href="${timeline.link}">
                    <span class="number z-3">
                        <i class="num">${timeline.number}</i>
                    </span>

                    <article class="card-body text-center p-2 z-2">
                        <div class="d-flex align-items-center justify-content-center flex-column">
                            <span class="fs-2 mb-1 status">
                                <i class="${timeline.iconStatus}"></i>
                            </span>

                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <span>${timeline.value}</span>
                                <i class="bi bi-percent"></i>
                            </div>
                        </div>

                        <h5 class="stage-title">${timeline.name}</h5>

                        <div class="stage-text">
                            ${timeline.text}
                        </div>

                        <hr class="my-1">

                        <div class="d-flex align-items-center justify-content-center gap-1" style="font-size: 0.8rem;" data-bs-toggle="tooltip" data-bs-title="Atualização">
                            <i class="bi bi-arrow-repeat"></i>
                            <span>${timeline.data}</span>
                            <span>${timeline.hora}</span>
                        </div>
                    </article>
                </a>
            </li>
        `;
    });

    return html;
}

timelineContainer.innerHTML = generateTemplateTimeline(timelines);

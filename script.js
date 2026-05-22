const informacoes = {
    'horta': {
        titulo: "Hortas Sustentáveis",
        texto: "Usamos gotejamento solar e sensores de umidade para economizar 40% de água.",
        stats: "Área: 10 Hectares | Produção: 100% Orgânica"
    },
    'animais': {
        titulo: "Pecuária Ética",
        texto: "Nossos animais vivem livres e usamos rastreamento digital para garantir a saúde individual.",
        stats: "Saúde: 100% Monitorada | Alimentação: Pasto Natural"
    },
    'cavalos': {
        titulo: "Cavalos de Lida",
        texto: "Criação focada em genética e respeito, essenciais para o transporte sustentável na fazenda.",
        stats: "Raças: Crioulo e Quarto de Milha"
    },
    'flores': {
        titulo: "Jardins de Polinização",
        texto: "Plantamos flores nativas para manter as abelhas próximas, o que aumenta a produtividade das hortas.",
        stats: "Espécies: 50+ | Colmeias: 12 ativas"
    }
};

function mostrarDetalhes(setor) {
    const modal = document.getElementById('modalInfo');
    const info = informacoes[setor];

    document.getElementById('modalTitle').innerText = info.titulo;
    document.getElementById('modalText').innerText = info.texto;
    document.getElementById('modalStats').innerText = info.stats;

    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById('modalInfo').style.display = "none";
}

// Fechar se clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modalInfo');
    if (event.target == modal) {
        fecharModal();
    }
}
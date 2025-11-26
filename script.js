// Dados dos Jogos
const jogos = [
    {
        titulo: "Cyber Odyssey 2099",
        genero: "RPG / Mundo Aberto",
        vendas: "4.5 Milhões",
        avaliacao: "9.8/10",
        imagem: "https://images.unsplash.com/photo-1535378437327-101419a16d5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Shadows of Valhalla",
        genero: "Ação / Aventura",
        vendas: "3.2 Milhões",
        avaliacao: "9.5/10",
        imagem: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Velocity X: Drift",
        genero: "Corrida / Simulação",
        vendas: "1.8 Milhões",
        avaliacao: "9.2/10",
        imagem: "https://images.unsplash.com/photo-1552317666-6b83f3630f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Star Commander",
        genero: "Estratégia / Sci-Fi",
        vendas: "900 Mil",
        avaliacao: "8.9/10",
        imagem: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Função para renderizar os jogos
function carregarJogos() {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    jogos.forEach(jogo => {
        const card = document.createElement('div');
        card.classList.add('game-card');

        card.innerHTML = `
            <div class="game-img" style="background-image: url('${jogo.imagem}')"></div>
            <div class="game-info">
                <span class="genre">${jogo.genero}</span>
                <h3>${jogo.titulo}</h3>
                <div class="stats-row">
                    <span>🛒 ${jogo.vendas}</span>
                    <span style="color: var(--neon-cyan)">⭐ ${jogo.avaliacao}</span>
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 15px; padding: 10px; font-size: 0.9rem;" onclick="comprar('${jogo.titulo}')">Jogar Agora</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function comprar(nome) {
    alert(`Iniciando download de: ${nome}... \nPrepare-se para a aventura!`);
}

// Inicialização
window.onload = function() {
    carregarJogos();
    console.log("Sistema Jogos Inicializado.");
};
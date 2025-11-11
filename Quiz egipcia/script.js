function enviarResposta(correta) {
    let pontuacao = Number(localStorage.getItem("quizPontuacao")) || 0;

    if (correta) {
        pontuacao++;
        localStorage.setItem("quizPontuacao", pontuacao);
    }

    // PEGA O NOME DO ARQUIVO ATUAL (ex: quiz1.html)
    const paginaAtual = location.pathname.split("/").pop();

    // EXTRAI APENAS O NÚMERO DO NOME DO ARQUIVO
    const numeroPagina = parseInt(paginaAtual.replace("quiz", "").replace(".html", ""));

    // QUANTIDADE TOTAL DE PÁGINAS DO QUIZ
    const totalPaginas = 5; // <-- ALTERE se tiver mais perguntas

    if (numeroPagina < totalPaginas) {
        location.href = `quiz${numeroPagina + 1}.html`;
    } else {
        location.href = "resultado.html";
    }
}

const refazer = document.querySelector('#bt_refazer');
const acertos = Number(localStorage.getItem("quizPontuacao")) || 0;
const total = 5; // quantidade total de perguntas

document.getElementById("mensagemResultado").textContent =
    `Você acertou ${acertos} de ${total} perguntas!`;

// quando o botão for clicado, executa:
refazer.addEventListener("click", function () {
    localStorage.removeItem("quizPontuacao");
    window.location.href = "quiz1.html"; // coloque aqui o nome da primeira página
});

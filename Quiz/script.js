function enviarResposta(correta) {
    let pontuacao = Number(localStorage.getItem("quizPontuacao")) || 0;
    if (correta) pontuacao++;
        localStorage.setItem("quizPontuacao", pontuacao);

    const paginaAtual = Number(location.pathname.match(/\d+/)[0]);
    if (paginaAtual < 10) {
        location.href = `quiz${paginaAtual + 1}.html`;
    } else {
        location.href = "resultado.html";
    }
}

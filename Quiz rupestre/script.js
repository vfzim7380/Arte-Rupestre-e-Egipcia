const btn = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

window.addEventListener("load", () => {
    document.querySelectorAll(".animar-entrada").forEach(el => {
        el.classList.add("ativo");
    });
});

// BOTÃO DE LEITURA DE ACESSIBILIDADE
document.addEventListener("DOMContentLoaded", () => {
    const btnLer = document.getElementById("btnLer");
    const pergunta = document.getElementById("pergunta");
    const alternativas = document.querySelectorAll("#alternativas button");

    btnLer.addEventListener("click", () => {
        let texto = pergunta.innerText + ". ";

        alternativas.forEach(alt => {
            texto += alt.innerText + ". ";
        });

        const speech = new SpeechSynthesisUtterance(texto);
        speech.lang = "pt-BR";
        speech.rate = 1;
        speech.pitch = 1;

        speechSynthesis.cancel();
        speechSynthesis.speak(speech);
    });
});

function enviarResposta(correta) {
    let pontuacao = Number(localStorage.getItem("quizPontuacao")) || 0;

    if (correta) {
        pontuacao++;
        localStorage.setItem("quizPontuacao", pontuacao);
    }

    const paginaAtual = location.pathname.split("/").pop();

    const numeroPagina = parseInt(paginaAtual.replace("quiz", "").replace(".html", ""));

    const totalPaginas = 5;

    if (numeroPagina < totalPaginas) {
        location.href = `quiz${numeroPagina + 1}.html`;
    } else {
        location.href = "resultado.html";
    }
}

const refazer = document.querySelector('#bt_refazer');
const voltar = document.querySelector('#bt_inicio')
const acertos = Number(localStorage.getItem("quizPontuacao")) || 0;
const total = 5;

document.getElementById("mensagemResultado").textContent =
    `Você acertou ${acertos} de ${total} perguntas!`;

refazer.addEventListener("click", function () {
    localStorage.removeItem("quizPontuacao");
    window.location.href = "quiz1.html";
});

voltar.addEventListener("click", function () {
    localStorage.removeItem("quizPontuacao");
    window.location.href = "../inicio/index.html";
});

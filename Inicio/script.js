 const meuBotao1 = document.querySelector('#bt_rupestre');
const meuBotao2 = document.querySelector('#bt_egipcia');

function aplicarTransicao(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
    window.location.href = url;
    }, 100);
}

meuBotao1.addEventListener('click', (event) => {
    event.preventDefault();
    aplicarTransicao("http://127.0.0.1:5500/Rupestre/rupestre.html");
});

meuBotao2.addEventListener('click', (event) => {
    event.preventDefault();
    aplicarTransicao("http://127.0.0.1:5500/Egipcia/egipcia.html");
});
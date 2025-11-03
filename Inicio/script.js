const meuBotao1 = document.querySelector('#bt_rupestre');
const meuBotao2 = document.querySelector('#bt_egipcia');

meuBotao1.addEventListener('click', (event) => {
    event.preventDefault();
    aplicarTransicao("http://127.0.0.1:5500/Rupestre/rupestre.html");
});

meuBotao2.addEventListener('click', (event) => {
    event.preventDefault();
    aplicarTransicao("http://127.0.0.1:5500/Egipcia/egipcia.html");
});


function aplicarTransicao(destino) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = destino;
    }, 300);
}
window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
});

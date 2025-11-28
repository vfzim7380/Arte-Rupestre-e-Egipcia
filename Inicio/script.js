const btRupestre = document.querySelector('#bt_rupestre');
const btEgipcia = document.querySelector('#bt_egipcia');

function criarOverlay(imagem, lado, destino) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.backgroundImage = `url('${imagem}')`;

    if(lado === 'esquerda') {
        overlay.style.left = '0';
        overlay.style.transformOrigin = 'left';
    } else {
        overlay.style.right = '0';
        overlay.style.transformOrigin = 'right';
    }

    document.body.appendChild(overlay);

    document.querySelectorAll('.botao').forEach(b => b.style.pointerEvents = 'none');

    setTimeout(() => {
        overlay.classList.add('expandir');
    }, 50);

    setTimeout(() => {
        window.location.href = destino;
    }, 1500);
}

btRupestre.addEventListener('click', e => {
    e.preventDefault();
    criarOverlay('../img/platão.png', 'esquerda', 'http://127.0.0.1:5500/Rupestre/rupestre.html');
});

btEgipcia.addEventListener('click', e => {
    e.preventDefault();
    criarOverlay('../img/imageminicialegito.png', 'direita', 'http://127.0.0.1:5500/Egipcia/egipcia.html');
});

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
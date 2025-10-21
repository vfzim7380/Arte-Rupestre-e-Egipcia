const obras = document.querySelectorAll('.rupestre, .egipcia');
const explicacao = document.getElementById('explicacao');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const imagemExp = document.getElementById('imagemExp');
const fechar = document.getElementById('fechar');

obras.forEach(obra => {
    obra.addEventListener('click', () => {
    const nome = obra.querySelector('h1').innerText;
    const desc = obra.getAttribute('data-exp');
    const imgSrc = obra.querySelector('img').src;

    titulo.innerText = nome;
    descricao.innerText = desc;
    imagemExp.src = imgSrc;

    explicacao.classList.add('ativo');
    });
});

fechar.addEventListener('click', () => {
    explicacao.classList.remove('ativo');
});

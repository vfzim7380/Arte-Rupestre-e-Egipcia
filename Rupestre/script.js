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
})

const abrir = document.getElementById("abrirjanela");
const janela = document.getElementById("janela");
const fechar = document.getElementById("fechar");

abrir.onclick = () => {
    janela.style.display = "block";
};

fechar.onclick = () => {
    janela.style.display = "none";
};

const abri2 = document.getElementById("abrirjanela2");
const janela2 = document.getElementById("janela2");
const fechar2 = document.getElementById("fechar2");

abrir2.onclick = () => {
    janela2.style.display = "block";
};

fecha2.onclick = () => {
    janela2.style.display = "none";
};
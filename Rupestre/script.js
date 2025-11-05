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
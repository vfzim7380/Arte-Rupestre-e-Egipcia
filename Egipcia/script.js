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
const btn_quiz = document.getElementById("btn-quiz");

btn_quiz.addEventListener("click", function() {
    window.location.href = "../Quiz egipcia/quiz1.html";
});
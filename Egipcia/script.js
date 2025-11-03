window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (!link.href || link.target === "_blank" || link.href.startsWith("#")) return;

    e.preventDefault();
    const url = link.href;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  });
});

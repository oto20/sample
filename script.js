document.querySelectorAll(".menu-title.has-plus").forEach(title => {
  title.addEventListener("click", () => {
    const block = title.parentElement;

    document.querySelectorAll(".menu-block").forEach(b => {
      if (b !== block) {
        b.classList.remove("open");
        const t = b.querySelector(".menu-title");
        if (t) t.classList.remove("open");
      }
    });

    block.classList.toggle("open");
    title.classList.toggle("open");
  });
});

document.querySelectorAll(".text-item.has-plus-inner").forEach(item => {
  item.addEventListener("click", () => {
    const detail = item.nextElementSibling;
    detail.classList.toggle("open");
  });
});

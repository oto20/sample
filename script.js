const titles = document.querySelectorAll(".menu-title.has-plus");

titles.forEach(title => {
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

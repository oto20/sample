document.addEventListener("click", async (e) => {

  if (e.target.classList.contains("menu-title")) {
    const item = e.target.parentElement;
    const submenu = item.querySelector(".submenu");
    const url = e.target.dataset.load;

    // 他のトップ階層を閉じる
    document.querySelectorAll(".menu-item.open").forEach(i => {
      if (i !== item) i.classList.remove("open");
    });

    // about.html 読み込み
    if (url && !submenu.dataset.loaded) {
      const res = await fetch(url);
      submenu.innerHTML = await res.text();
      submenu.dataset.loaded = "true";
    }

    item.classList.toggle("open");
  }

});

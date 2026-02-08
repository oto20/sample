document.querySelectorAll('.menu-item:not(.static) > .menu-title')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;

      // 他を閉じる
      document.querySelectorAll('.menu-item.open')
        .forEach(i => {
          if (i !== item) i.classList.remove('open');
        });

      item.classList.toggle('open');
    });
  });

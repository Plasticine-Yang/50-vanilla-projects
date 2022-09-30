(() => {
  const oMenu = document.getElementById("menu");
  const oToggler = document.getElementById("toggler");

  const init = () => {
    bindEvent();
  };

  const bindEvent = () => {
    oToggler.addEventListener("click", () => {
      oMenu.classList.toggle("expanded");
    });
  };

  init();
})();

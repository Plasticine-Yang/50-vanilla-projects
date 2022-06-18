(() => {
  const oContainer = document.querySelector(".container");
  const oOpen = document.querySelector("#open");
  const oClose = document.querySelector("#close");

  const handleOpenBtnClick = () => {
    oContainer.classList.add("show-nav");
  };

  const handleCloseBtnClick = () => {
    oContainer.classList.remove("show-nav");
  };

  const bindEvent = () => {
    oOpen.addEventListener("click", handleOpenBtnClick);
    oClose.addEventListener("click", handleCloseBtnClick);
  };

  const init = () => {
    bindEvent();
  };

  init();
})();

(() => {
  /** @type HTMLButtonElement */
  const oBtn = document.querySelector(".btn");
  /** @type HTMLInputElement */
  const oSearchInput = document.querySelector(".search-input");
  const oSearchContainer = document.querySelector(".search-container");

  /**
   * @description 点击搜索按钮给容器添加 active 类名
   */
  const handleBtnClick = () => {
    oSearchContainer.classList.add("active");
    oSearchInput.focus();
  };

  /**
   * @description 搜索输入框失去焦点时移除容器的 active 类名
   */
  const handleBlur = () => {
    oSearchContainer.classList.remove("active");
  };

  const bindEvent = () => {
    oBtn.addEventListener("click", handleBtnClick);
    oSearchInput.addEventListener("blur", handleBlur);
  };

  const init = () => {
    bindEvent();
  };

  init();
})();

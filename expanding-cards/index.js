(() => {
  const oPanels = document.querySelectorAll(".panel");

  const bindEvent = () => {
    oPanels.forEach((oPanel) => {
      oPanel.addEventListener("click", () => {
        removeActiveClasses();
        oPanel.classList.add("active");
      });
    });
  };

  const init = () => {
    bindEvent();
  };

  /**
   * @description remove active class of all panels
   */
  const removeActiveClasses = () => {
    oPanels.forEach((oPanel) => {
      oPanel.classList.remove("active");
    });
  };

  init();
})();

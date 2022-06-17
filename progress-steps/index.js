(() => {
  let curIdx = 0;
  const oProgress = document.querySelector("#progress");
  const oCircles = document.querySelectorAll(".circle");
  const oPrevBtn = document.querySelector("#prev");
  const oNextBtn = document.querySelector("#next");

  const handlePrevBtnClick = () => {
    curIdx = (curIdx - 1 + oCircles.length) % oCircles.length;
    updateProgress();
  };

  const handleNextBtnClick = () => {
    curIdx = (curIdx + 1) % oCircles.length;
    updateProgress();
  };

  const bindEvent = () => {
    oPrevBtn.addEventListener("click", handlePrevBtnClick);
    oNextBtn.addEventListener("click", handleNextBtnClick);
  };

  /**
   * @description 更新进度条状态
   */
  const updateProgress = () => {
    oCircles.forEach((oCircle, idx) => {
      // 将在 curIdx 之前的进度条项激活
      if (idx <= curIdx) {
        oCircle.classList.add("active");
      } else {
        oCircle.classList.remove("active");
      }

      // 改变进度条的长度
      const oActives = document.querySelectorAll(".active");
      oProgress.style.width = `${
        ((oActives.length - 1) / (oCircles.length - 1)) * 100
      }%`;

      // 根据激活的进度条项数改变按钮的状态
      if (curIdx === 0) {
        oPrevBtn.disabled = true;
      } else if (curIdx === oCircles.length - 1) {
        oNextBtn.disabled = true;
      } else {
        oPrevBtn.disabled = false;
        oNextBtn.disabled = false;
      }
    });
  };

  const init = () => {
    bindEvent();
  };

  init();
})();

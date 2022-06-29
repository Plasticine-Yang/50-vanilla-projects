(() => {
  /** @type HTMLDivElement */
  const oBackground = document.querySelector(".background");
  /** @type HTMLParagraphElement */
  const oLoadingText = document.querySelector(".loading-text");

  /**
   * @description 将数值按照一定范围进行映射
   * @param {number} num 待映射的数
   * @param {{srcStart: number, srcEnd: number, destStart: number, destEnd: number}} options
   */
  const mapNumberRange = (num, options) => {
    const { srcStart, srcEnd, destStart, destEnd } = options;

    return (
      ((num - srcStart) * (destEnd - destStart)) / (srcEnd - srcStart) +
      destStart
    );
  };

  const blurAnimation = () => {
    // 加载进度
    let progress = 0;
    let timer = setInterval(() => {
      progress++;

      if (progress === 100) {
        // 加载完毕则清除定时器
        clearInterval(timer);
      }

      // 设置加载文字的数值
      oLoadingText.innerText = `${progress}%`;
      // 设置加载文字的不透明度 -- 随加载进度变化
      oLoadingText.style.opacity = mapNumberRange(progress, {
        srcStart: 0,
        srcEnd: 100,
        destStart: 1,
        destEnd: 0,
      });
      // 设置背景图片的模糊半径 -- 随加载进度变化
      oBackground.style.filter = `blur(${mapNumberRange(progress, {
        srcStart: 0,
        srcEnd: 100,
        destStart: 30,
        destEnd: 0,
      })}px)`;
    }, 30);
  };

  const init = () => {
    setTimeout(blurAnimation, 5000);
  };

  init();
})();

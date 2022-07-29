((doc) => {
  const oContentList = doc.querySelectorAll(".content");

  const init = () => {
    // 初始的时候就需要执行一次 checkContent 用于显示开始时的元素
    checkContent();
    bindEvent();
  };

  /**
   * @description 检查 content 的上边界是否到达触发边界 到达的时候就添加
   *              show 类名 未到达则移除 show 类名
   */
  const checkContent = () => {
    // 取视口高度的 4 / 5 作为触发边界
    const triggerBottom = window.innerHeight * (4 / 5);
    oContentList.forEach((oContent) => {
      // 获取盒子的上边界 用于和 triggerBottom 进行比较
      const contentTop = oContent.getBoundingClientRect().top;

      if (contentTop < triggerBottom) {
        oContent.classList.add("show");
      } else {
        oContent.classList.remove("show");
      }
    });
  };

  const bindEvent = () => {
    window.addEventListener("scroll", handleScroll);
  };

  const handleScroll = checkContent;

  init();
})(document);

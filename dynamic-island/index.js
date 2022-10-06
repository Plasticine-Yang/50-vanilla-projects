(() => {
  const oDynamicIsland = document.getElementById("dynamic-island");
  const oScreenWrapper = document.getElementById("screen-wrapper");

  const init = () => {
    bindEvent();
  };

  const bindEvent = () => {
    // 点击灵动岛时将灵动岛状态变更为展开状态 -- 通过添加一个 .expanded 类名来记录展开状态
    oDynamicIsland.addEventListener("click", (e) => {
      // 阻止事件冒泡到屏幕区域的点击事件监听器中
      // 否则每次点击都会被外层的屏幕元素的点击事件监听器移除 .expanded 类名
      e.stopPropagation();
      oDynamicIsland.classList.add("expanded");
    });

    // 点击屏幕内其他区域时取消灵动岛的展开状态
    oScreenWrapper.addEventListener("click", () => {
      oDynamicIsland.classList.remove("expanded");
    });
  };

  init();
})();

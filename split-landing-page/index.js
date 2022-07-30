((doc) => {
  /** @type { HTMLDivElement } */
  const oContainer = doc.querySelector(".container");

  const init = () => {
    bindEvent();
  };

  const handleMouseEnter = (e) => {
    /** @type { HTMLDivElement } */
    const el = e.target;

    if (el.className === "left" || el.className === "right") {
      const className = `hover-${el.className}`;
      oContainer.classList.add(className);
    }
  };

  const handleMouseOut = (e) => {
    // 把 hover-left 和 hover-right 都移除
    oContainer.classList.remove("hover-left");
    oContainer.classList.remove("hover-right");
  };

  const bindEvent = () => {
    // 因为 mouseenter 事件最先触发的一定是容器元素
    // 所以只能利用事件捕获将事件传递到子元素
    // 而不能使用默认的事件冒泡机制
    // 利用事件捕获进行事件代理 给容器元素设置监听器
    // 通过事件捕获传递到 left 或者 right 元素获取到
    oContainer.addEventListener("mouseenter", handleMouseEnter, true);
    oContainer.addEventListener("mouseout", handleMouseOut, true);
  };

  init();
})(document);

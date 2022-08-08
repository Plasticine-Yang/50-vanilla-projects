(() => {
  /** @type { NodeListOf<HTMLElement> } */
  const oRipples = document.querySelectorAll(".ripple");

  const init = () => {
    bindEvent();
  };

  const bindEvent = () => {
    // 遍历所有带有 ripple 特效的元素 -- 添加 ripple 特效
    oRipples.forEach((oRipple) => {
      oRipple.addEventListener("click", rippleEffect);
    });
  };

  /**
   * @description 水波涟漪特效
   * @param {MouseEvent} e
   */
  const rippleEffect = (e) => {
    // 将触发特效的元素的定位设置为 relative -- 这样才能让特效元素定位到触发元素上
    // 要记录原始的 position，在特效结束后还原回去
    const rawPosition = e.target.style.position;
    e.target.style.position = "relative";

    // 将触发特效的元素的 overflow 设置为 hidden 防止水波溢出
    // 先记录原始的 overflow 然后强行改成 hidden 再在特效结束时将其恢复 避免影响原本的元素
    const rawOverflow = e.target.style.overflow;
    e.target.style.overflow = "hidden";

    // 计算水波涟漪特效的起点 -- 即鼠标点击处相对于触发特效元素的坐标
    const [mouseX, mouseY] = [e.clientX, e.clientY];

    // 获取触发水波涟漪特效的元素的位置
    const [elTop, elLeft] = [e.target.offsetTop, e.target.offsetLeft];

    // 计算鼠标点击处相对于触发水波涟漪特效元素的位置
    const [relativeX, relativeY] = [mouseX - elLeft, mouseY - elTop];

    // 在起点处插入一个 DOM 元素 用于形成水波涟漪特效
    const rippleEl = document.createElement("span");
    rippleEl.className = "ripple-effect";

    // 特效元素的位置正是鼠标相对于触发特效元素的位置
    rippleEl.style.left = `${relativeX}px`;
    rippleEl.style.top = `${relativeY}px`;

    // 添加到触发特效的元素中让特效生效
    e.target.appendChild(rippleEl);

    // 特效持续时长为 500ms -- 到时间后将特效元素移除
    setTimeout(() => {
      // 移除特效元素
      rippleEl.remove();

      // 将触发特效元素的 position 样式还原
      e.target.style.position = rawPosition;

      // 将触发特效元素的 overflow 样式还原
      e.target.style.overflow = rawOverflow;
    }, 500);
  };

  init();
})();

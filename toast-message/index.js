(() => {
  const oShowInfoMsgBtn = document.getElementById("show-info-msg-btn");
  const oShowSuccessMsgBtn = document.getElementById("show-success-msg-btn");
  const oShowWarnMsgBtn = document.getElementById("show-warn-msg-btn");
  const oShowErrorMsgBtn = document.getElementById("show-error-msg-btn");
  const oMessageContainer = document.getElementById("message-container");

  const init = () => {
    bindEvent();
  };

  const bindEvent = () => {
    oShowInfoMsgBtn.addEventListener("click", () => {
      Message({ message: "this is a message." });
    });

    oShowSuccessMsgBtn.addEventListener("click", () => {
      Message.success("Congrats, this is a success message.");
    });

    oShowWarnMsgBtn.addEventListener("click", () => {
      Message.warn("Warning, this is a warning message.");
    });

    oShowErrorMsgBtn.addEventListener("click", () => {
      Message.error("Oops, this is a error message.");
    });
  };

  function Message(options) {
    if (!options) return;
    // message 是弹窗的消息内容
    // type 是消息的类型
    const message = options.message || "";
    const type = options.type || "info";

    // 创建消息元素
    const messageEl = document.createElement("div");
    messageEl.className = "message";
    messageEl.innerText = message;

    // 根据类型添加对应类名
    messageEl.classList.add(type);

    // 消息添加到容器中
    oMessageContainer.appendChild(messageEl);

    // 2s 后移除
    setTimeout(() => {
      messageEl.remove();
    }, 3000);
  }

  Message.info = (message) => Message({ message, type: "info" });
  Message.success = (message) => Message({ message, type: "success" });
  Message.warn = (message) => Message({ message, type: "warn" });
  Message.error = (message) => Message({ message, type: "error" });

  init();
})();

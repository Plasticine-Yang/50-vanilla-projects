(() => {
  const skeletonEls = {
    oHeaderImgContainer: document.getElementById("header-img-container"),
    oCardTitle: document.getElementById("card-title"),
    oCardContent: document.getElementById("card-content"),
    oCardAuthorAvatarContainer: document.getElementById(
      "card-author-avatar-container"
    ),
    oCardAuthorName: document.getElementById("card-author-name"),
    oCardAuthorDate: document.getElementById("card-author-date"),
  };

  const init = () => {
    const fetchData = () => {
      setTimeout(() => {
        const data = {
          headerImg: `
            <img
              src="https://unsplash.com/photos/EaB4Ml7C7fE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8fHwxNjYwMzQwOTQ4&force=true"
              alt=""
            />
          `,
          cardTitle: "I love coding!",
          cardContent: "Talk is cheap. Show me the code.",
          cardAuthorAvatar: `
            <img
              src="https://pixabay.com/get/g9ac59ef391ebfbe7b3303ed0278986a31783bedd580d5e097980ed990d9bf646b5dc44932b18fd633df1813686e4f809.png?attachment="
              alt=""
            />
          `,
          cardAuthorName: "Plasticine",
          cardAuthorDate: "Aug 13, 2022",
        };

        // 插入加载到的数据
        skeletonEls.oHeaderImgContainer.innerHTML = data.headerImg.trim();
        skeletonEls.oCardTitle.innerHTML = data.cardTitle;
        skeletonEls.oCardContent.innerHTML = data.oCardContent;
        skeletonEls.oCardAuthorAvatarContainer.innerHTML =
          data.cardAuthorAvatar.trim();
        skeletonEls.oCardAuthorName.innerHTML = data.cardAuthorName;
        skeletonEls.oCardAuthorDate.innerHTML = data.cardAuthorDate;

        // 移除 `.skeleton` 类名从而 移除骨架屏特效
        for (const el of Object.values(skeletonEls)) {
          el.classList.remove("skeleton");
        }
      }, 3000);
    };

    fetchData();
  };

  init();
})();

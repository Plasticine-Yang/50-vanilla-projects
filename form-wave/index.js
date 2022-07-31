((doc) => {
  /** @type { HTMLLabelElement[] } */
  const oLabels = doc.querySelectorAll(".login-form .form-item label");

  const init = () => {
    oLabels.forEach((oLabel) => {
      oLabel.innerHTML = oLabel.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${idx * 50}ms;">${letter}</span>`
        )
        .join("");
    });
  };

  init();
})(document);

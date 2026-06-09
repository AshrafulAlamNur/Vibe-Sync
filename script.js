const modeElements = document.querySelectorAll(".mode");

modeElements.forEach((singleMode) => {
  singleMode.addEventListener("click", () => {
    modeElements.forEach((othersMode) => {
      const otherTick = othersMode.querySelector(".tick");
      otherTick.classList.add("invisible");
    });
    const currentTick = singleMode.querySelector(".tick");
    currentTick.classList.remove("invisible");
  });
});

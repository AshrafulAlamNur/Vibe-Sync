let musics = [
  {
    name: "Music 1",
    type: "Nature",
    cover: "cover1.jpg",
    src: "music1.mp3",
  },
  {
    name: "Music 2",
    type: "Nature",
    cover: "cover1.jpg",
    src: "music1.mp3",
  },
];
const modeElements = document.querySelectorAll(".mode");
const musicName = document.querySelector(".music-name");
const musicType = document.querySelector(".music-type");

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

musics.forEach((music) => {
  musicName.innerHTML = music.name;
  musicType.innerHTML = music.type;
});

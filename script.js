// বালের মিউজিকের তালিকা
let musics = [
  {
    name: "Deep Focus - Music For Studying, Concentration and Work",
    type: "Focus",
    cover: "cover1.jpg",
    src: "https://github.com/AshrafulAlamNur/Vibe-Sync/releases/download/v1.0.0/Deep.Focus.-.Music.For.Studying.Concentration.and.Work.m4a",
  },
  {
    name: "Music 2",
    type: "Nature",
    cover: "cover1.jpg",
    src: "https://github.com/AshrafulAlamNur/Vibe-Sync/releases/download/v1.0.0/Deep.Focus.-.Music.For.Studying.Concentration.and.Work.m4a",
  },
];

// সোনার এলিমেন্টস সিলেক্ট
const pageTitle = document.getElementsByTagName("title")[0];
const modeElements = document.querySelectorAll(".mode");
const musicName = document.querySelector(".music-name");
const musicType = document.querySelector(".music-type");
const playBtn = document.querySelector(".play-btn");
const playingGif = document.querySelector(".playing-gif");

// ধনের অডিও প্লে
let audio = new Audio(musics[0].src);

// শাওয়ার মুড সিলেক্টর 
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

musicName.innerHTML = musics[0].name;
musicType.innerHTML = musics[0].type;

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    playingGif.classList.remove("opacity-0");
    playingGif.classList.add("opacity-100");
    pageTitle.innerHTML = musics[0].name;
  } else {
    audio.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    playingGif.classList.remove("opacity-100");
    playingGif.classList.add("opacity-0");
    pageTitle.innerHTML = "VibeSync — SYNC YOUR MOOD";
  }
});

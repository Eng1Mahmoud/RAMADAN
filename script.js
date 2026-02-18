const doorLeft = document.querySelector(".door-left");
const doorRight = document.querySelector(".door-right");
const openSound = new Audio("./mixkit-scary-wooden-door-opening-190.wav");
const ramadanAudio = new Audio("./ramadan.m4a");
const container = document.getElementById("main-container");

let isAudioPlaying = false;

container.onclick = () => {
  if (isAudioPlaying) return;

  const isOpen = doorLeft.classList.contains("open-left");

  if (isOpen) {
    // Close doors
    doorLeft.classList.remove("open-left");
    doorRight.classList.remove("open-right");
    container.classList.remove("is-open");
    document.body.classList.remove("is-open");
  } else {
    // Open doors
    doorLeft.classList.add("open-left");
    doorRight.classList.add("open-right");
    container.classList.add("is-open");
    document.body.classList.add("is-open");

    // Play ramadan audio immediately (it usually has a slow start)
    ramadanAudio.play();

    // Play door sound with a slight lag to match the visual start
    setTimeout(() => {
      openSound.play();
    }, 200);
  }

  isAudioPlaying = true;
  container.style.pointerEvents = "none";

  ramadanAudio.onended = () => {
    isAudioPlaying = false;
    container.style.pointerEvents = "auto";
  };

  // Safe reset after 10s if audio fails to end
  setTimeout(() => {
    isAudioPlaying = false;
    container.style.pointerEvents = "auto";
  }, 10000);
};

// Create floating lanterns
function createLanterns() {
  const wrapper = document.querySelector(".wraper");
  for (let i = 0; i < 8; i++) {
    const lantern = document.createElement("div");
    lantern.className = "lantern";
    lantern.style.left = Math.random() * 100 + "vw";
    lantern.style.animationDelay = Math.random() * 15 + "s";
    lantern.style.width = 20 + Math.random() * 30 + "px";
    lantern.style.height = lantern.style.width;
    wrapper.appendChild(lantern);
  }
}

createLanterns();

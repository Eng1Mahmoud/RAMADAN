let left = document.querySelector(".contener .content .left");
let right = document.querySelector(".contener .content .right");
let open_sound = new Audio("./mixkit-scary-wooden-door-opening-190.wav");
let button = left.parentElement;

// Define a variable to track whether the audio is currently playing
let isAudioPlaying = false;

button.onclick = ( ) => {
  // If the audio is already playing, don't do anything
  if (isAudioPlaying) {
    return;
  }
  
  let audio = new Audio('./ramadan.m4a');
  if(left.classList.contains("openl") && right.classList.contains("openr")){
    left.classList.add("closel");
    right.classList.add("closer");
    left.classList.remove("openl");
    right.classList.remove("openr");
  }
  else{
    left.classList.remove("closel");
    right.classList.remove("closer");
    left.classList.add("openl");
    right.classList.add("openr");
    audio.play();
  }

  // Set isAudioPlaying to true while the audio is playing
  isAudioPlaying = true;
  
  // Play the opening sound effect after a short delay
  setTimeout(() => {
    open_sound.play();
  }, 500);
  
  // Disable the click event listener on the button element
  button.style.pointerEvents = "none";
  
  // Wait for the audio to finish playing
  audio.onended = () => {
    // Set isAudioPlaying to false and re-enable the click event listener on the button element
    isAudioPlaying = false;
    button.style.pointerEvents = "auto";
  };
};

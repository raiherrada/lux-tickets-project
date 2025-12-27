const container = document.getElementById("container")
const closeBtn = document.getElementById("close-btn")
const audio = document.getElementById("bg-audio")
const soundBtn = document.getElementById("sound-btn")

/*Time before the modal shows up*/

setTimeout(function(){
    container.style.display = "flex"
}, 2000)

/*Closing the modal's button*/

closeBtn.addEventListener("click", function(){
    container.style.display = "none"
})

/*Sound on button activation*/

soundBtn.addEventListener("click", function(){
    audio.volume = 0.4;
    audio.play();
    soundBtn.remove();
})

/*Blurry light around the cursor*/

document.addEventListener("pointermove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});
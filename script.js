const container = document.getElementById("container")
const closeBtn = document.getElementById("close-btn")
const audio = document.getElementById("bg-audio")
const soundBtn = document.getElementById("sound-btn")
const dataForm = document.getElementById("data-form")
const innerModal = document.getElementById("inner-modal")

// Time before the modal shows up

setTimeout(function(){
    container.style.display = "flex"
}, 2000)

// Closing the modal's button

closeBtn.addEventListener("click", function(){
    container.style.display = "none"
})

// Submitting the form

dataForm.addEventListener("submit", function(e){
    e.preventDefault()
    innerModal.innerHTML = `
    <div class="modal-loading">
        <img class="loading-icon" src="/images/loading.svg" alt="loading icon">
        <p class="loading-text" id="loading-text">Creating your wonderful ticket ✨...</p>
    </div>`

    setTimeout(function(){
        document.getElementById("loading-text").innerText = "Stealing your data 📈..."
    }, 1500)

    setTimeout(function(){
        document.getElementById("loading-text").innerText = "Adding extra feeds 🤑..."
    }, 3000)

    setTimeout(function(){
        document.getElementById("loading-text").innerText = "Not letting you choose seats 🚫..."
    }, 4500)
})

//Sound on button activation

soundBtn.addEventListener("click", function(){
    audio.volume = 0.4;
    audio.play();
    soundBtn.remove();
})

function startAudioOnce() {
    audio.volume = 0.4;
    audio.play().catch(() => {
    });

    document.removeEventListener("click", startAudioOnce);
    document.removeEventListener("keydown", startAudioOnce);
    document.removeEventListener("pointerdown", startAudioOnce);
}

// Any first interaction triggers music
document.addEventListener("click", startAudioOnce);
document.addEventListener("keydown", startAudioOnce);
document.addEventListener("pointerdown", startAudioOnce);

// Blurry light around the cursor

document.addEventListener("pointermove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});
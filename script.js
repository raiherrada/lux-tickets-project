const container = document.getElementById("container")
const closeBtn = document.getElementById("close-btn")
const audio = document.getElementById("bg-audio")
const soundBtn = document.getElementById("sound-btn")
const dataForm = document.getElementById("data-form")
const innerModal = document.getElementById("inner-modal")
let userAvatar = null
let userFullName = ""

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
    userFullName = document.getElementById("full-name").value.trim()
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

    // Final screen with the ticket
    
    setTimeout(function () {

    const avatarSrc = userAvatar || "/images/profile-placeholder.jpg";
    const displayName = userFullName || "Guest";

    innerModal.innerHTML = `
        <div class="ticket">
            <div class="ticket-left">
                <div class="barcode"></div>
                <div class="barcode-text">6789</div>
            </div>

            <div class="ticket-main">
                <div class="ticket-header">
                    <h1>TICKET</h1>
                </div>

                <div class="ticket-avatar">
                    <img src="${avatarSrc}" alt="Profile picture">
                </div>

                <p class="ticket-name">${displayName}</p>

                <div class="ticket-info">
                    <p class="artist">LUX TOUR</p>
                    <p class="date">18 · 04 · 2026</p>
                    <p class="time">Doors open at 21:00</p>
                </div>

                <div class="ticket-seating">
                    <div class="seat-box">
                        <span class="label">ROW</span>
                        <span class="value">C3</span>
                    </div>
                    <div class="seat-box">
                        <span class="label">SEAT</span>
                        <span class="value">15</span>
                    </div>
                </div>

                <div class="ticket-price">€130.99</div>
            </div>

            <div class="ticket-right">
                <div class="barcode"></div>
                <div class="barcode-text">012345</div>
            </div>
        </div>`
}, 6000);

})

// Creating avatar for the ticket

function createCircularAvatar(file, size = 160) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = size;
      canvas.height = size;

      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;

      // Circle mask
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(
        img,
        sx,
        sy,
        minSide,
        minSide,
        0,
        0,
        size,
        size
      );

      resolve(canvas.toDataURL("image/png"));
    };

    reader.readAsDataURL(file);
  });
}


// Capturing image from form

const profileInput = document.getElementById("profile-pic")
profileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  userAvatar = await createCircularAvatar(file);
});

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

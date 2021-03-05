
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // stops function running. This is for when a non music key is pressed.
    audio.currentTime = 0; //rewinds to start. This is so we dont have to wait till the sound is complete before hitting the same key again.
    audio.play()
    key.classList.add("playing"); // adds class that contains border/size style.
}

function removeTransition(e){
    if(e.propertyName !== "transform") return; // skip if its not a transform event
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound)
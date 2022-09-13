const musicBtn = document.getElementById("musicBtn");
const music = new Audio("https://github.com/Ebonian/enneagram-website/raw/main/client/src/audio/Touching_Moment.mp3");
music.load();
music.loop = true;
music.volume = 0.4;

const toggleMusic = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high fa-2xl"></i>'
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark fa-2xl"></i>'
    }
}

musicBtn.addEventListener("click", toggleMusic);

let username = prompt("What's your name?");
if (username != null) {
    alert(`Hello, ${username}! Feel free to browse this site.`);
}
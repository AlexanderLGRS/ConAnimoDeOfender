import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.getElementById("video")
const player = new MediaPlayer({el:video, plugins: [
    new AutoPlay(), new AutoPause()
]})

const playButton = document.getElementById("playButton")
const muteButton = document.getElementById("muteButton")
playButton.onclick = () => player.tooglePlay()
muteButton.onclick = () => player.toogleMute()

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error.message)
    })
}
function setSrc(element_id, src) {
    if (src != video.src) {
        console.log(`Entré ${src}`);
        var element = (element_id);
        element.src = src;
    }
}
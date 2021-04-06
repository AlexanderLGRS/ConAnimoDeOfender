var player;


const playButton = document.getElementById("playButton");
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        playerVars: { autoplay: 1, controls: 1 },
        videoId: "tO42kVbihJg",
    });
}
function playPauseVideo() {
    if (player.getPlayerState() != 1) {
        playVideo();
    } else {
        pauseVideo();
    }
}
function muteUnmuteVideo() {
    if (player.isMuted() != 1) {
        muteVideo();
    } else {
        unMuteVideo();
    }
}
function muteVideo() {
    player.mute()
    setSrc(muteButton, 'https://img.icons8.com/material-two-tone/24/000000/high-volume.png')
}
function unMuteVideo() {
    player.unMute()
    setSrc(muteButton, 'https://img.icons8.com/material-two-tone/24/000000/mute.png')
}
function pauseVideo() {
    player.pauseVideo()
    setSrc(playButton, 'https://img.icons8.com/material-two-tone/24/000000/play--v2.png')
}
function playVideo() {
    player.playVideo()
    setSrc(playButton, 'https://img.icons8.com/material-two-tone/24/000000/pause--v1.png')
}
function loadVideo(videoID) {
    if (player) {
        player.loadVideoById(videoID);
    }
}
function setSrc(element_id, src) {
    var element = (element_id);
    element.src = src;
}
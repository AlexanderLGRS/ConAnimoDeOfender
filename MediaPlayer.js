function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
}
MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted
        },
        set muted(value) {
            this.media.muted = value
        }
    }

    this.plugins.forEach(plugin => {
        plugin.run(player)
    })
}

MediaPlayer.prototype.play = function () {
    this.media.play()
    setSrc(playButton, 'https://img.icons8.com/material-two-tone/24/000000/pause--v1.png')
}

MediaPlayer.prototype.pause = function () {
    this.media.pause()
    setSrc(playButton, 'https://img.icons8.com/material-two-tone/24/000000/play--v2.png')
}

MediaPlayer.prototype.tooglePlay = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}
MediaPlayer.prototype.toogleMute = function () {
    if (this.media.muted) {
        this.unmute()
    } else {
        this.mute()
    }
}
MediaPlayer.prototype.mute = function () {
    this.media.muted = true
    setSrc(muteButton, 'https://img.icons8.com/material-two-tone/24/000000/high-volume.png')
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false
    setSrc(muteButton, 'https://img.icons8.com/material-two-tone/24/000000/mute.png')
}
MediaPlayer.prototype.toogleVideo = function (video, src) {
    setSrc(video, src)
    this.media.play()
}
export default MediaPlayer
function setSrc(element_id, src) {
    var element = (element_id);
    element.src = src;
}
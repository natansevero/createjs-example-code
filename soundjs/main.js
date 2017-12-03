var SoundID = "Thunder";

function loadSound() {
    createjs.Sound.registerSound('./assets/thunder.mp3', SoundID);
}

function playSound() {
    createjs.Sound.play(SoundID);
}
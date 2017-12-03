function loadImage() {
    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", (event) => {
        document.body.appendChild(event.result)
    })
    preload.loadFile('./assets/sabe_de_nada.jpg');
}
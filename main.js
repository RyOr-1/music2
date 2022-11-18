function preload() {
  hedwigs = loadSound("hedwigs.mp3");
  star = loadSound("star.mp3");
}

function setup() {
    canvas = createCanvas(640, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 640, 500)
}
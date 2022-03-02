statuS = "";

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
    object = document.getElementById("status_surity").value;
}

function modelLoaded()
{
    console.log("Model Loaded !!!");
    statuS = true;
}

function draw()
{
    image(video, 0, 0, 480, 480);
}
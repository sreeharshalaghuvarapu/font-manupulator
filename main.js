function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    
    canvas = createCanvas(550, 550)
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('poseNet Is Initalised!');    
}

function draw() {
    background('#969A97')
}

function gotPoses(reults)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
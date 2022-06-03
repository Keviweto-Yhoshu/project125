difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(500,500);
    canvas.position(430,130);
     
    poseNet = ml5.poseNet(Video, gotPoses);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized and loaded");
}

function gotPoses(){
    if(error){
        console.error(error)
    }
    if(results.length > 0){
        console.log(results);

       leftWristX = results[0].pose.leftWrist.X;
       rightWristX = results[0].pose.rightWrist.X;
       difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#6C91C2');
    textsize(10);
    fill('#FFE787');
    text('WhiteHatJr' ,50 , 400);
}
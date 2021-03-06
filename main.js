function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);


    canvas = createCanvas(400, 400);
    canvas.position(560, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
  textSize(noseX, noseY, difference);
  fill('#F90093');
  text('Sabarna', 50, 400)
  
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX +" noseY = " + noseY);
        
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
        
            console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
        }
    }
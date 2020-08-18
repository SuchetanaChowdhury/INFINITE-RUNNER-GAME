//Create variables here
var runner, runnerImg;
var backgroundImg;

function preload(){
  //load images here
  runnerImg=loadImage("images/boy.png");
  backgroundImg=loadImage("images/bg1.jpg");
}

function setup() {
  createCanvas(displayWidth*2,displayHeight);
  runner = createSprite(50,180,20,50);
  runner.debug = true;
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.5;
}

function draw() {  
  background(backgroundImg);
if(keyIsDown(RIGHT_ARROW)){
    runner.x = runner.x+10;
}
    camera.position.x = runner.x;
    console.log(camera.position.x+" "+camera.position.y+" "+runner.x);
    camera.position.y = displayHeight/2;

  drawSprites();
}
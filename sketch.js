var ball
function setup() {
  createCanvas(800,800);
  ball = createSprite (50,50,50,50)
}

function draw() 
{
  background("blue");

if (keyIsDown(RIGHT_ARROW)){
ball.position.x = ball.position.x+5
}

if (keyIsDown(LEFT_ARROW)){
  ball.position.x = ball.position.x-5
}

if (keyIsDown(UP_ARROW)){
  ball.position.y = ball.position.y-5
}

if (keyIsDown(DOWN_ARROW)){
  ball.position.y = ball.position.y+5
}





  drawSprites();

}





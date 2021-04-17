var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(0, 0, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.velocityX = 1;
  movingRect.velocityY = 2;
}

function draw() {
  background(255,255,255);  
 
  if((movingRect.x - fixedRect.x) < (movingRect.width/2 + fixedRect.width/2) 
  &&(fixedRect.x - movingRect.x) < (movingRect.width/2 + fixedRect.width/2)){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if((fixedRect.y - movingRect.y) < (movingRect.height/2 + fixedRect.height/2)
  && (movingRect.y - fixedRect.y) < (movingRect.height/2 + fixedRect.height/2)){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  

  drawSprites();
}
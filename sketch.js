var fixedRect, movingRect;
var sp1,sp2,sp3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sp1=createSprite(200,400,30,50);
  sp1.shapeColor="white";
  sp2=createSprite(400,600,20,30);
  sp2.shapeColor="lightgreen";
  sp3=createSprite(800,600,40,70);
  sp3.shapeColor="pink";
  fixedRect.velocityX=-1;
  sp1.velocityX=1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,sp1))
  {
    movingRect.shapeColor="red";
    sp1.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    sp1.shapeColor="white";
  }
  bounceOff(fixedRect,sp1)
  drawSprites();
}
var car, wall;
var speed,weight;


function setup()
{
  createCanvas(1600,400); 
  speed=random(4,70);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
  car.shapeColor="gray"
}

function draw()
{
  background(255,255,255);
  if(isTouching(car,wall)==true)
  {
    car.velocityX=0;
    if(0.5*weight*speed*speed/22500<100)
    {
      car.shapeColor=color(0,255,0)
    }
    else if(0.5*weight*speed*speed/22500>180)
    {
      car.shapeColor=color(230,230,0);
    }
    else if(0.5*weight*speed*speed/22500>100 && 0.5*weight*speed*speed/22500<180)
    {
      car.shapeColor=color(255,0,0);
    }
  }
  
  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var ground1;
var ground2;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		restitution : 0.95,
		isStatic : false, 
		friction : 0,
		desity : 1.2
	}

	ball = Bodies.circle(150,150,20,ball_options);
    World.add(world,ball);

	ground =new Ground(600,380,1200,20);
	ground1 = new Ground(800,290,15,150);
	ground2 = new Ground(1000,290,15,150)

	ellipseMode(RADIUS);
	rectMode(CENTER);

   keyPressed();
	Engine.run(engine);
  
}


function draw() {

  background(0);
  rectMode(CENTER)
  ground.show();
  ground1.show();
  ground2.show();
  ellipse(ball.position.x, ball.position.y, 20)

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:-0.010});
	}
  }






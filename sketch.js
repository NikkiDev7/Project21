
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700, 300);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.7,
		friction: 0,
		density: 1.2 
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(180, 280, 30, ball_options);
	World.add(world, ball); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("white");
  ellipse(ball.position.x,ball.position.y,30);
  

  Ground.display();
  drawSprites();

}




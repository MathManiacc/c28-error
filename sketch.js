const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(50, 600)

	ground = new Ground(200, 672, 2000, 20);

	Side1 = new Dustbin(550, 650, 200, 20);
	Side2 = new Dustbin(460, 600, 20, 100);
	Side3 = new Dustbin(640, 600, 20, 100);
  
}


function draw() {
	background(0);
  
	paper.display();
	ground.display();
	Side1.display();
	Side2.display();
	Side3.display();

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y:-60});
	}
}




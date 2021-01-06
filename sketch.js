const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new paper(75,650,20)
	groundy = new ground(400,675,800,50) 
	
	crate1=new ground(width/2+100, height-45, 100,10);
	crate2=new ground(width/2 + 50, height-65, 10,50);
	crate3=new ground(width/2+150, height-65, 10,50);

	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  Engine.update(engine);
  paperBall.display();
  groundy.display();
  crate1.display();
  crate2.display();
  crate3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x: 14, y: -10})
	}
}



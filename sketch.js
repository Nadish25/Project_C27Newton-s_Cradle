
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	roof=new Roof(520,20,450,40);
	roof=new Roof(width/2,height/4,500,20);
	/*bobObject1=new Bob(370,420);
	bobObject2=new Bob(420,420);
	bobObject3=new Bob(470,420);
	bobObject4=new Bob(520,420);
	bobObject5=new Bob(570,420);
	*/
	
	var bobDiameter=50;

	var startBobPositionX=width/2;
	var startBobPositionY=height/4+500;

	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1 = new Rope( bobObject1.body,roof.body, -150, 0);
	rope2 = new Rope( bobObject2.body,roof.body,-80,0);
	rope3 = new Rope( bobObject3.body,roof.body,-20, 0);
	rope4 = new Rope( bobObject4.body,roof.body, 50, 0);
	rope5 = new Rope( bobObject5.body,roof.body, 120, 0);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 }


 function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

	}
}

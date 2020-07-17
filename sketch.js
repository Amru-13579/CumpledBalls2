
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground, box1,box2,box3, box4;

function preload()
{
	dustbinIMG=loadImage("dustbingreen.png")
	paperIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,675,1000,50);
	ground.shapeColor = color("Green");

	//box1 = createSprite(290,620,20,100);
	//box2 = createSprite(510,620,20,100);
	//box3 = createSprite(400,660,200,20);
	//box1.shapeColor=color("red");
	//box2.shapeColor=color("red");
	//box3.shapeColor=color("red");

	//box1 = Bodies.rectangle(290,45,20,100,{restitution:0,isStatic:false});
	//World.add(world, box1);

	//box2 = Bodies.rectangle(510,45,20,100,{restitution:0,isStatic:false});
	//World.add(world, box2);

	//box3 = Bodies.rectangle(400,45,200,20,{restitution:0,isStatic:false});
	//World.add(world, box3);

	ground = Bodies.rectangle(400,675,1000,50,{restitution:1,isStatic:true});
	World.add(world, ground);

	//Create the Bodies Here.
	paper1 = new Paper(20,20);
	

	box1 = new Box (340,610,20,100);
	box2 = new Box (460,610,20,100);
	box3 = new Box (400,650,150,20);
	
	boxSprite=createSprite(400,600,200,250);
	boxSprite.addImage(dustbinIMG)
	boxSprite.scale = 0.4;

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
 
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-25})
	}
}




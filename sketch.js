var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

  //creating helicopter
	var helicopteroption ={
        isStatic: true
    }
  
	//fill("brown")
    helicopter = Bodies.rectangle(width/2,300,10,10,helicopteroption);
	World.add(world,helicopter);


  //creating ground
	var ground_options ={
        isStatic: true
    }
  
	//fill("brown")
    ground = Bodies.rectangle(width/2,680,800,80,ground_options);
	World.add(world,ground);
  
  //give same y position for helicopter and package . so that it hides behind it 

//creating package
	//fill("green");
	var op=
	{restitution:1,isStatic:true}
	packages = Bodies.rectangle(width/2,300,10,10,op);

	World.add(world,packages);

}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,800,50);
  rectMode(CENTER);
  fill("blue")
  rect(packages.position.x,packages.position.y,50,50);
  fill("pink")
  rect(helicopter.position.x,helicopter.position.y,90,60);

  //to give keypress
  if(keyDown("down"))
{
	Matter.Body.setStatic(packages,false);

  }

 
}





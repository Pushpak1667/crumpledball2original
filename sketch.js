
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1;
var dustbin,city;
var leftWall,rightWall,bottomWall;

function preload(){
	city = loadImage("city.jpg");
} 
function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,100);

ground = new Ground(windowWidth/2,windowHeight - 40,width,25);

dustbin = new Dustbin(windowWidth - 200,windowHeight - 200,200,300);

// leftWall = new BinWall(windowWidth - 200,windowHeight - 200,200,300);
leftWall = new BinWall(windowWidth - 300,windowHeight - 182,25,260);
rightWall = new BinWall(windowWidth - 100,windowHeight - 182,25,260);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(city);

paper.display();
ground.display();

// box1.display();
dustbin.display();
leftWall.display();
rightWall.display();



  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:155 ,y:-170})
	}

}

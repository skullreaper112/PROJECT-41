const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;
var thunder1,thunder2,thunder3,thunder4;
var engine, world;


function preload(){
    thunder1=loadImage("images/1.png");
    thunder2=loadImage("images/2.png");
    thunder3=loadImage("images/3.png");
    thunder4=loadImage("images/4.png");
}

function setup(){
   createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;   

   umbrella = new Umbrella(200,500) ;
}

function draw(){
    Engine.update(engine);
    umbrella.display();
}   


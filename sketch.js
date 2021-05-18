const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    hammer1 = new Hammer(10,10);
    stone1 = new Stone(400,10);
    iron1 = new Iron(300,10);
    rubber1 = new Rubber(200,10,50);
    plane1 = new Plane(600,height+20,1200,100)
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer1.display();
    iron1.display();
    stone1.display();
    rubber1.display();
 
}
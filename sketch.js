const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,rope;


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(600,390,1200,10);
    b1 = new Block(1000,370,50,50);
    b2=new Block(1000,310,50,50);
    b3=new Block(1000,250,50,50);
    b4=new Block(1000,190,50,50);
    ball=new Ball(900,50,30);
    rope=new Rope(ball.body,{x: 900,y:50})
}

function draw() {
  background(225); 
  ground.display(); 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  ball.display();
  rope.display();
  Engine.update (engine);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
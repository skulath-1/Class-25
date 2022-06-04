const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle = 60;

var ground;
var ball;

//Declaring the objects
var fan1,fan2,fan3,fan4;

var btn2;
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  btn2 = createImg("up.png");
  btn2.position(20, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);



  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, 400, 750, 20, ground_options);
  World.add(world, ground);


  var ball_options = {
    restitution: 0.95,
  };

  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  //Creating Objects for Ground Class
  fan1=new Ground(50,370,50,30);
  fan2= new Ground(150,370,50,30);
  fan3= new Ground(250,370,50,30);
  fan4= new Ground(350,370,50,30);
  
}

function draw() {
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 20,20);

  push()
  fill("brown")
  rect(ground.position.x, ground.position.y, 750, 20);
  pop()
 
   //ObjectName.FunctionName()
  fan1.show()
  fan2.show()
  fan3.show()
  fan4.show()
 
}

function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}

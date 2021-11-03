const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bg;
var form;
var spaceshipImg;

function preload() {
  bg = loadImage("solarsystem.jpg");
  spaceshipImg = loadImage("spaceship.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  form = new Form;
}


function draw() {
  background(bg);
  Engine.update(engine);

  drawSprites();

  form.display();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
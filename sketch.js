const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var bars=[];
var barsHeight=300; 
var plinko=[];
var plinko2=[];
var particles=[];




function setup() {
  createCanvas(800,480);
  engine = Engine.create();
    world = engine.world;

    ground=new Bars(width,5,800,5);
  
    for(var k=0;k<=width;k=k+80){
      bars.push(new Bars(k,height-barsHeight/2,barsHeight))
    }
    
    for(var p=40;p<=width;p=p+50){
      plinko.push(new Plinko(p,75));
    }
    
    for(var j=15;j<=width;j=j+50){
      plinko2.push(new Plinko(j,175));
    }
    
    if (frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

}

function draw() {
  background(255,255,255);  
  drawSprites();

  for(var k=0;k<=width;k=k+80){
    bars.display();
  }
  for(var p=40;p<=width;p=p+50){
    plinko.display();
  }

  for(var j=15;j<=width;j=j+50){
    plinko2.display();
  }

}
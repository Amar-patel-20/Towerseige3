const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var block1
var score = 0
var staticBackground
var backgroundImg

function preload(){
  getbackgroundImg();
  staticBackground = loadImage("bg.png")
}

function setup(){
  createCanvas(1200,800)
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,700,400,10)
  ground1 = new Ground(800,400,300,10)
  block1 = new Block(450,650,50,50)
  block2 = new Block(500,650,50,50)
  block3 = new Block(550,650,50,50)
  block4 = new Block(600,650,50,50)
  block5 = new Block(650,650,50,50)
  block6 = new Block(700,650,50,50)
  block7 = new Block(750,650,50,50)
  block8 = new Block(500,600,50,50)
  block9 = new Block(550,600,50,50)
  block10 = new Block(600,600,50,50)
  block11 = new Block(650,600,50,50)
  block12= new Block(700,600,50,50)
  block13 = new Block(550,550,50,50)
  block14 = new Block(600,550,50,50)
  block15 = new Block(650,550,50,50)
  block16 = new Block(600,500,50,50)

  block17 = new Block(700,350,50,50)
  block18 = new Block(750,350,50,50)
  block19 = new Block(800,350,50,50)
  block20 = new Block(850,350,50,50)
  block21 = new Block(900,350,50,50)
  block22 = new Block(750,300,50,50)
  block23 = new Block(800,300,50,50)
  block24 = new Block(850,300,50,50)
  block25 = new Block(800,250,50,50)
  
  

  
  
  
  ball = new Ball(200,400,50)
  chain = new Chain(ball.body,{x:200,y:100})
  }
function draw(){
  if(backgroundImg){
    background(backgroundImg)
  }
  else{
    background(staticBackground)
  }
  

  
  textSize(30)
    fill("blue")
    text("Score: "+score,1000,50)
  
  Engine.update(engine)
  
  ground.display()
  ground1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  ball.display()
  chain.display()

  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  block17.score()
  block18.score()
  block19.score()
  block20.score()
  block21.score()
  block22.score()
  block23.score()
  block24.score()
  block25.score()


  


}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly();
}
 function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball.body);
       
    }
}
async function getbackgroundImg(){
  var info = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var infojson = await info.json();
  console.log(infojson) 
  var datetime = infojson.datetime 
  var hour = datetime.slice(11,13)
  if(hour>=06 && hour<=18){
     backgroundImg = loadImage("bg.png"); 
  }
  else{
     backgroundImg  = loadImage("bg2.jpg");
  }
  
 }
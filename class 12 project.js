var garden,rabbit,apple,orangeL,redL
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangrImg=loadImage("orangeLeaf.png");
  redImg=loadImage("redImag.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(160,340,20,20);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
//boymoving on Xaxis with mouse'
  rabbit.x = world.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
drawSprites();

var select_sprites  = Math.round(rendom(1,3));

if (frameCount % 80 == 0){
  if (select_sprites == 1)
creatApples();
  }else if(select_sprites == 2){
creatOrange();
  }else{
creatRed();
}
}


function creatApples(){
  apple=createSprite(rendom(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
}


function creatApples(){
  orangeL=createSprite(rendom(50,350),40,10,10);
  orangeL.addImage(appleImg);
  orangeL.scale=0.07;
  orangeL.velocityY=3;
  orangeL.lifetime=150;
}

function creatApples(){
  redL=createSprite(rendom(50,350),40,10,10);
  redL.addImage(appleImg);
  redL.scale=0.07;
  redL.velocityY=3;
  redL.lifetime=150;
}



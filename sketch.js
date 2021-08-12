var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg;
var grass, grassImg;
var leaf, leafImg;
var orangeLeaf, orangeLeafImg;
var redImage, redImageImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}

function gamePlay(){
  rabbit.x = World.mouseX;
  
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }

  if(rabbit.x < 60)
  {
    rabbit.x = 60;
  }
  if(rabbit.x > 340)
  {
    rabbit.x = 340;
  }
}

function draw() {
  background(0);
  gamePlay();
  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  }
  function createApples(){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 6;
    apple.lifetime = 100;
    apple.scale = 0.1;
  }
  function createLeaves(){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.velocityY = 6;
    leaf.lifetime = 100;
    leaf.scale = 0.1;
} 
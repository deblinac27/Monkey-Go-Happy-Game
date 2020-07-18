//Global Variables
var banana, bananaImage, bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var background, backImage;
var player_running;
var ground;
var score = 0;


function preload(){
  backImage=loadImage("jungle.png");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monnkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  var background = addImage("jungle.png");
  background.x = 300;
  background.y = 150;
  background.velocity = -3;
  
  ground.visible = false;
  
  player_running = addAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monnkey_10.png");
  player_running.scale = 0.1;
  
}


function draw(){
 background(255); 
  background.x = background.width/2;
  
  if (bananaGroup.isTouching(player_running)){
    score = score + 2;
    bananaGroup.destroy();
        
  }
  
  switch(score){
    case 10:player_running.scale = 0.12;
      break;
    case 20:player_running.scale = 0.14;
      break;
    case 30:player_running.scale = 0.16;
      break;
    default: break;
  }
  
  drawSprites();
  text("Score" +score, 400, 100);
}




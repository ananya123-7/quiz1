var start, startImg,sound, soundi;


function preload(){
  startImg = loadImage("play.jpeg");
 soundi = loadSound("intros.wav");
}



function setup() {
  createCanvas(400, 400);
  background('white');

  //soundi.play();
}

function draw() {
  textSize(25);
   textFont("broadway")
text("Welcome to the QUIZ ZONE",22,100);
  start = createSprite(200,300);
  start.addImage(startImg);
  start.scale=0.25;
 if(mousePressedOver(start)){
   //soundi.play();
   play();
 }
  
  
  drawSprites();
}

function play(){
  start.visible=false;
  text.visible=false;
}


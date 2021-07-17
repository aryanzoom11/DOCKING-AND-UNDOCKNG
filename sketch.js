function preload(){
bg=loadImage("spacebg.jpg")
spaceUp=loadImage("spacecraft1.png")
spaceDown=loadImage("spacecraft2.png")
spaceLeft=loadImage("spacecraft3.png")
spaceRight=loadImage("spacecraft4.png")
spaceMain=loadImage("iss.png")
}





function setup() {
  createCanvas(800,400);
  var craft=createSprite(400, 200, 50, 50);
  craft.addImage(spaceMain)
  var iss=createSprite(350, 300, 50, 50);
  iss.addImage(spaceDown)
  iss.scale=0.11

}

function draw() {
  background(bg);  
  if (keyDown("left")){
craft.velocityX=-2;
  }
  drawSprites();
}
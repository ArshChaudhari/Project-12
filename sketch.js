
var Track ;
var Trackimage ;

var Jaxon ;
var Jaxonanimation ;

var Invisibleboundary1 ;
var Invisibleboundary2 ;

function preload(){
 
//pre-load images
  Trackimage = loadImage("path.png");
  Jaxonanimation = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  
 //create sprites here
Track = createSprite(200,100,20,200);
Track.scale=1.25;
Track.addImage(Trackimage);
Track.velocityY=4;

Jaxon = createSprite(200,200,20,200);
Jaxon.scale=0.75;
Jaxon.addAnimation("Jaxon",Jaxonanimation);

Invisibleboundary1 = createSprite(-1,200,76,400);
Invisibleboundary1.visible=false;

Invisibleboundary2 = createSprite(401,200,60,400);
Invisibleboundary2.visible=false;
}

function draw() {
  background(0);

Jaxon.x=World.mouseX;

Jaxon.collide(Invisibleboundary1);
Jaxon.collide(Invisibleboundary2);

if (Track.y>400) {
Track.y=height/2;
}

 drawSprites();
}

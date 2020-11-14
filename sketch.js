var TileGroup;
var score=0
function preload()
{
	backgroundIMG=loadImage("background.png")
}

function setup() {
	createCanvas(windowWidth/2,windowHeight);
	TileGroup=new Group();

}


function draw() {
  background(backgroundIMG);
  for(var i=0;i<TileGroup.length;i++){
    if(mousePressedOver(TileGroup.get(0))){
      TileGroup.get(0).destroy();
      score++
    }
  }
  for(var i=0;i<TileGroup.length;i++){
if(TileGroup.get(0).y>displayHeight){
  textSize(40)
  fill("red")
  strokeWeight(2);
stroke(15);
  text("GameOver",width/2,height/2)
}
  }
  textSize(30)
  fill("white")
  strokeWeight(2);
stroke(15);
  text("Score: "+score,20,20)
  
  spawnTiles()
  drawSprites();
  
}
function spawnTiles(){
  if (frameCount%40===0){
  var tiles=createSprite(50,0,100,150)
  tiles.velocityY=4+frameCount/100
  var num=Math.round(random(1,3))
  switch(num){
    case 1:tiles.x=width/4;
    break;
    case 2:tiles.x=width/2;
    break;
    case 3:tiles.x=3*width/4;
    break;
  }
  TileGroup.add(tiles);
  }
}



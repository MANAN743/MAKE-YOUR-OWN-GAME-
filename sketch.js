var TileGroup;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight);
	TileGroup=new Group();

}


function draw() {
  background(0);
  for(var i=0;i<TileGroup.length;i++){
    if(mousePressedOver(TileGroup.get(0))){
      TileGroup.get(0).destroy();
    }
  }
  for(var i=0;i<TileGroup.length;i++){
if(TileGroup.get(0).y>displayHeight){
  text("GameOver",width/2,height/2)
}
  }
  
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



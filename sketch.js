
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth/2,displayHeight);
	

}


function draw() {
  background(0);
  
  spawnTiles()
  drawSprites();
}
function spawnTiles(){
  
  var tiles=createSprite(50,0,40,50)
  tiles.velocityY=2

}



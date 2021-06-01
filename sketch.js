var canvas;
var music;
var Object1,Object2,Object3,Object4;
var movingRect;

function preload(){
music = loadSound("music.mp3");
}


function setup() {
createCanvas(800,600);

gameObject1=createSprite(100,550,100,20)
gameObject1.shapeColor="red";

gameObject2=createSprite(300,550,100,20)
gameObject2.shapeColor="green";

gameObject3=createSprite(500,550,100,20)
gameObject3.shapeColor="yellow";

gameObject4=createSprite(700,550,100,20)
gameObject4.shapeColor="blue";

movingRect = createSprite(400,100,20,20);
movingRect.shapeColor = "green";

}

function draw() {
background(rgb(169,169,169)); 
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
if(isTouching(movingRect,gameObject2)){
 movingRect.shapeColor = "green";
gameObject2.shapeColor = "black";
}
 else{
   movingRect.shapeColor = "green";
   gameObject2.shapeColor = "green";
 }

 

 if(isTouching(movingRect,gameObject1)){
   movingRect.shapeColor = "green";
  gameObject1.shapeColor = "orange";
  }
   else{
     movingRect.shapeColor = "green";
     gameObject1.shapeColor = "red";
   }


   if(isTouching(movingRect,gameObject3)){
     movingRect.shapeColor = "green";
    gameObject3.shapeColor = "violet";
    }
     else{
       movingRect.shapeColor = "green";
       gameObject3.shapeColor = "yellow";
     }


     if(isTouching(movingRect,gameObject4)){
       movingRect.shapeColor = "green";
      gameObject4.shapeColor = "white";
      }
       else{
         movingRect.shapeColor = "green";
         gameObject4.shapeColor = "blue";
       }









 drawSprites();
}

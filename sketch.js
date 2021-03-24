var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 450, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;


  movingRect.velocityX = -5;
  fixedRect.velocityX = 9; 
//  if (isTouching (movingRect, fixedRect)){

  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
  //}
  //else {

    //movingRect.shapeColor = "green";
//fixedRect.shapeColor = "green";



  //};
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function isTouching (ob1,ob2){
// find if two objects are touching/ colliding or not ---yes or no
if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
  && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
  && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
//movingRect.shapeColor = "red";
//fixedRect.shapeColor = "red";
return true
// true ==>> yes
}
else {
//movingRect.shapeColor = "green";
//fixedRect.shapeColor = "green";
return false
// false ==>>>no

// true and false // yes or no// 1 or 0// are known boolean values 

}


}


function bounceOff (ob1,ob2){
// 1. find if two things are colliding or not 
//2. move in opposite directions
if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
  && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){

      ob1.velocityX = ob1.velocityX *(-1);
      ob2.velocityX = ob2.velocityX *(-1);
         
  }

  if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){

      ob1.velocityY = ob1.velocityY *(-1);
      ob2.velocityY = ob2.velocityY *(-1);
    }


}
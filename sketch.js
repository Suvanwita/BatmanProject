const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 

var drops = [];
var boy;

function preload(){
 //var boyImg=loadImage("boy.jfif");
 
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(600,700);
 // createSprite(400, 200, 50, 50);

  
 var boy=new Umbrella(300,640);
//boy.addImage(boyImg);

var thunder=new Thunder(150,0);


    
 
}

function draw() {
  background(10);  
  //drawSprites();
 Engine.update(engine);

 for (var j = 0; j < drops.length; j++) { 
  drops[j].display();
 }
 if(frameCount%1===0){
  drops.push(new Drops(random(0,600),0));
 }

 ////////////
 
 // By Using Switch case method
 if(frameCount % 100 === 0) {
   //thunder sprite
thunder=createSprite(250,30,20,80);
var a=1;
while(a<2){
  var ran = Math.round(random(1,2));
    switch(ran) {
      case 1:thunder.addImage(ThunderImg);
              break;
      case 2: thunder.addImage(ThunderImg);
              break;
      default: break;
    }
  }  
  if(frameCount % 50 === 0 && frameCount % 100 !== 0) {
  thunder.destroy(); 
  }
 }
 
 ////////////

//boy.display();




}

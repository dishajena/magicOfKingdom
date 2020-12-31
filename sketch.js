var mo1, mo2, mo3, mo4,mo5
var counter=20
var hideMo1,hideMo2,hideMo3,hideMo4,hideMo5
var qustionarray=["click on the red brick","click on the blue brick"]
var randomQuestion 
var gamestate="start" 
var flag=0

function setup() {
  createCanvas(800,800);
hideMo1 = createSprite(random(50,100),random(50,700), 50, 50);
mo1=createSprite(hideMo1.x,hideMo1.y,50,50)
mo1.shapeColor="red"
hideMo2= createSprite(random(150,200), random(50,700), 50, 50);
mo2=createSprite(hideMo2.x,hideMo2.y,50,50)
 mo2.shapeColor="blue"
 hideMo3= createSprite(random(250,300),random(50,700), 50, 50);
 mo3=createSprite(hideMo3.x,hideMo3.y,50,50)
 mo3.shapeColor="green"
 hideMo4= createSprite(random(350,400),random(50,700), 50, 50);
 mo4=createSprite(hideMo4.x,hideMo4.y,50,50)
 mo4.shapeColor="yellow"
 hideMo5= createSprite(random(450,500),random(50,700), 50, 50);
 mo5=createSprite(hideMo5.x,hideMo5.y,50,50)
 mo5.shapeColor="purple"
 randomQuestion=Math.round(random(0,1))
 button=createButton("click here for the question")
 button.position(200,200)
 button.hide()
}

function draw() {
  background(0);
  if(frameCount%20===0){
    counter=counter-2
  }
   
  if(counter<=0) {
    mo1.visible=false
    mo2.visible=false
    mo3.visible=false
    mo4.visible=false
    mo5.visible=false
  button.show()
   
  button.mousePressed(function (){
 flag=1
 generateRandomQuestion()
})
  }

  if (mousePressedOver(mo1)&&randomQuestion===0&&mo1.visible===false){
gamestate="rightAnswer"
mo1.visible=true
  }
  else{
if(mousePressedOver(mo2)||mousePressedOver(mo3)||mousePressedOver(mo4)||mousePressedOver(mo5)){
 if(gamestate==="start"){
  gamestate="wrongAnswer"
 }
}  
  }
  if (mousePressedOver(mo2)&&randomQuestion===1&&mo2.visible===false){

    gamestate="rightAnswer"
    mo2.visible=true
      }
      else{
    if(mousePressedOver(mo1)||mousePressedOver(mo3)||mousePressedOver(mo4)||mousePressedOver(mo5)){
     if(gamestate==="start"){
      gamestate="wrongAnswer"
     }
    }  
      }
  if(gamestate==="rightAnswer"){
    text("right choose",400,400)
  
    switch(randomQuestion){
      case 0:magicObjectVisible(mo1); 
      break
      case 1:magicObjectVisible(mo2)
      break
      
    }

    gamestate="start"
    
   
    
    
   // gamestate="play"
  }
  if(gamestate==="wrongAnswer"){
    text("wrong choose",400,400)
  }

  drawSprites();
  }
function magicObjectVisible(object) {
  object.visible=true
}
function generateRandomQuestion(){
  if(randomQuestion===0&&gamestate==="start"&&mo1.visible===false&&flag===1){
    text(qustionarray[0],400,400)
  }
  else{
    if(randomQuestion===1&&gamestate==="start"&&mo2.visible===false&&flag===1){
    text(qustionarray[1],400,400)
  }
  }
}
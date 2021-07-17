const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create  here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){ 
background(backgroundImg)
}

    Engine.update(engine);

    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }
    else if(hour==0){
         text("Time : 12 AM",100,100);
       }
    else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }


}

async function getBackgroundImg(){
   
        var response = await fetch ('https://worldtimeapi.org/api/timezone/Asia/Tokyo');
        var jsonFormat = await response.json();
        var dt = jsonFormat.datetime;
        var hour = dt.slice(11, 13);
        
        if(hour>=04 && hour<=06 ){
            debugger;
            bg = loadImage("sunrise1.png");
            
        }else if(hour>=06 && hour<=08 ){
            debugger;
            bg =loadImage("sunrise2.png") ;
        }else if(hour>=08 && hour<=11 ){
            debugger;
            bg = loadImage("sunrise3.png");
        }else if(hour>=11 && hour<=13){
            debugger;
            bg =loadImage("sunrise4.png");
        }else if(hour>=13 && hour<=15){
            debugger;
            bg = loadImage("sunrise5.png");
        }else if(hour>=15 && hour<=17 ){
            debugger;
            bg = loadImage("sunrise6.png");
        }else if(hour>=17 && hour<=18 ){
            debugger;
            bg = loadImage("sunrise7.png");
        }else if(hour>=18 && hour<=20 ){
            debugger;
            bg = loadImage("sunrise8.png");
        }else if(hour>=20 && hour<=23 ){
            debugger;
            bg = loadImage("sunrise9.png");
        }else if(hour>=23 && hour==0){
            debugger;
            bg = loadImage("sunrise10.png");
        }else if(hour==0 && hour<=03){
            debugger;
            bg = loadImage("sunrise11.png");
        }else{
            debugger;
            bg = loadImage("sunrise12.png");
        }
    

  

}

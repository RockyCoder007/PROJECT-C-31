const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,score,j;
score=0;

var bg = "sprites/bg1.png";
var plinkos=[]
var divisions=[]
var particles=[]
var divisionHeight=300;



function setup(){
    //var canvas = createCanvas(480,800);
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    //test1 =new Particle(50,50,50);

    ground = new Ground(width/2,790,width,20);

    for(var k=0;k<=width;k=k+80){
        divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

    }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



}

function draw(){
    
    background("black");
    
    
    Engine.update(engine);


    ground.display();
   // test1.display()
    
    /*for(j=40;j<width;j+=50){
        for(var row=75; row < height/2;row+=200){
            plinkos.push(new Plinko(j,row))
        }

    }
    for(j= 15;j<width;j+=50){
        for(var row=175; row < height/2;row+=200){
            plinkos.push(new Plinko(j,row))
        }

    }
    */

    
    
    for(var z=0;z<plinkos.length;z++){
        
        plinkos[z].display();
    }
    
    
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }

   
    for(u=0;u<particles.length;u++){
        console.log("drawing particles")
        particles[u].display();
    }
    

   
    for(var a=0;a<divisions.length;a++){
        divisions[a].display();
    }
    

    
    

}



    



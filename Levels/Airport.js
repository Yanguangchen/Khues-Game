var time = 0;
var bg_x1 = 0;
var bg_x2;
var Airport;
var timeLeft;
var Frame1;
var Frame2;
var Frame3;
var currentFrame = 0;
var key;
var gravity = 1;
var score = 0;




//------------------Resource Packs-----------------------------//
function preload() {
    cloud_img = loadImage('../Resources/CloudPixel.png');
    tree_img = loadImage('../Resources/Tree.png');
    house_img = loadImage('../Resources/house.png');
    Frame1 = loadImage('../Resources/Walkingframe1.png');
    Frame2 = loadImage('../Resources/Walkingframe2.png');
    Frame3 = loadImage('../Resources/Walkingframe3.png');
    HDB_image = loadImage("../Resources/HDB.png");
    Ketchup = loadImage("../Resources/Ketchup.png");
    Jump = loadSound("../Resources/Jump.mp3");
    Boba = loadImage("../Resources/Boba.png");
    MBS = loadImage("../Resources/MBS.png");
    Dead = loadSound("../Resources/MarioDead.mp3");
    AirportAudio = loadSound("../Resources/AirportAudio.mp3");
    Tense = loadSound("../Resources/Tense.mp3");
}
//-----------------------------------------------------------//

//------------------------------------------------------S E T U P--------------------------------------------------------------------------------------//


function setup(){
    
    AirportAudio.play();
    AirportAudio.setVolume(0.5);

    
    
//-------------------------CANVAS AND GAME TIME--------------------XX
    createCanvas(1368,700);
    noFill();  
    bg_x2 = width;
    startTime = millis(); //timer that store the game elasped time
	
	
//--------------------------CHARACTER POSITIONING------------------//

    man = {
	x: 100,
	y: 520,
	ySpeed: 0
    };
    
//---------------------------OBSTACLE POSITIONING----------------//

    
obstacle = {
    x: 1320 ,
    y: random(500,450),
}

//--------------KETCHUP BOTTLE---------X
KetchupPos = {
    x: obstacle.x,
    y: obstacle.y,
    width: 100,
    height: 100,
    scale: 0.75
}

//-------------BOBA TEA---------------X
BobaPos = {
    x: obstacle.x - 500 ,
    y: obstacle.y - random(50,150),
    width: 100,
    height: 100,
    scale: 0.75
}
    
}
    
//------------------------------------------------D R A W----------------------------------------------------------------------------------------------//

function draw()
{
    background(0); //clear the canvas
    drawBackground(bg_x1);
    drawBackground(bg_x2);
    
//-----------------------------------------------------------------------------------------X
    bg_x1 -= 2; //bg value gets decremented                                                |
    bg_x2 -= 2; //                                                                         |
/*-----------------------------------------------------------------------------------------|
|              once background has fully scrolled to the left, the position is reset       |
------------------------------------------------------------------------------------------*/
                                                                                           //                                       
    if (bg_x1 < -width){                                                                   //                                       
        bg_x1 = width;                                                                     //                                     
    }                                                                                      //
                                                                                           //                                            
//-----------------------------------------------------------------------------------------//                                              
                                                                                           //
    if (bg_x2 < -width){                                                                   //
        bg_x2 = width;                                                                     //
    }                                                                                      //
                                                                                           //
//-----------------------------------------------------------------------------------------//
    
    
    
    
    
//------------F L O O R  G R A P H I C S-------//
                                             
strokeWeight(3);                        
fill(0, 191, 80);                           
let floorLength = 1368;                      
rect(0, 602, floorLength,100);               
                                             
//--------------------------------------------//
	

    

//---------------G U I  T I M E R------------------------------------X
let elapsedTime = millis() - startTime; // Calculate elapsed time    |
let seconds = int(elapsedTime / 1000);  // Convert to seconds        |
//-------------------------------------------------------------------X

    
    
//-------------------------------ON SCREEN MESSAGES--------------------------------------X
if(seconds < 3) {
stroke(0);
strokeWeight(4);
textFont("san serif");
textSize(30);
fill(255,255,255);
text("Get to the Aiport in time", 550,100);  //promt to get to the airport in time
    
}
    
//-------------------------------ELASPED TIME-------------------------------------------X
    
    else {
        timeLeft = 190 - seconds;
        fill(255,255,255);
        stroke(0);
        strokeWeight(4);
        textFont("monospace");
        textSize(20);
        text("Gate closes in " + timeLeft, 1150, 50); // shows the time elsaped
    }

//-------------------------------TIME RUNS OUT (DEPRECATED)------------------------------X   
if(seconds > 600) {
    stroke(0);
    strokeWeight(4);
    textFont("san serif");
    textSize(30);
    fill(255,255,255);
    text("The flight had took off Try again", 550,100);
    
    
} else {
    if(seconds > 500) {
        stroke(0);
        strokeWeight(4);
        textFont("san serif");
        textSize(30);
        fill(255,255,255);
        text("The flight will take off soon", 550,100);
    } 
}
//---------------------------------------------------------------------------------------X

    

//---------------------------------WALKING ANIMATION-------------------------------------X
    
    
// Choose which frame to display based on the current frame count
if (frameCount % 4 == 0) {  // Change image every 10 frames
    currentFrame = (currentFrame + 1) % 3;  // Cycle through 3 frames
    }


    //---------------This is happening at frame 0------------------
    if (currentFrame == 0) {
        image(Frame1, man.x, man.y, 100, 100);
	}
    //---------------This is happening at frame 1------------------
     else if (currentFrame == 1) {
        image(Frame2, man.x, man.y, 100, 100);
	 }
    //---------------This is happening at frame 2------------------
     else {
        image(Frame3, man.x, man.y, 100, 100);
    }
    //-------------------------------------------------------------


// Jumping animation-----------------------------------------------
    man.y += man.ySpeed;
	
// Apply gravity----------------------------------------------------
    man.ySpeed += gravity;
    
//Ground collision--------------------------------------------------
    if (man.y > 520) {
        man.y = 520;
		man.ySpeed = 0;}
	
//to prevent character from jumping too high----------------------
	else if(man.y <= 300) {
		man.y += 20;
		textFont("monospace");
		stroke(0);
		strokeWeight(2);
		text("Please dont jump too high and break my game - yg", 300,400);
	}
	
    
//------------------------------------------------------------------------------------------X
//                       O  B  S  T  A  C  L  E  S
//------------------------------------------------------------------------------------------X 

//---------------------------SPEED PROGRESSION----------------------------------------------X

let obstacleGone = false;
    
    if (seconds > 30 && seconds < 60) {
        KetchupPos.x -= 10;
        BobaPos.x -=7;
        console.log("speed is 10");
    
    }
    
    else if (seconds >= 60 && seconds < 80) {
        KetchupPos.x -= 8;
        BobaPos.x  -= 8;
        console.log("speed is 8");

    }
    
    else if (seconds >= 80 && seconds < 100) {
        KetchupPos.x -= 12;
        BobaPos.x -= 8;
        console.log("speed is 12");
        
    }
    
    else if (seconds >= 100 && seconds < 120) {
        KetchupPos.x -= 7;
        BobaPos.x -= 7;
        console.log("speed is 12");
        
    }
    
    else {
        KetchupPos.x -= 6;
        BobaPos.x -= 6;
        console.log("speed is 6 stage 1 speed");
    }

    
//------------------------------------DISAPLY THE OBSTACLES-----------------X
image(Ketchup,
     KetchupPos.x,
     KetchupPos.y,
     KetchupPos.width * KetchupPos.scale,
     KetchupPos.height * KetchupPos.scale);

image(Boba,
     BobaPos.x,
     BobaPos.y,
     BobaPos.width * BobaPos.scale,
     BobaPos.height * BobaPos.scale);

//---------------------------------RESET POSITION OF OBSTACLES---------------X
    
if(KetchupPos.x < 1) {
    obstacleGone =  true;
    KetchupPos.x = 1320;
    KetchupPos.y = 500 + random(5,10);}

if(BobaPos.x < 1) {
    obstacleGone =  true;
    BobaPos.x = 1320;
    BobaPos.y = 500 + random(5,20);
    
}


//---------------------------COLLISION DETECTION-----------------------------X
    

let threshold = 30; // Adjust this value to suit your specific images

    
if (dist(BobaPos.x, BobaPos.y, man.x, man.y) < threshold) {
    textFont("monospace");
    textSize(40 );
    stroke(0);
    strokeWeight(5);
    isJumping = true;  
    text("Ooff Try Again", 600  ,400); 
    AirportAudio.stop();
    Dead.play();
    Dead.setVolume(0.5);
    isJumping = true;
    noLoop();

}
//-----------------------------------------------------------------------------X



}

 

function drawBackground(x) {
    
    

//--------------Frame adjustments-------------------------------X
    push();          // save the current drawing style          |
    translate(x, 0); // shift everything to the right by x pix  |
//--------------------------------------------------------------X
    
//--------------BG of the game-----------------X
    background(0, 132, 255);
//---------------------------------------------x

  
/*-----------------------------------------------------------------------|
|                           C  L  O  U  D  S                             |
|-----------------------------------------------------------------------*/
            
    
//--------------PROPERTIES--------------------X
    clouds = {
        cloudscale: 1,
        cloudmid: 300,
        cloudlarge: 350,
        cloudsmall: 150,
        cloud1x: 30,
        cloud1y: 10 + sin(time) * 3,
        cloud2x: 600,
        cloud2y: 5 + sin(time) * 9,
        cloud3x: 1200,
        cloud3y: 5 + sin(time) * 5
    };
    
    
    
//-------------Left Cloud---------------------X
    image(cloud_img, 
          clouds.cloud1x,
          clouds.cloud1y, 
          clouds.cloudmid * clouds.cloudscale,
          clouds.cloudmid * clouds.cloudscale);
    
        image(cloud_img, 
          0,
          30, 
          clouds.cloudsmall * clouds.cloudscale,
          clouds.cloudsmall * clouds.cloudscale);
    
//------------Middle Clouds--------------------X
     image(cloud_img, 
          clouds.cloud2x,
          clouds.cloud2y, 
          clouds.cloudlarge * clouds.cloudscale,
          clouds.cloudlarge * clouds.cloudscale);
    
     image(cloud_img, 
          clouds.cloud3x,
          clouds.cloud3y, 
          clouds.cloudsmall * clouds.cloudscale,
          clouds.cloudsmall * clouds.cloudscale);
    
//-------------LAST CLOUD-----------------------X
    
     image(cloud_img, 
          clouds.cloud2x + 250,
          clouds.cloud2y - 100, 
          clouds.cloudmid * clouds.cloudscale,
          clouds.cloudmid * clouds.cloudscale);

//---------------------------------------------------------------------------X
//                                HOUSES                                     |
//---------------------------------------------------------------------------X

HDB = {
	x1: 400,
	y1: 530,
	scale: 0.7,
	width: 100,
	height: 100,
	
};
    

	
image(HDB_image, 
	  HDB.x1,
	  HDB.y1,
	  HDB.width * HDB.scale,
	  HDB.height * HDB.scale);
	
image(HDB_image, 
	  HDB.x1 + 50,
	  HDB.y1,
	  HDB.width * HDB.scale,
	  HDB.height * HDB.scale);
	
image(HDB_image, 
	  HDB.x1 + 100,
	  HDB.y1,
	  HDB.width * HDB.scale,
	  HDB.height * HDB.scale);
	
image(HDB_image, 
	  HDB.x1 + 150,
	  HDB.y1,
	  HDB.width * HDB.scale,
	  HDB.height * HDB.scale);
	
house = {
    scale: 2,
    width: 100,
    height: 100,
    x1: 100,
    y1: 480
};
    
image(MBS,
      house.x1 + 800,
      house.y1,
      house.width * 2,
      house.height * 2);
    
image(house_img, 
      house.x1,
      house.y1,
      house.width * house.scale,
      house.height * house.scale);
    
image(house_img, 
      house.x1 + 250,
      house.y1,
      house.width * house.scale,
      house.height * house.scale); 
    
    
image(house_img, 
      house.x1 + 500,
      house.y1,
      house.width * house.scale,
      house.height * house.scale);
    
image(house_img, 
      house.x1 + 750,
      house.y1,
      house.width * house.scale,
      house.height * house.scale);

image(house_img, 
      house.x1 + 1000,
      house.y1,
      house.width * house.scale,
      house.height * house.scale);
    

	
	




    
//---------------------------------------------------------------------------X
//                                 T  R  E  E  S                             |
//---------------------------------------------------------------------------X

    
tree = {
    scale: 3,
    width: 100,
    height: 100,
    x1: 200,
    y1: 415
};
    
image(tree_img, 
      tree.x1,
      tree.y1,
      tree.width * tree.scale,
      tree.height * tree.scale);
    
image(tree_img, 
      tree.x1 + 600,
      tree.y1,
      tree.width * tree.scale,
      tree.height * tree.scale);
    
    
image(tree_img, 
      tree.x1 + 1000,
      tree.y1,
      tree.width * tree.scale,
      tree.height * tree.scale);
    

    
    time += 0.05; // controls speed of cloud bop
    pop();  // restore the drawing style
    

}

//------USER TO INPUT JUMP---------------------------------------	
let isJumping = false;


function keyPressed() {
        if (keyCode === 32 && isJumping == false && man.y == 520) {  //as long as character is on ground, he is not jumping
            isJumping = true; //status of jump is now true
            man.ySpeed = -20; //Jump is initiate
            Jump.play(); //plays the jump music
            Jump.setVolume(0.1 );  // Set the volume to 50%
}
            
        }
            
	


function keyReleased() { //once key release
        isJumping = false; //character is not jumping
      
} 
//-------------------------------------------------------------- 



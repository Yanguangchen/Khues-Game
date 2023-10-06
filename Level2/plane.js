var cloud_x;
var cloud_2x;
var increment = 1;
var cloudbop;
var cameraPosX = 0;
var isRight = true;
var isLeft = false;
var gametime;
var red_increase = 1;
var green_increase = 1;
var blue_increase = 1;
var seconds;
var roadspeed = 0;
var time = 0
var planex = 470;
var yaxis;

function preload() {
    planeImg = loadImage("../Resources/VJ.png");
    Ketchup = loadImage("../Resources/Cat.png");
    Boba = loadImage("../Resources/doggo.png");
    quack = loadImage("../Resources/quacky.png");
    tree = loadImage("../Resources/tree.png");
    Dead = loadSound("../Resources/MarioDead.mp3");
    bg = loadSound("../Resources/plane.mp3");
    
}
    
function setup() {

  //CANVAS AND GAME TIME
  createCanvas(1500, 700);
    
        bg.play();

    
   //OBSTACLE POSITIONING

  obstacle = {
    y: random(500, 450),
  };

  //--------------KETCHUP BOTTLE---------X
  KetchupPos = {
    x: width,
    y: obstacle.y,
    width: 100,
    height: 100,
    scale: 0.75,
  };

  //-------------BOBA TEA---------------X
  BobaPos = {
    x: width,
    y: obstacle.y - random(50, 150),
    width: 100,
    height: 100,
    scale: 0.75,
  };

 //-------------quacky---------------X
  quacky = {
    x: width,
    y: obstacle.y - random(50, 150),
    width: 100,
    height: 100,
    scale: 0.75,
  };
    
 //-------------tree---------------X
  treePos = {
    x: width,
    y: obstacle.y - random(50, 150),
    width: 100,
    height: 100,
    scale: 1,
  };
    
    

  startgame();
}

function draw() {
     yaxis = constrain(mouseY, 0, 650);

    
    red_increase -= 0.05;
    green_increase -=0.05;
    blue_increase -= 0.05;
    
    red_increase
    background(25 + red_increase, 125 + green_increase, 255 + blue_increase);
    cloudbop = 8 * sin(frameCount / 30); //for the cloud to rise and fall
    fill(0);
    ellipse(mouseX, yaxis, 20, 20);
    drawStars();
    drawClouds();
    obstacles();
    
  let threshold = 35; // Adjust this value to suit your specific images
    
    
    console.log("DIST QUACKY)", dist(quacky.x, quacky.y, planex, yaxis));
//    
////    ellipse(BobaPos.x + 35, BobaPos.y + 40, 40,40);
////    ellipse(KetchupPos.x + 35, KetchupPos.y + 40, 40,40);
//      ellipse(planex , yaxis + 70, 40,40);
////    ellipse(planex - 50, yaxis + 70, 40,40);
////    ellipse(planex - 110, yaxis + 70, 40,40);
////    ellipse(quacky.x, quacky.y, 40,40);
//      ellipse(treePos.x, treePos.y, 40, 40);
//    

if (
  (dist(BobaPos.x + 35, BobaPos.y + 40, planex, yaxis + 70) < threshold) ||
  (dist(KetchupPos.x + 35, KetchupPos.y + 40, planex - 50, yaxis + 70) < threshold) ||
  (dist(KetchupPos.x + 35, KetchupPos.y + 40, planex - 110, yaxis + 70) < threshold) ||
  (dist(quacky.x, quacky.y - 50, planex, yaxis) < threshold) ||
  (dist(treePos.x, treePos.y - 50, planex, yaxis) < threshold) 
) {
  textFont("monospace");
  textSize(40);
  stroke(0);
  strokeWeight(5);
  isJumping = true;
  text("ooff try again", 600, 400);
  bg.stop();
  Dead.play();
  Dead.setVolume(0.5);
  noLoop();
}
  //-----------------------------------------------------------------------------X
}


function drawClouds() {
  //-------------------CLOUDS ANIMATIONS----------------------X

  for (var i = 0; i < cloud_x.length; i++) {
    gametime = millis();

    if (gametime < 100000) {
      increment -= 0.015;
        
    } else if (gametime > 100000) {
      increment += 0.015;
    }

    //----------------CLOUD SKETCH-----------------------------X

    noStroke();
    fill(200);

    ellipse(
      cloud_x[i].xPos + increment, //make sure that clouds move to the right
      130 + cloudbop, //add bopping effect to cloud
      100,
      100
    );
      
      
    image(planeImg, 300 , yaxis + cloudbop, 192,108);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 100, 110);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 100 + cloudbop, 80, 80);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 100 + increment, 130 + cloudbop, 100, 100);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 50, 50);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 140 + increment, 130 + cloudbop, 80, 50);
      
      
      
	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + (increment * 2), 430  + 150+ cloudbop, 100, 110);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 30 + (increment * 2), 435 + 150 + cloudbop, 30, 30);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 100 + (increment * 2), 430 + 150 + cloudbop, 100, 100);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 140 + (increment * 2) , 430 + 150 + cloudbop, 80, 50);
  }
//----------------SMALLER CLOUD-----------------------------X
    for (var i = 0; i < cloud2_x.length; i++) {
      fill(255);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 3, 70, 50, 50);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 3, 70, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 3, 70, 20, 20);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 3, 70, 40, 40);

      fill(225);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 2, 250, 70, 70);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 2, 250, 60, 60);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 2, 250, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 2, 250, 60, 60);
        
      fill(225);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 4, 500, 70, 70);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 4, 500, 60, 60);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 4, 500, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 4, 500, 60, 60);
        
      fill(255);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 3, 300, 50, 50);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 3, 300, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 3, 300, 20, 20);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 3, 300, 40, 40);
        

      fill(255);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 6, 600, 50, 50);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 6, 600, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 6, 600, 20, 20);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 6, 600, 40, 40);
    }
    
}


function drawStars() {
  let r = 5;

  fill(235, 231, 0);
  ellipse(planex - 400, 100, r);
  ellipse(planex + 400, 150, r);
  ellipse(planex + 400, 150, r);
  ellipse(planex + 350, 200, r);
  ellipse(planex + 430, 350, r);
  ellipse(planex + 300, 150, r);
  ellipse(planex + 200, 150, r);
  ellipse(planex + 250, 200, r);
  ellipse(planex + 170, 350, r);

  ellipse(planex - 330, 350, r);
  ellipse(planex - 200, 150, r);
  ellipse(planex - 100, 150, r);
  ellipse(planex - 150, 200, r);
  ellipse(planex - 70, 350, r);

  ellipse(planex - 400, 150, r);
  ellipse(planex - 500, 200, r);
  ellipse(planex - 450, 350, r);
}


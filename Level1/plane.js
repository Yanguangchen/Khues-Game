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

function preload() {
    plane = loadImage("../Resources/VJ.png");
    Ketchup = loadImage("../Resources/cat.png");
    Boba = loadImage("../Resources/doggo.png");
    Dead = loadSound("../Resources/MarioDead.mp3");
    bg = loadSound("../Resources/plane.mp3");
    ch = loadImage("../Resources/charlotte.png");
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
    x: 1500,
    y: obstacle.y,
    width: 100,
    height: 100,
    scale: 0.75,
  };

  //-------------BOBA TEA---------------X
  BobaPos = {
    x: 1500 - 500,
    y: obstacle.y - random(50, 150),
    width: 100,
    height: 100,
    scale: 0.75,
  };
    
    

  startgame();
}

function draw() {
    
    red_increase -= 0.01;
    green_increase -=0.01;
    blue_increase -= 0.01;
    
    red_increase
    background(25 + red_increase, 125 + green_increase, 255 + blue_increase);
    cloudbop = 8 * sin(frameCount / 30); //for the cloud to rise and fall
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
    drawClouds();
    obstacles();
    
  let threshold = 35; // Adjust this value to suit your specific images
    
    
//    
//    ellipse(BobaPos.x + 35, BobaPos.y + 40, 40,40);
//    ellipse(KetchupPos.x + 35, KetchupPos.y + 40, 40,40);
//    ellipse(planex - 50, mouseY + 70, 40,40);
//    ellipse(planex - 50, mouseY + 100, 40,40);
//    ellipse(planex - 110, mouseY + 150, 40,40);

if (
  (dist(BobaPos.x + 35, BobaPos.y + 40, planex - 50, mouseY + 70) < threshold) ||
  (dist(KetchupPos.x + 35, KetchupPos.y + 200, planex, mouseY + 100) < threshold) ||
  (dist(KetchupPos.x + 35, KetchupPos.y + 40, planex - 110, mouseY + 70) < threshold)
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


function startgame() {
  //------------------------CLOUD  SETUP------------------------------------//
    
  cloud_x = [
    { xPos: 200,   scale: 1 },
    { xPos: 600,   scale: 1 },
    { xPos: 900,   scale: 1 },
    { xPos: 1300,  scale: 1 },
    { xPos: 1600,  scale: 1 },
    { xPos: 2000,  scale: 1 },
    { xPos: 2500,  scale: 1 },
    { xPos: 3000,  scale: 1 },
    { xPos: 3500,  scale: 1 },
    { xPos: 4000,  scale: 1 },
    { xPos: 4500,  scale: 1 },
    { xPos: 5000,  scale: 1 },
    { xPos: 5500,  scale: 1 },
    { xPos: 6000,  scale: 1 },
    { xPos: 6500,  scale: 1 },
    { xPos: 7000,  scale: 1 },
    { xPos: 7500,  scale: 1 },
    { xPos: 8000,  scale: 1 },
    { xPos: 8500,  scale: 1 },
    { xPos: 9000,  scale: 1 },
    { xPos: 9500,  scale: 1 },
    { xPos: 10000, scale: 1 },
    { xPos: 10500, scale: 1 },
    { xPos: 11000, scale: 1 },
    { xPos: 11500, scale: 1 },
    { xPos: 12000, scale: 1 },
    { xPos: 12500, scale: 1 },
    { xPos: 13000, scale: 1 },
    { xPos: 13500, scale: 1 },
    { xPos: 14500, scale: 1 },
    { xPos: 15000, scale: 1 },
    { xPos: 15500, scale: 1 },
    { xPos: 16000, scale: 1 },
    { xPos: 16500, scale: 1 },
    { xPos: 17000, scale: 1 },
    { xPos: 17500, scale: 1 },
    { xPos: 18000, scale: 1 },
    { xPos: 18500, scale: 1 },
    { xPos: 19000, scale: 1 },
    { xPos: 19500, scale: 1 },
  ];

  //For the smaller clouds
cloud2_x = [
  { xPos: 200, scale: 1 }, { xPos: 600, scale: 1 }, { xPos: 900, scale: 1 },
  { xPos: 1300, scale: 1 }, { xPos: 1600, scale: 1 }, { xPos: 2000, scale: 1 },
  { xPos: 2500, scale: 1 }, { xPos: 3000, scale: 1 }, { xPos: 3500, scale: 1 },
  { xPos: 4000, scale: 1 }, { xPos: 4500, scale: 1 }, { xPos: 5000, scale: 1 },
  { xPos: 5500, scale: 1 }, { xPos: 6000, scale: 1 }, { xPos: 6500, scale: 1 },
  { xPos: 7000, scale: 1 }, { xPos: 7500, scale: 1 }, { xPos: 8000, scale: 1 },
  { xPos: 8500, scale: 1 }, { xPos: 9000, scale: 1 }, { xPos: 9500, scale: 1 },
  { xPos: 10000, scale: 1 }, { xPos: 105000, scale: 1 }, { xPos: 11000, scale: 1 },
  { xPos: 11500, scale: 1 }, { xPos: 12000, scale: 1 }, { xPos: 12500, scale: 1 },
  { xPos: 13000, scale: 1 }, { xPos: 13500, scale: 1 }, { xPos: 14500, scale: 1 },
  { xPos: 15000, scale: 1 }, { xPos: 15500, scale: 1 }, { xPos: 16000, scale: 1 },
  { xPos: 16500, scale: 1 }, { xPos: 17000, scale: 1 }, { xPos: 17500, scale: 1 },
  { xPos: 18000, scale: 1 }, { xPos: 18500, scale: 1 }, { xPos: 19000, scale: 1 },
  { xPos: 19500, scale: 1 }
];
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
      
	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 100, 110);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 100 + cloudbop, 80, 80);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 100 + increment, 130 + cloudbop, 100, 100);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 50, 50);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 140 + increment, 130 + cloudbop, 80, 50);
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
    }
    
    VJ();
}

function VJ() 
{
    
    image(ch, 300 , mouseY + cloudbop, 120,213);
}

function obstacles() {
//---------------------------SPEED PROGRESSION
    
    seconds = gametime / 1000;
    console.log(seconds);
    let obstacleGone = false;

  if (seconds > 30 && seconds < 60) {
    KetchupPos.x -= 20;
    BobaPos.x -= 20;
    roadspeed -= 5;
    console.log("speed is 10");
  } else if (seconds >= 60 && seconds < 80) {
    KetchupPos.x -= 8;
    BobaPos.x -= 8;
    BobaPos.y + sin(time) * 3;
    roadspeed -= 5;
    console.log("speed is 8");
  } else {
    KetchupPos.x -= 10;
    BobaPos.x -= 10;
    roadspeed -= 5;
    console.log("speed is 6 stage 1 speed");
  }

  if (seconds > 27 && seconds < 31) {
    strokeWeight(4);
    stroke(0);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
    noStroke();
  } else if (seconds > 50) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    noStroke();
  }
  //------------------------------------DISAPLY THE OBSTACLES-----------------X
  image(
    Ketchup,
    KetchupPos.x - 30,
    KetchupPos.y - 30,
    KetchupPos.width * KetchupPos.scale * 2,
    KetchupPos.height * KetchupPos.scale * 2
  );

  image(
    Boba,
    BobaPos.x - 20,
    BobaPos.y - 60,
    BobaPos.width * BobaPos.scale * 1.7,
    BobaPos.height * BobaPos.scale * 1.7
  );

  //---------------------------------RESET POSITION OF OBSTACLES---------------X

  if (KetchupPos.x < 1) {
    obstacleGone = true;
    KetchupPos.x = 1500;
    KetchupPos.y = random(0, 650);
  }

  if (BobaPos.x < 1) {
    obstacleGone = true;
    BobaPos.x = 1500;
    BobaPos.y = 500 + random(0, 650);
  }
}
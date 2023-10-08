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
var time = 0;
var planex = 470;
var yaxis;
var alpha1 = 0;
var moonincrement = 0.1;
var devmode = false;

function preload() {
  planeImg = loadImage("../Resources/VJ.png");
  Ketchup = loadImage("../Resources/Cat.png");
  Boba = loadImage("../Resources/doggo.png");
  quack = loadImage("../Resources/quacky.png");
  tree = loadImage("../Resources/Tree.png");
  moon = loadImage("../Resources/moon.png");
  Dead = loadSound("../Resources/MarioDead.mp3");
  bg = loadSound("../Resources/plane.mp3");
}

function setup() {
  //CANVAS AND GAME TIME
  createCanvas(1300, 700);

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
  yaxis = constrain(mouseY, 0, 550);

  red_increase -= 0.05;
  green_increase -= 0.05;
  blue_increase -= 0.05;
  red_increase;
  background(25 + red_increase, 125 + green_increase, 255 + blue_increase);
  cloudbop = 8 * sin(frameCount / 30); //for the cloud to rise and fall
  drawStars();
  drawClouds();
  obstacles();
  fill(50);
  rect(0, 650, width, 50);
  fill(255, 0, 0);
  rect(600, 660, 600, 30);

  fill(154, 0, 237);
  rect(600, 660, 0 - increment * 0.14, 30);

  fill(255);
  textSize(20);
  textFont("comic sans ms");
  text("Time till Danang: " + round(120 - seconds), 40, 680);
  text("✈️", 600 - increment * 0.14, 680);

  noStroke();
  noFill();

  frameRate(60);

  let threshold = 35; // Adjust this value to suit your specific images

  //          console.log("DIST QUACKY)", dist(quacky.x, quacky.y, planex, yaxis));
  //          ellipse(BobaPos.x + 35, BobaPos.y + 40, 40,40);
  //          ellipse(KetchupPos.x + 35, KetchupPos.y + 40, 40,40);
  //          ellipse(planex , yaxis + 70, 40,40);
  //          ellipse(planex - 50, yaxis + 70, 40,40);
  //          ellipse(planex - 110, yaxis + 70, 40,40);
  //          ellipse(quacky.x, quacky.y, 40,40);
  //          ellipse(treePos.x, treePos.y, 40, 40);

  if (
    (dist(BobaPos.x + 35, BobaPos.y + 40, planex, yaxis + 70) < threshold ||
      dist(BobaPos.x + 35, BobaPos.y + 40, planex - 50, yaxis + 70) <
        threshold ||
      dist(BobaPos.x + 35, BobaPos.y + 40, planex - 110, yaxis + 70) <
        threshold ||
      dist(KetchupPos.x + 35, KetchupPos.y + 40, planex, yaxis + 70) <
        threshold ||
      dist(KetchupPos.x + 35, KetchupPos.y + 40, planex - 50, yaxis + 70) <
        threshold ||
      dist(KetchupPos.x + 35, KetchupPos.y + 40, planex - 110, yaxis + 70) <
        threshold ||
      dist(quacky.x, quacky.y - 50, planex, yaxis) < threshold ||
      dist(quacky.x, quacky.y - 50, planex - 50, yaxis) < threshold ||
      dist(quacky.x, quacky.y - 50, planex - 110, yaxis) < threshold ||
      dist(treePos.x, treePos.y - 50, planex, yaxis) < threshold ||
      dist(treePos.x, treePos.y - 50, planex - 50, yaxis) < threshold ||
      dist(treePos.x, treePos.y - 50, planex - 110, yaxis) < threshold) &&
    devmode == false
  ) {
    textFont("monospace");
    fill(255);
    textSize(40);
    stroke(0);
    strokeWeight(5);
    isJumping = true;
    text("ooff try again", 600, 400);
    bg.stop();
    Dead.play();
    Dead.setVolume(0.5);
    noLoop();
    noStroke();
    noFill();
  } else if (devmode == true) {
    textFont("monospace");
    fill(255);
    stroke(0);
    textSize(40);
    text("Invincible", 600, 400);
    noStroke();
    noFill();
  }
  //-----------------------------------------------------------------------------X

  if (seconds >= 120) {
    window.location.href = "https://github.com/Yanguangchen/Khues-Game";
  }
}

let starsup = 0;

function keyPressed() {
  0;
  if (keyCode == 48) {
    devmode = true;
  }
}

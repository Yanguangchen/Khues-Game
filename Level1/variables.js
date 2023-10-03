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
var invincible;
var seconds;
var elaspedTime;
var cloud_x;
var increment = 1;
var cloudbop;
var floorPos_y = 600 ;
var trees_x;
var red;
var green;
var blue;
var roadspeed = 0;

//------------------Resource Packs-----------------------------//
function preload() {
  tree_img = loadImage("../Resources/Tree.png");
  house_img = loadImage("../Resources/house.png");
  Frame1 = loadImage("../Resources/Walkingframe1.png");
  Frame2 = loadImage("../Resources/Walkingframe2.png");
  Frame3 = loadImage("../Resources/Walkingframe3.png");
  HDB_image = loadImage("../Resources/HDB.png");
  Ketchup = loadImage("../Resources/Ketchup.png");
  Jump = loadSound("../Resources/Jump.mp3");
  Boba = loadImage("../Resources/Boba.png");
  MBS = loadImage("../Resources/MBS.png");
  Dead = loadSound("../Resources/MarioDead.mp3");
  AirportAudio = loadSound("../Resources/AirportAudio.mp3");
  Tense = loadSound("../Resources/Tense.mp3");
  grass = loadImage("../Resources/grass.png");
  sky = loadImage("../Resources/sky.jpg");
  car1 = loadImage("../Resources/car1.png");
  doggo = loadImage("../Resources/doggo.png");
  car2 = loadImage("../Resources/car2.png");
  quacky = loadImage("../Resources/quacky.jpg");
  fire = loadImage("../Resources/fire.gif");
  city = loadSound("../Resources/citySound.mp3");
  run = loadSound("../Resources/run.mp3");
}
//-----------------------------------------------------------//

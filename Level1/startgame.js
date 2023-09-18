function startgame() {
  invincible = false;
  AirportAudio.play();
  AirportAudio.setVolume(0.5);

  //CANVAS AND GAME TIME
  createCanvas(1500, 700);
  noFill();
  bg_x2 = width;
  startTime = millis(); //timer that store the game elasped time

  //CHARACTER POSITIONING

  man = {
    x: 100,
    y: 700,
    ySpeed: 0,
  };

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
    
    
  //------------------------CLOUD  SETUP------------------------------------//
  cloud_x = [
    { xPos: 200,   scale: 1},
    { xPos: 600,   scale: 1 },
    { xPos: 900,   scale: 1 },
    { xPos: 1300,  scale: 1 },
  ];
    
    cloud2_x = [
  { xPos: 100, scale: 1 }, { xPos: 600, scale: 1 }, { xPos: 850, scale: 1 },
  { xPos: 1200, scale: 1 }, 
];
    
    
      //------------------------GRASS  SETUP------------------------------------//
  //The flowers on the level
  grass_x = [
    80,
    120, 150, 200, 400, 430, 450, 680
  ];

  //Television on the ground because why noy
  grass2_x = [400, 1700, 3300];

  //Pipe flower
  grass3_x = [40, 900, 1300];
    
    //------------------------TREE  SETUP------------------------------------//

  trees_x = [
    { xPos: 50, scale: 0.4 },
    { xPos: 400, scale: 0.4 },
    { xPos: 700, scale: 0.4 },
    { xPos: 1100, scale: 0.4 },
    { xPos: 1800, scale: 0.4 },
    { xPos: 2200, scale: 0.4 },
    { xPos: 2500, scale: 0.4 },
  ];
}
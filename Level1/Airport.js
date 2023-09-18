function setup() {
    startgame();
}



function draw() {
  background(0);
  red =+ 1;
  drawBackground(red,bg_x1);
  drawBackground(bg_x2);
  bg_x1 -= 2; //bg value gets decremented                                                
  bg_x2 -= 2;                                                                         

  
  if (bg_x1 < -width) {
    
    bg_x1 = width; 
  } 

  if (bg_x2 < -width) {

    bg_x2 = width;
  }
    
    //------------F L O O R  G R A P H I C S-------//

  strokeWeight(1);
  fill(100);
  rect(0, 602, width, 100);
  console.log(roadspeed,"ROADSPEED");
  for(let i = 0; i < 100000; i += 100) { 
      fill(255);
      rect(i + roadspeed, 650, 40, 10);
  }
    
      for(let i = 0; i < 1000000; i += 200) { 
      image(car1, (i * -10) - roadspeed * 0.7, 560, 200,200);
  }

  GUI();
  animation();

  // Jumping animation-----------------------------------------------
  man.y += man.ySpeed;

  // Apply gravity----------------------------------------------------
  man.ySpeed += gravity;

  //Ground collision--------------------------------------------------
  if (man.y > 520) {
    man.y = 520;
    man.ySpeed = 0;
  }

  //to prevent character from jumping too high----------------------
  else if (man.y <= 300) {
    man.y += 20;
    textFont("monospace");
    stroke(0);
    strokeWeight(2);
    text("Please dont jump too high and break my game - yg", 300, 400);
  }
    
    obstacles();

  //---------------------------COLLISION DETECTION-----------------------------X

  let threshold = 30; // Adjust this value to suit your specific images

  if (
    (dist(BobaPos.x, BobaPos.y, man.x, man.y) < threshold ||
      dist(KetchupPos.x, KetchupPos.y, man.x, man.y) < threshold) &&
    invincible == false
  ) {
    textFont("monospace");
    textSize(40);
    stroke(0);
    strokeWeight(5);
    isJumping = true;
    text("ooff try again", 600, 400);
    AirportAudio.stop();
    Dead.play();
    Dead.setVolume(0.5);
    isJumping = true;
    noLoop();
  }
  //-----------------------------------------------------------------------------X
}

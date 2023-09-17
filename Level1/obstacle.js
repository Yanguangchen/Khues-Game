function obstacles() {
    
//---------------------------SPEED PROGRESSION

  let obstacleGone = false;

  if (seconds > 30 && seconds < 60) {
    KetchupPos.x -= 10;
    BobaPos.x -= 7;
    console.log("speed is 10");
  } else if (seconds >= 60 && seconds < 80) {
    KetchupPos.x -= 8;
    BobaPos.x -= 8;
    BobaPos.y + sin(time) * 3;
    console.log("speed is 8");
  } else if (seconds >= 80 && seconds < 100) {
    KetchupPos.x -= 12;
    BobaPos.x -= 8;
    bg_x1 -= 3;
    bg_x2 -= 3;
    currentFrame = (currentFrame + 1) % 2;
    console.log("speed is 12");
  } else if (seconds >= 100 && seconds < 112) {
    KetchupPos.x -= 7;
    BobaPos.x -= 7;
    console.log("speed is 12");
  } else if (seconds > 116 && seconds < 142) {
    KetchupPos.x -= 14;
    BobaPos.x -= 10;
    bg_x1 -= 4;
    bg_x2 -= 4;
    currentFrame = (currentFrame + 1) % 2;
    console.log("speed is 14");
  } else if (seconds > 142 && seconds <= 178) {
    KetchupPos.x -= 14;
    BobaPos.x -= 14;
    bg_x1 -= 6;
    bg_x2 -= 6;
    currentFrame = (currentFrame + 1) % 2;
    console.log("speed is 14");
  } else {
    KetchupPos.x -= 6;
    BobaPos.x -= 6;
    console.log("speed is 6 stage 1 speed");
  }

  if (seconds > 27 && seconds < 31) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  } else if (seconds > 57 && seconds < 60) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  } else if (seconds > 77 && seconds < 80) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  } else if (seconds >= 97 && seconds < 100) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  } else if ((seconds > 113) & (seconds < 116)) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  } else if (seconds > 139 && seconds < 142) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("SPEED CHANGING ", 550, 300);
  }

  //------------------------------------DISAPLY THE OBSTACLES-----------------X
  image(
    Ketchup,
    KetchupPos.x,
    KetchupPos.y,
    KetchupPos.width * KetchupPos.scale,
    KetchupPos.height * KetchupPos.scale
  );

  image(
    Boba,
    BobaPos.x,
    BobaPos.y,
    BobaPos.width * BobaPos.scale,
    BobaPos.height * BobaPos.scale
  );

  //---------------------------------RESET POSITION OF OBSTACLES---------------X

  if (KetchupPos.x < 1) {
    obstacleGone = true;
    KetchupPos.x = 1320;
    KetchupPos.y = 500 + random(5, 10);
  }

  if (BobaPos.x < 1) {
    obstacleGone = true;
    BobaPos.x = 1320;
    BobaPos.y = 500 + random(5, 20);
  }
}



function obstacles() {
//---------------------------SPEED PROGRESSION

  let obstacleGone = false;

  if (seconds > 30 && seconds < 60) {
    KetchupPos.x -= 10;
    BobaPos.x -= 7;
    roadspeed -= 5;
    console.log("speed is 10");
  } else if (seconds >= 60 && seconds < 80) {
    KetchupPos.x -= 8;
    BobaPos.x -= 8;
    BobaPos.y + sin(time) * 3;
    roadspeed -= 5;
    console.log("speed is 8");
  } else {
    KetchupPos.x -= 6;
    BobaPos.x -= 6;
    roadspeed -= 5;
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
    KetchupPos.x = 1500;
    KetchupPos.y = 500 + random(5, 10);
  }

  if (BobaPos.x < 1) {
    obstacleGone = true;
    BobaPos.x = 1500;
    BobaPos.y = 500 + random(5, 20);
  }
}



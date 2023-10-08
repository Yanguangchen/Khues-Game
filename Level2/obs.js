function obstacles() {
  //---------------------------SPEED PROGRESSION

  seconds = gametime / 1000;
  console.log(seconds);
  let obstacleGone = false;

  if (seconds > 10 && seconds < 30) {
    KetchupPos.x -= 15;
    BobaPos.x -= 15;
    quacky.x -= 15;
    treePos.x -= 10;
  } else if (seconds >= 30 && seconds < 50) {
    KetchupPos.x -= 10;
    BobaPos.x -= 10;
    quacky.x -= 10;
    BobaPos.y + sin(time) * 3;
    treePos.x -= 10;
  } else if (seconds >= 50 && seconds < 70) {
    KetchupPos.x -= 20;
    BobaPos.x -= 10;
    quacky.x -= 15;
    BobaPos.y + sin(time) * 3;
    treePos.x -= 20;
  } else if (seconds >= 70 && seconds < 80) {
    KetchupPos.x -= 25;
    BobaPos.x -= 25;
    quacky.x -= 25;
    BobaPos.y + sin(time) * 3;
    treePos.x -= 10;
  } else if (seconds >= 80 && seconds < 100) {
    KetchupPos.x -= 30;
    BobaPos.x -= 30;
    quacky.x -= 30;
    BobaPos.y + sin(time) * 3;
    treePos.x -= 10;
  } else {
    KetchupPos.x -= 10;
    BobaPos.x -= 10;
    quacky.x -= 10;
    treePos.x -= 10;
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

  image(
    quack,
    quacky.x - 30,
    quacky.y - 40,
    quacky.width * quacky.scale,
    quacky.height * quacky.scale
  );

  image(
    tree,
    treePos.x - 100,
    treePos.y - 100,
    treePos.width * treePos.scale * 2,
    treePos.height * treePos.scale * 2
  );

  //---------------------------------RESET POSITION OF OBSTACLES---------------X

  if (KetchupPos.x < 1) {
    KetchupPos.x = 1500 + 200;
    KetchupPos.y = random(0, 650);
  }

  if (BobaPos.x < 1) {
    BobaPos.x = 1500;
    BobaPos.y = random(0, 650);
  }

  if (quacky.x < 1) {
    quacky.x = 1500 + 400;
    quacky.y = random(0, 600);
  }

  if (treePos.x < 1) {
    treePos.x = 1500 + 400;
    treePos.y = random(0, 600);
  }
}

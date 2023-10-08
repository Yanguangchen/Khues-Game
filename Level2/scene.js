function drawStars() {
  let r = 5;

  fill(235, 231, 0, starsup);
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

  ellipse(planex + 700, 150, r);
  ellipse(planex + 700, 200, r);
  ellipse(planex + 750, 350, r);
  ellipse(planex - 700, 250, r);
  ellipse(planex - 700, 400, r);
  ellipse(planex - 750, 550, r);
  ellipse(planex + 700, 600, r);
  ellipse(planex + 700, 700, r);
  ellipse(planex + 750, 650, r);
  ellipse(planex - 700, 665, r);
  ellipse(planex - 700, 645, r);

  ellipse(planex + 600, 150, r);
  ellipse(planex + 600, 200, r);
  ellipse(planex + 600, 350, r);
  ellipse(planex - 650, 250, r);
  ellipse(planex - 650, 400, r);
  ellipse(planex - 660, 550, r);
  ellipse(planex + 645, 600, r);
  ellipse(planex + 680, 700, r);
  ellipse(planex + 550, 400, r);
  ellipse(planex - 500, 400, r);
  ellipse(planex - 545, 645, r);

  ellipse(planex - 400, 100 + 400, r);
  ellipse(planex + 400, 150 + 400, r);
  ellipse(planex + 400, 150 + 400, r);
  ellipse(planex + 350, 200 + 400, r);
  ellipse(planex + 430, 350 + 400, r);
  ellipse(planex + 300, 150 + 400, r);
  ellipse(planex + 200, 150 + 400, r);
  ellipse(planex + 250, 200 + 400, r);
  ellipse(planex + 170, 350 + 400, r);

  ellipse(planex - 330, 350 + 400, r);
  ellipse(planex - 200, 150 + 400, r);
  ellipse(planex - 100, 150 + 400, r);
  ellipse(planex - 150, 200 + 400, r);
  ellipse(planex - 70, 350 + 400, r);

  ellipse(planex - 400, 150 + 400, r);
  ellipse(planex - 500, 200 + 400, r);
  ellipse(planex - 450, 350 + 400, r);

  ellipse(planex + 700, 150 + 400, r);
  ellipse(planex + 700, 200 + 400, r);
  ellipse(planex + 750, 350 + 400, r);
  ellipse(planex - 700, 250 + 400, r);
  ellipse(planex - 700, 400 + 400, r);
  ellipse(planex - 750, 550 + 400, r);
  ellipse(planex + 700, 600 + 400, r);
  ellipse(planex + 700, 700 + 400, r); // note: this may go outside the canvas if not adjusted
  ellipse(planex + 750, 650 + 400, r);
  ellipse(planex - 700, 665 + 400, r);
  ellipse(planex - 700, 645 + 400, r);

  ellipse(planex + 600, 150 + 400, r);
  ellipse(planex + 600, 200 + 400, r);
  ellipse(planex + 600, 350 + 400, r);
  ellipse(planex - 650, 250 + 400, r);
  ellipse(planex - 650, 400 + 400, r);
  ellipse(planex - 660, 550 + 400, r);
  ellipse(planex + 645, 600 + 400, r);
  ellipse(planex + 680, 700 + 400, r); // note: this may go outside the canvas if not adjusted
  ellipse(planex + 550, 400 + 400, r);
  ellipse(planex - 500, 400 + 400, r);
  ellipse(planex - 545, 645 + 400, r);

  alpha1 += moonincrement;
  if (alpha1 > 255) {
    alpha1 = 255;
  }

  tint(255, alpha1);
  image(moon, planex + 450, 100, 150, 150);
  console.log("ALPHA", alpha1); // monitor the value of alpha
  noTint();

  if (starsup < 255) {
    starsup += 0.1; // increment starsup by 1, to gradually make stars visible
  }
}

function drawClouds() {
  //-------------------CLOUDS ANIMATIONS----------------------X

  for (var i = 0; i < cloud_x.length; i++) {
    gametime = millis();

    if (gametime < 100000) {
      increment -= 0.015;
    } else if (gametime > 100000) {
      increment -= 0.015;
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

    image(planeImg, 300, yaxis + cloudbop, 192, 108);

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 50 + increment,
      130 + cloudbop,
      100,
      110
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 50 + increment,
      100 + cloudbop,
      80,
      80
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 100 + increment,
      130 + cloudbop,
      100,
      100
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 50 + increment,
      130 + cloudbop,
      50,
      50
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 140 + increment,
      130 + cloudbop,
      80,
      50
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 50 + increment * 2,
      430 + 150 + cloudbop,
      100,
      110
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 30 + increment * 2,
      435 + 150 + cloudbop,
      30,
      30
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 100 + increment * 2,
      430 + 150 + cloudbop,
      100,
      100
    );

    ellipse(
      cloud_x[i].xPos * cloud_x[i].scale - 140 + increment * 2,
      430 + 150 + cloudbop,
      80,
      50
    );
  }
  //----------------SMALLER CLOUD-----------------------------X
  for (var i = 0; i < cloud2_x.length; i++) {
    fill(255);
    ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 3, 70, 50, 50);
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 3,
      70,
      40,
      40
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 3,
      70,
      20,
      20
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 3,
      70,
      40,
      40
    );

    fill(225);
    ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 2, 250, 70, 70);
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 2,
      250,
      60,
      60
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 2,
      250,
      40,
      40
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 2,
      250,
      60,
      60
    );

    fill(225);
    ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 4, 500, 70, 70);
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 4,
      500,
      60,
      60
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 4,
      500,
      40,
      40
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 4,
      500,
      60,
      60
    );

    fill(255);
    ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 3, 300, 50, 50);
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 3,
      300,
      40,
      40
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 3,
      300,
      20,
      20
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 3,
      300,
      40,
      40
    );

    fill(255);
    ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 6, 600, 50, 50);
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 6,
      600,
      40,
      40
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 6,
      600,
      20,
      20
    );
    ellipse(
      cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 6,
      600,
      40,
      40
    );
  }
}

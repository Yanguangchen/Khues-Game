function drawBackground(x) {
  //--------------Frame adjustments-------------------------------X
  push(); // save the current drawing style          |
  translate(x, 0); // shift everything to the right by x pix  |
  //--------------------------------------------------------------X
 

    
  background(25, 125, 255);

/*-----------------------------------------------------------------------|
|                           C  L  O  U  D  S                             |
|-----------------------------------------------------------------------*/
   //-------------------CLOUDS ANIMATIONS----------------------X

  for (var i = 0; i < cloud_x.length; i++) {
    gametime = millis();
              cloudbop = 20 * sin(frameCount / 30); //for the cloud to rise and fall
      
    //----------------CLOUD SKETCH-----------------------------X

    noStroke();
    fill(200);

    ellipse(
      cloud_x[i].xPos + increment, //make sure that clouds move to the right
      130 + cloudbop * 0.5, //add bopping effect to cloud
      100,
      100
    );

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop * 0.5, 100, 110);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 100 + cloudbop * 0.5, 80, 80);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 100 + increment, 130 + cloudbop * 0.5, 100, 100);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop * 0.5, 50, 50);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 140 + increment, 130 + cloudbop * 0.5, 80, 50);
  }

//----------------SMALLER CLOUD-----------------------------X

    for (var i = 0; i < cloud2_x.length; i++) {
      fill(255);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 70, 70 + cloudbop, 50, 50);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + 70, 70 + cloudbop, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + 70, 70 + cloudbop, 20, 20);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + 50, 70 + cloudbop, 40, 40);

      fill(225);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 100, 200 + cloudbop * 0.8, 70, 70);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + 100, 200 + cloudbop * 0.8, 60, 60);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + 100, 200 + cloudbop * 0.8, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + 100, 200 + cloudbop * 0.8, 60, 60);
    }
  //---------------------------------------------------------------------------X
  //                                HOUSES                                     |
  //---------------------------------------------------------------------------X

    image(quacky, 70, 300, 339, 344);
    stroke(random(0,255),
           random(0,255),
           random(0,255));
    strokeWeight(random(0,8));
    line(335,368, 600, 500 );
    image(fire, 420, 300, 400, 400);
    image(fire, 400, 300, 800, 400);
    image(fire, 420, 300, 800, 400);
    image(fire, 350, 250, 800, 400);
    image(fire, 370, 300, 700, 400);


  HDB = {
    x1: 400,
    y1: 500,
    scale: 1,
    width: 100,
    height: 100,
  };

  image(
    HDB_image,
    HDB.x1,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 50,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 100,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 150,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );
    
    
    
      image(
    HDB_image,
    HDB.x1,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 350,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 450,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  image(
    HDB_image,
    HDB.x1 + 450,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );
    
  image(
    HDB_image,
    HDB.x1 + 700,
    HDB.y1,
    HDB.width * HDB.scale,
    HDB.height * HDB.scale
  );

  house = {
    scale: 2,
    width: 150,
    height: 150,
    x1: 85,
    y1: 417,
  };
    

  image(MBS, house.x1 + 800, house.y1 + 35, house.width + 20 , house.height);

  image(
    house_img,
    house.x1,
    house.y1,
    house.width * house.scale,
    house.height * house.scale
  );

  image(
    house_img,
    house.x1 + 500,
    house.y1,
    house.width * house.scale,
    house.height * house.scale
  );


  image(
    house_img,
    house.x1 + 1000,
    house.y1,
    house.width * house.scale,
    house.height * house.scale
  );
    

  time += 0.05; // controls speed of cloud bop
        drawGrass();
        drawTrees();

  pop(); // restore the drawing style

  if (invincible == true) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(20);
    fill(255, 255, 255);
    text("INVINCIBILITY ON", 550, 100);
  }
    
}


function drawGrass() {
  //-------------------------------------TREE------------------------------//

  //-----------FOR LOOP FOR GRASS REPEAT-------------X

  for (var i = 0; i < grass_x.length; i++) {
    image(grass, grass_x[i], floorPos_y - 50, 50, 50);
  }
}

function drawTrees() {
  //-------------------------------------TREE------------------------------//

  //-----------FOR LOOP FOR TREE REPEAT-------------X

  for (var i = 0; i < trees_x.length; i++) {
    //-----------------------TRUNK-------------------------------------------X

    noStroke();
    fill(139, 69, 19); // color of tree trunk

    noStroke();
    // Move the rectangle down by 180 pixels
    rect(trees_x[i].xPos * trees_x[i].scale + 212, 288 + 180, 33, 144);

    // Move the first triangle down by 180 pixels
    fill(0, 80, 0);
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 180,
      370 + 180, //left angle
      trees_x[i].xPos * trees_x[i].scale + 280,
      370 + 180, // right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      260 + 180
    ); // Apex

    // Move the second triangle down by 180 pixels
    fill(0, 100, 0); //tree branch color
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 180,
      340 + 180, //left angle
      trees_x[i].xPos * trees_x[i].scale + 280,
      340 + 180, //right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      230 + 180
    ); //Apex

    // Move the third triangle down by 180 pixels
    fill(0, 120, 0); //tree branch color
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 180,
      300 + 180, //left angle
      trees_x[i].xPos * trees_x[i].scale + 270,
      300 + 180, //right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      230 + 180
    ); //Apex

    //-----------------------------------------------------------------------X
  }
}

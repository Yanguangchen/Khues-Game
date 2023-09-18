function GUI() {
    
  //---------------G U I  T I M E R------------------------------------X
  elapsedTime = millis() - startTime; // Calculate elapsed time    |
  seconds = int(elapsedTime / 1000); // Convert to seconds        |
  //-------------------------------------------------------------------X

  //-------------------------------ON SCREEN MESSAGES--------------------------------------X
  if (seconds < 3) {
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(30);
    fill(255, 255, 255);
    text("Get to the Aiport in time", 550, 300); //promt to get to the airport in time
  }

  //-------------------------------ELASPED TIME-------------------------------------------X
  else {
    timeLeft = 179 - seconds;
    fill(255, 255, 255);
    stroke(0);
    strokeWeight(4);
    textFont("comic sans MS");
    textSize(20);
    text("Gate closes in " + timeLeft, 1250, 50); // shows the time elsaped
  }

}
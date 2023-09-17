let isJumping = false;

function keyPressed() {
  if (keyCode === 32 && isJumping == false && man.y == 520) {
    //as long as character is on ground, he is not jumping
    isJumping = true; //status of jump is now true
    man.ySpeed = -20; //Jump is initiate
    Jump.play(); //plays the jump music
    Jump.setVolume(0.1); // Set the volume to 50%
  } else if (keyCode === 121) {
    invincible = true;
    console.log("invincibility is on");
  } else if (keyCode === 82) {
    location.reload();
  }
}

function touchStarted() {
  isJumping = true;
}

function touchEnded() {
  isJumping = false;
}

function keyReleased() {
  //once key release
  isJumping = false; //character is not jumping
}
//--------------------------------------------------------------

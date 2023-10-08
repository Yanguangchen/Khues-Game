function animation() {
  // Choose which frame to display based on the current frame count
  if (frameCount % 4 == 0) {
    // Change image every 10 frames
    currentFrame = (currentFrame + 1) % 4; // Cycle through 3 frames
  }
  if (currentFrame == 0) {
    image(Frame1, man.x, man.y, 100, 100);
  } else if (currentFrame == 1) {
    image(Frame2, man.x, man.y, 100, 100);
  } else {
    image(Frame3, man.x, man.y, 100, 100);
  }
}

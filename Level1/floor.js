function floor() {
  //------------F L O O R  G R A P H I C S-------//
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(0, 598, width, 100);
  console.log(roadspeed, "ROADSPEED");
  for (let i = 0; i < 100000; i += 100) {
    fill(255);
    noStroke();
    rect(i + roadspeed, 650, 40, 10);
    strokeWeight(3);
    stroke(0);
  }
}

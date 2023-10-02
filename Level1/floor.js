function floor() {
  //------------F L O O R  G R A P H I C S-------//

  strokeWeight(3);
  fill(100);
  rect(0, 602, width, 100);
  console.log(roadspeed,"ROADSPEED");
  for(let i = 0; i < 100000; i += 100) { 
      fill(255);
      rect(i + roadspeed , 650, 40, 10);
  }
}
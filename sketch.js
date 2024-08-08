let xPos = 25;
let direction = 1

// let yPos = 25;
// let bounce = true

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);

  fill(0, 255, 0);
  ellipse(xPos, 250, 50, 50);

  xPos += 3 * direction



  if (xPos > 525 || xPos < -25) {
    direction *= -1
  }



  // if (bounce == true) {
  //   yPos += 3
  // } 
  // if (bounce == false) {
  //   yPos -+ 3
  // }

  // if (yPos > 500) {
  //   bounce = false
  // }
  // if (yPos < 25) {
  //   bounce = true
  // }
}

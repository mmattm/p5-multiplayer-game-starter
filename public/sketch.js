function setup() {
  cv = createCanvas(500, 500);
  centerCanvas();
  noStroke();
}

function draw() {
  background(220);
  fill(0);
  textAlign(CENTER, CENTER);
  if (currentPlayer != null)
    text("You are :" + currentPlayer.id, width / 2, height / 2);
}
function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("pink");
    fill("pink");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 18);
    }
  }
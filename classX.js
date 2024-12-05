class InteractiveCanvas {
    constructor(canvasWidth = 600, canvasHeight = 600) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
  
      // Initialize variables
      this.circleSize = canvasWidth - 300;
      this.PosX = canvasWidth / 10;
      this.PosY = canvasHeight / 2;
      this.colors = ['red', 'green', 'blue', 'yellow', 'purple'];
      this.text = "Andrew Chanover";
      this.textHeight = 24;
      this.textX = canvasWidth - 10;
      this.textY = 10;
      this.textWidthValue = 0; // To be set after measuring text width
    }
  
    setup() {
      createCanvas(this.canvasWidth, this.canvasHeight);
      background(0, 0, 0);
      this.textWidthValue = textWidth(this.text); // Measure text width
    }
  
    draw() {
      // Draw circles with interaction
      for (let i = 0; i < 10; i++) {
        let circleColor;
        let xOffset = i * (this.circleSize / 3);
        let d = dist(mouseX, mouseY, this.PosX + xOffset, this.PosY);
  
        if (d < this.circleSize / 2) {
          let randomIndex = floor(random(this.colors.length));
          circleColor = this.colors[randomIndex];
        } else {
          circleColor = color('white');
        }
  
        fill(circleColor);
        noStroke();
        circle(this.PosX + xOffset, this.PosY, this.circleSize);
      }
  
      // Text interaction
      let textColor;
      if (
        mouseX > this.textX - this.textWidthValue &&
        mouseX < this.textX &&
        mouseY > this.textY &&
        mouseY < this.textY + this.textHeight
      ) {
        let randomIndex = floor(random(this.colors.length));
        textColor = this.colors[randomIndex];
      } else {
        textColor = color('white');
      }
  
      fill(textColor);
      textSize(this.textHeight);
      textAlign(RIGHT, TOP);
      text(this.text, this.textX, this.textY);
    }
  }
  
  // Main Script
  let interactiveCanvas;
  
  function setup() {
    interactiveCanvas = new InteractiveCanvas();
    interactiveCanvas.setup();
  }
  
  function draw() {
    interactiveCanvas.draw();
  }

  


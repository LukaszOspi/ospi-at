import React from "react";
import Sketch from "react-p5";

function InteractiveBackground() {
  const radius = 100;
  const points = 300;
  const noiseScale = 0.02;
  let noiseStrength = 20;
  let t = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth * 0.6, p5.windowHeight * 0.6).parent(
      canvasParentRef
    );
  };

  const draw = (p5) => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height / 2);

    // Calculate distance between mouse and center
    const distance = p5.dist(p5.mouseX, p5.mouseY, p5.width / 2, p5.height / 2);
    const maxDistance = p5.dist(0, 0, p5.width / 2, p5.height / 2);

    // Adjust noise strength based on the distance
    noiseStrength = p5.map(distance, 0, maxDistance, 40, 0);

    p5.fill(200, 200, 255, 150);
    p5.noStroke();

    p5.beginShape();
    for (let i = 0; i < points; i++) {
      const angle = p5.map(i, 0, points, 0, p5.TWO_PI);
      const r =
        radius +
        p5.map(
          p5.noise(i * noiseScale, t),
          0,
          1,
          -noiseStrength,
          noiseStrength
        );
      const x = r * p5.cos(angle);
      const y = r * p5.sin(angle);
      p5.vertex(x, y);
    }
    p5.endShape(p5.CLOSE);

    t += 0.01;
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default InteractiveBackground;

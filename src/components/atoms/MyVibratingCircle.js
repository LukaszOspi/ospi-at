import React from "react";
import Sketch from "react-p5";

function MyVibratingCircle() {
  let radius = 100;
  const numShapes = 8;
  const shapeResolution = 100;
  let t = 0;
  let rotationAngles = Array.from(
    { length: numShapes },
    () => Math.random() * Math.PI * 2
  );

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth * 0.6, p5.windowHeight * 0.6).parent(
      canvasParentRef
    );
    radius = Math.min(p5.width, p5.height) * 0.3;
  };

  const draw = (p5) => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.strokeWeight(1);
    p5.noFill();

    const angleStep = p5.TWO_PI / numShapes;
    const maxDistance = p5.dist(0, 0, p5.width / 2, p5.height / 2);
    const distance = p5.dist(p5.mouseX, p5.mouseY, p5.width / 2, p5.height / 2);
    const waveAmplitude = p5.map(distance, 0, maxDistance, radius * 0.05, 0);

    for (let i = 0; i < numShapes; i++) {
      const angleOffset = i * angleStep;
      const blueShades = [
        p5.color(50, 100, 200, 100),
        p5.color(60, 120, 220, 100),
        p5.color(70, 140, 240, 100),
        p5.color(80, 160, 255, 100),
        p5.color(90, 180, 255, 100),
        p5.color(100, 200, 255, 100),
        p5.color(110, 220, 255, 100),
        p5.color(120, 240, 255, 100),
      ];

      p5.stroke(blueShades[i % blueShades.length]);

      p5.push();
      p5.rotate(rotationAngles[i]);

      p5.beginShape();
      for (let j = 0; j <= shapeResolution; j++) {
        const shapeAngle = p5.map(j, 0, shapeResolution, 0, p5.TWO_PI);
        const noiseFactor = p5.noise(j * 0.1, i * 0.1, t * 0.5) * 2 - 1;
        const wave = p5.constrain(
          p5.sin(shapeAngle * 16 + angleOffset + t) * waveAmplitude +
            noiseFactor * 10,
          -radius * 0.1,
          radius * 0.1
        );

        const r = radius + wave;
        const x = r * p5.cos(shapeAngle + angleOffset);
        const y = r * p5.sin(shapeAngle + angleOffset);

        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
      p5.pop();
    }

    t += 0.02;
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default MyVibratingCircle;

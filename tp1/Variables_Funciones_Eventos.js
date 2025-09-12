// VARIABLES 

let desplazamientoPrincipal = 0;
let desplazamientoFondo = 0;

let fillR = 255, fillG = 255, fillB = 255;
let fillR1 = 255, fillG1 = 255, fillB1 = 255;

let refe; // Imagen de referencia
 
// FUNCIONES

function circuloFondo(x, y) {
  fill(fillR1, fillG1, fillB1);
  strokeWeight(3);
  rect(x, y, 105, 105);
  rect(x + 13, y + 13, 75, 75);
  rect(x + 6, y + 5, 90, 90);
  rect(x + 21, y + 21, 60, 60);

  fill(255);
  strokeWeight(2);
  fill(fillR1, fillG1, fillB1);
  circle(x + 53, y + 53, 10);

  strokeWeight(3);
  noFill();
  circle(x + 53, y + 53, 30);
  circle(x + 53, y + 53, 45);
}

function circuloPrincipal(x, y) {
  strokeWeight(3);
  fill(fillR, fillG, fillB);
  circle(x, y, 100);
  circle(x, y, 80);
  circle(x, y, 60);

  strokeWeight(2);
  circle(x, y, 40);
  circle(x, y, 20);

  strokeWeight(1);
  circle(x, y, 5);
}

// INTERACCIÓNES
function mouseMoved() {
  desplazamientoPrincipal += 2;
  desplazamientoFondo += 2;
}

function keyReleased() {
  if (key === 'r' || key === 'R') { //cambio
    desplazamientoPrincipal = 0;
    desplazamientoFondo = 0;
    fillR = fillG = fillB = 255;
    fillR1 = fillG1 = fillB1 = 255;
  }
}

function mousePressed() {
  fillR1 = random(0, 256);
  fillG1 = random(0, 256);
  fillB1 = random(0, 256);

  fillR = random(0, 256);
  fillG = random(0, 256);
  fillB = random(0, 256);
}

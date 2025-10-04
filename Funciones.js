function dibujarBoton(x, y, an, al, txt) {
  if (detectarBoton(x, y, an, al)) {
    // cuando el mouse está arriba -> botón más oscuro
    fill(33,19,116);
  } else {
    // color normal del botón
    fill(30,64,196);
  }
  
  rect(x, y, an, al, 120);
  fill(255);
  textAlign(CENTER, CENTER);
  text(txt, x + an / 2, y + al / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function mouseClicked() {
  // Botón "Siguiente"
  if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
    indiceTextoP++;
    if (indiceTextoP >= textosP.length) {
      indiceTextoP = textosP.length - 1; // no pasar del final
    }
  }

  // Botón "Anterior"
  if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
    fill(255);
    indiceTextoP++;
    if (indiceTextoP < 0) {
      indiceTextoP = 0; // no pasar antes del inicio
    }
  }
}

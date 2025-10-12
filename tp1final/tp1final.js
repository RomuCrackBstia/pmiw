///////// Integrantes: Francisco Maqueda, Romulo Lucesole
///////// Link al user flow: https://www.figma.com/design/fq0MEOoZ2hxozQjcOgsOe5/Sin-t%C3%ADtulo?node-id=0-1&p=f&t=dhLkBuoKovsGcLs4-0
///////// Link al video: ...

let textos = [];
let imagenes = [];
let pantalla = 0;
let historial = [];
let intro;
let musculoso;


function preload() {
  textos = loadStrings('data/textos.txt');
  intro = loadSound('data/intro.mp3');
  musculoso = loadSound('data/musculoso.mp3');

  for (let i = 0; i <= 40; i++) {
    imagenes[i] = loadImage("data/imagen"+i+".JFIF");
  }
}


function setup() {
  createCanvas(640, 480);
  intro.setVolume(1.0);
  intro.setLoop(false);
  userStartAudio(); // habilita AudioContext al iniciar
}


function draw() {
  background(255);

  // Mostrar imagen de pantalla
  if (imagenes[pantalla]) {
    image(imagenes[pantalla], 0, 0, width, height);
  }

  // Mostrar fondo de texto si no es pantalla 0
  if (pantalla !== 0) {
    fondoDeTexto(textos[pantalla]);
  }

 if (pantalla === 1) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Le dicen que si y van a jugar a la play");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Le dicen que si y van hacerlo");
  } else if (pantalla === 3) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Se quedan jugando una mas");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Van a hacer el trabajo");
  } else if (pantalla === 5) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Se quedan jugando una mas");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Van a hacer el trabajo");
  } else if (pantalla === 16) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Rigby");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Mordecai");
  } else if (pantalla === 18) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Pedir ayuda a Papaleta");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Pelear contra la IA");
  } else if (pantalla === 20) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Ir a una batalla musical");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Seguir programando...");
  } else if (pantalla === 26) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Musculoso");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "Skipps");
  } else if (pantalla === 32) {
    dibujarBoton(width/2 - 200, height - 60, 200, 40, "Aceptan");
    dibujarBoton(width/2 + 20, height - 60, 200, 40, "No aceptan");
  }
}



function keyPressed() {
  if (pantalla < imagenes.length - 1) {
    historial.push(pantalla);
    pantalla++;
  } else {
    pantalla = 0;
    historial = [];
  }

  if ([13,14,25,31,36,41].includes(pantalla)) {
    reiniciarTodo();
  }

  reproducirSonidoSegunPantalla();
}


function mousePressed() {
  userStartAudio(); 

  let yBoton = height - 60;
  let altoBoton = 40;

  // Pantalla 1
  if (pantalla === 1) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(2);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(15);
    }
    return;
  }

  // Pantalla 3
  if (pantalla === 3) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(4);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(15);
    }
    return;
  }

  // Pantalla 5
  if (pantalla === 5) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(6);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(13);
    }
    return;
  }

  // Pantalla 16
  if (pantalla === 16) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(17);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(25);
    }
    return;
  }

  // Pantalla 18
  if (pantalla === 18) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(19);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(31);
    }
    return;
  }

  // Pantalla 20
  if (pantalla === 20) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(21);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(37);
    }
    return;
  }

  // Pantalla 26
  if (pantalla === 26) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(27);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(29);
    }
    return;
  }

  // Pantalla 32
  if (pantalla === 32) {
    if (detectarBoton(width/2 - 200, yBoton, 200, altoBoton)) {
      SiguientePantalla(33);
    } else if (detectarBoton(width/2 + 20, yBoton, 200, altoBoton)) {
      SiguientePantalla(36);
    }
    return;
  }
}

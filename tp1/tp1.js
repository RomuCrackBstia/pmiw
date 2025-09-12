///https://youtu.be/uy3baiCE4YU Link al video

//IMAGEN
function preload() {
  refe = loadImage("refe.jpg"); //cambio
}


function setup() {
  createCanvas(800, 400); // cambio
}


//(LOOP PRINCIPAL)

function draw() {
  background(fillR1, fillG1, fillB1);

  
  // circuloFondo 
  fill(fillR, fillG, fillB);
  let tam = 105;  //cambio
  let separacion = 5;
  let paso = tam + separacion;
  let origenX = 450;
  let origenY = 180;

  for (let j = -5; j <= 10; j++) {
    for (let i = -1; i <= 10; i++) {
      let x = origenX + i * paso;
      let y = origenY + j * paso;

      // operador ternario 
      let dy = (i % 2 === 0) ? desplazamientoFondo % paso : -desplazamientoFondo % paso;
      circuloFondo(x, y + dy);
    }
  }

  
  // circuloPrincipal 

  let diametro = 100;
  let margenX = 5;
  let margenY = 5;
  let inicioX = 400 + diametro / 2;
  let inicioY = 75;

  fill(fillR1, fillG1, fillB1);

  for (let j = -20; j < 10; j++) {
    let y = inicioY + j * (diametro + margenY);
    let dx = (j % 2 === 0) ? desplazamientoPrincipal % (diametro + margenX) : -desplazamientoPrincipal % (diametro + margenX);

    for (let i = -1; i < 4; i++) {
      let x = inicioX + i * (diametro + margenX) + dx;
      circuloPrincipal(x, y);
    }
  }

  // Imagen de referencia 
  image(refe, -267, 0);
}

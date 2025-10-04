let textosD = [];
let textosP = [];
let textosF = [];
let indiceTextoP = 0;
let indiceTextoD = 0;
let indiceTextoF = 0;


function preload(){
 textosP.push("Benson les da a Mordecai y Rigby la tarea de programar el sistema de riego del parque");
 textosP.push("Mordecai y Rigby se van a jugar a la play diciendo que solo una partida y van a trabajar, al terminar la partida");
 textosP.push("Mordecai y Rigby dudan en jugar una partida mas");
 textosP.push("Mordecai quiere hacer bien el trabajo pero Rigby insiste con usar la IA para ayudarlos");
 textosP.push("Como son tan tontos que no saben ni usar la IA, esta se rebela y trata de tomar el control del parque:");
 textosP.push("Mordecai y rigby no saben como destronar a la IA");
 textosP.push("Al querer hacerlo manual, descubren que es muy complicado por lo que le piden ayuda a");
 textosP.push("Como le piden ayuda a Papaleta, este les dice que lo va a hacer pero con la condición de que le hagan un favor a cambio, pero no les dice que");
///
 textosD.push("A: Le dicen que si y van a hacerlo");
 textosD.push("B: Le dicen que si y van a jugar a la play");
 textosD.push("A: Van hacer el trabajo");
 textosD.push("B:Se quedan jugando una más");
 textosD.push("Deciden ir hacer el trabajo pero se cruzan a benson al salir de la casa");
 textosD.push("B:Se quedan jugando una más");
 textosD.push("Al querer ganar, rigby aprieta todos los botones invocando a Martillo");
 textosD.push("Martillo golpea a rigby en el abdomen");
 textosD.push("Ambos luchan contra Martillo");
 textosD.push("Martillo vuelve a golpear a rigby");
 textosD.push("Martillo se queda sin energia y logran derrotarlo");
 textosD.push("Pero rigby queda mal herido debido a la batalla");
 textosD.push("A: Hacerle caso a Mordecai");
 textosD.push("Musculoso");
 textosD.push("Pantalla 4 A: Al pedirle ayuda a musculoso, el dice ¿sabes quien te va a ayudar? mi mami!");
 textosD.push("B:Skipps");
 textosD.push("B: Hacerle caso a Rigby");
 textosD.push("A: Pelean contra la IA en una batalla de códigos");
 textosD.push("B: Le piden ayuda a Papaleta, para pelear moderno con clasico.");
 textosD.push("Pantalla 4 A: Al pelear contra la IA en una batalla de códigos sin tener ni idea de programar, Mordecai y Rigby caen ante la IA.  ");
 textosD.push("No aceptan");
 textosD.push("Aceptan");
 textosD.push("Pantalla 5 A: Al aceptar, Papaleta saca un Instrumento, y lo toca hasta hacer sentir a la IA pena, cosa para la que no estaba programada, y por no entender lo que le pasaba, explota.");
 textosD.push("La IA los supera por mucho");
 textosD.push("Skipps, al enterarse, invoca a un aliado para poder luchar");
 textosD.push("Juntos empiezan a combatir contra la IA");
 textosD.push("Mordecai y Rigby intentan ganarle en una batalla musical pero la IA los supera por mucho");
 textosD.push("A Rigby se le ocurre una gran idea ");
 textosD.push("Y juntos");
///
 textosF.push("Como Benson ve que todavia no empezaron el trabajo los descubre y los despide. 1er final.");
 textosF.push("Rigby no logra recuperarse y muere dias despues...");
 textosF.push("Le piden ayuda a Skipps, y como es un hombre que resuelve un montón, les hace unos arreglos por aca y por allá y les resuelve el trabajo. Final 2");
 textosF.push("La aventura termina con Mordecai y Rigby lavandole la ropa interior a mano a papaleta. Final 4");
 textosF.push("Y luego de una intensa batalla, logran derrotarla recuperando asi el parque.");
 textosF.push("Desconectan a la IA, recuperando el parque.");
 ///
}


function setup() {
  createCanvas(640, 480);
  textSize(16);
}

function draw() {
  background(0);
  // Mostrar texto actual de textosP
  textAlign(320, 240);
  fill(255);
  text(textosP[indiceTextoP], width / 2, height / 2, 400, 200);

  // Dibujar botones
  
  dibujarBoton(width / 2 - 160, height - 60, 140, 40, "Anterior");
  dibujarBoton(width / 2 + 20, height - 60, 140, 40, "Siguiente");
}

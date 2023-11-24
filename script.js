// let puntajeJugador = 0;
// let puntajeComputadora = 0;
// let ganadorRonda = '';

// function rondaJuego(seleccionJugador, seleccionComputadora){
//     if(seleccionJugador === seleccionComputadora){
//         ganadorRonda = 'tie'
//     }
//     if(
//         (seleccionJugador === 'piedra' && seleccionComputadora === 'tijeras') ||
//     (seleccionJugador === 'tijeras' && seleccionComputadora === 'papel') ||
//     (seleccionJugador === 'papel' && seleccionComputadora ==='piedra')
//     )
//     {
//         puntajeJugador++
//         ganadorRonda ='Jugador'
//     }
//         if(
//          (seleccionComputadora === 'piedra' && seleccionJugador === 'tijeras') ||
//          (seleccionComputadora === 'tijeras' && seleccionJugador === 'papel') ||
//          (seleccionComputadora === 'papel' && seleccionJugador ==='piedra')
//         )
//         {
//             puntajeComputadora++;
//             ganadorRonda='Computadora';
//         }
       
// }


//     function numeroAleatoria() {
//         numeroAzar= Math.floor(Math.random()*3);

//        if (numeroAzar===0) {
//             console.log('piedra');  

//        } else if (numeroAzar==1) {
//             console.log('papel');

//        }else (numeroAzar==2)
//             console.log('tijeras');
       
//         }

       
       
     
       
        
        
//         function gameOver() {
//             return puntajeJugador === 5 || puntajeComputadora === 5
//             console.log('fin del juego');
//           }

    function jugar(opcionUsuario) {
  const opciones = ['piedra', 'papel', 'tijera'];
  const opcionComputadora = opciones[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (opcionUsuario === opcionComputadora) {
    resultado = '¡Es un empate!';
  } else if (
    (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') ||
    (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
    (opcionUsuario === 'tijera' && opcionComputadora === 'papel')
  ) {
    resultado = '¡Ganaste!';
  } else {
    resultado = '¡Perdiste!';
  }

  document.getElementById('resultado').innerText = `Usuario eligió ${opcionUsuario}. Computadora eligió ${opcionComputadora}. ${resultado}`;
}



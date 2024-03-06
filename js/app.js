// window.alert("un mensaje nuevo")

//setTimeout

function comenzarJuego() {
    document.write(`<p>Comenzando la partida de LOL... </p>`);
  }
  
  window.setTimeout(comenzarJuego, 5000); //Forma completa con el window, es lo mismo..
  
  setTimeout(() => {
    document.write(`<p>Finalizó la partida</p>`);
  }, 3000); //Puedo omitir el window
  
  //setInterval
  setInterval(() => {
      document.write(`<p>Finalizó la partida</p>`);
    }, 3000);
  
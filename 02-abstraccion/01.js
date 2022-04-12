//* llamo las cosas, sin saber realmente qué pasa adentro. Nos simplifica la interfaz

function Radio (genre) {
  this.genre = genre;

  this.play = function() {
    console.log(`Está sonando ${genre}`)
  }

  this.stop = function() {
    console.log(`Dejó de sonar ${genre}`)
  }
}

let nuevaRadio = new Radio("reggaeton")

//no sé cómo hizo para que suene, nomás sé que hay que llamar esos métodos
nuevaRadio.play()
nuevaRadio.stop()

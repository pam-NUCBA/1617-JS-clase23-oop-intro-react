//* con class

class Alumno {
  constructor() {
    let nombre;
    let notas;
  }

  getNombre() {
    return this.nombre;
  }
  Nombre(nombre) {
    this.nombre = nombre;
  }

  getNotas() {
    return this.notas;
  }
  setNotas(notas) {
    this.notas = notas;
  }
}

//primero lo creamos, después le seteamos los datos con sus propios métodos
let estudiante = new Alumno()

console.log(estudiante)
estudiante.setNombre('Gero')
estudiante.setNotas(10)
console.log(estudiante)

//puedo crear otro alumno:
let estudiante2 = new Alumno()

console.log(estudiante2)
estudiante2.setNombre('Matías')
estudiante2.setNotas(9.75)
console.log(estudiante2)

console.log(estudiante.getNombre() + ' tiene una nota de ' + estudiante.getNotas())
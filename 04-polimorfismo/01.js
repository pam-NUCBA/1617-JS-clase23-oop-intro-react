//*polimorfismo dinamico

class Shape {
  //puedo modificar esta funcion a medida que la extiendo!
  calcularArea() {
    console.log("calculando área...");
    return 0;
  }

  loguear() {
    console.log(' esta es una figura')
  }
}

//rectangulo necesita alto y ancho, pero un circulo, necesita radio
class Rectangulo extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  //le paso por encima con los valores que necesito
  calcularArea() {
    console.log(`area calculada: ${this.length * this.width}`);
  }
}

//circulo:
class Circulo extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calcularArea() {
    console.log(`área calculada: ${Math.PI * this.radius ** 2}`)
  }
}

const rec = new Rectangulo(3, 4)
console.log(rec.calcularArea(), rec.loguear())

const cir = new Circulo(5)
console.log(cir.calcularArea(), cir.loguear())
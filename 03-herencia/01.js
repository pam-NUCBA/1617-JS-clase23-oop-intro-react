//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super
//* https://www.w3schools.com/jsref/jsref_class_super.asp
//hereda del padre, y le agrega cosas

class Animal {
  constructor(patas, claseAnimal) {
    this.patas = patas;
    this.claseAnimal = claseAnimal;
  }

  movimiento() {
    console.log(
      "este animal se mueve en " +
        this.patas +
        "patas, y pertenece al grupo de los " +
        this.claseAnimal
    );
  }
}

//con extends va a heredar lo que tiene animal
class Pajaro extends Animal {
  constructor(patas, claseAnimal) {
    super(patas, claseAnimal);
  }

  volar() {
    console.log("y además vuela");
  }
}

//podemos extender una clase que ya está extendida
class Hornero extends Pajaro {
  constructor(patas, claseAnimal, volar) {
    super(patas, claseAnimal, volar);
  }
  hacerNido() {
    console.log(" y hace nidito");
  }
}

class OsoHormiguero extends Animal {
  constructor(patas, claseAnimal) {
    super(patas, claseAnimal);
  }

  comerHormigas() {
    console.log("y come hormigas");
  }
}

let canario = new Pajaro(2, "ave");
console.log(canario.movimiento(), canario.volar());

let juancito = new OsoHormiguero(4, "mamifero");
console.log(juancito.movimiento(), juancito.comerHormigas());

let hornerin = new Hornero(2, "ave");
console.log(hornerin.movimiento(), hornerin.volar(), hornerin.hacerNido());

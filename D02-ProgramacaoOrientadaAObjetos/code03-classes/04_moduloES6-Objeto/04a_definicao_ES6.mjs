//04a_definicao_ES6.mjs
export class Circulo {
    constructor(r) {
      this.raio = r;
    }
    area() {
      return Math.PI * this.raio ** 2;
    }
    circunferencia() {
      return 2 * Math.PI * this.raio;
    }
  }
  
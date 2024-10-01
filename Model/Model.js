import Jatekter from "../View/Jatekter.js";

export default class Model {
  #lista= [];

  constructor() {
    this.megjelenit()
  }
  megjelenit(){
    for (let i = 0; i < 20; i++) {
      if (Math.random() < 0.3) {
        this.#lista.push("😈");
      } else {
        this.#lista.push("👻");
      }
    }
  }

  getLista() {
    return this.#lista;
  }

  ell(index) {
    return this.#lista[index] === "😈" ? "Elvitt az ördög!" : "Megmentettek a jó lelkek!";
  }
}

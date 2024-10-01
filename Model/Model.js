import Jatekter from "../View/Jatekter.js";

export default class Model {
  #lista;
  #index;
  constructor(lista, index) {
    this.#index = index;
    this.#lista = lista;
    console.log(this.#lista)
    this.ell();
  }

  getLista() {
    return this.#lista;
    
  }

  katt() {
    $(window).on("kattintas", (event) => {
        
      let index = event.detail;
      esemeny(index);
      new Jatekter(this.#lista);
    });
  }

  esemeny(index) {}

  ell() {}
}

import Jatekter from "../View/Jatekter.js";

export default class Model {
  #lista= ["sz", "ö","ö","ö","ö","ö","ö","ö","ö","ö","sz", "sz","sz", "sz","sz", "sz", "sz","sz", "sz","sz" ];
  #index= 0;
  constructor(index) {
    this.#index = index;
    this.ell();
  }

  getLista() {
    return this.#lista;
    
  }

  katt() {
    $(window).on("kattintas", (event) => {
      let index = event.detail;
      this.esemeny(index);
      new Jatekter(this.#lista);
    });
  }

  esemeny(index) {
    this.#lista[index] = !this.#lista[index]     
  }

  ell() {}
}

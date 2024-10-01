export default class Kartya {
  #szuloelem;
  #index;
  #divElem;
  #elem
  constructor(elem, index, szuloelem) {
    this.#index = index;
    this.#szuloelem = szuloelem;
    this.#elem= elem
    this.megjelenit();
    this.#divElem = $(".kartya:last");
    this.esemenykezelo();
  }

  megjelenit() {
    $(this.#szuloelem).append(`<div class="kartya"> ? </div>`);
  }

  esemenykezelo() {
    this.#divElem.on("click", () => {
      this.#divElem.text(this.#elem); 
      this.trigger("kattintas");
    });
  }

  trigger(esemeny) {
    const e = new CustomEvent(esemeny, { detail: this.#index });
    window.dispatchEvent(e);
  }
}

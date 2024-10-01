export default class Kartya {
  #szuloelem;
  #index;
  #divElem;
  constructor(index, szuloelem) {
    this.#index = index;
    this.#szuloelem = szuloelem;
    this.megjelenit();
    this.#divElem = $("div:last");
    this.esemenykezelo();
  }

  megjelenit() {
    $(this.#szuloelem).append(`<div class="kartya"> p </div>`);
  }

  esemenykezelo() {
    this.#divElem.on("click", () => {
      this.trigger("kattintas");
    });
  }

  trigger(esemeny) {
    const e = new CustomEvent(esemeny, { detail: this.#index });
    window.dispatchEvent(e);
  }
}

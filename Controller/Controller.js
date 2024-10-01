import Model from "../Model/Model.js"
import Jatekter from "../View/Jatekter.js";

export default class Controller{
    constructor(){
        this.taroloElem= $(".jatekter")
        this.modell = new Model();
        this.lista = this.modell.getLista()
        console.log(this.lista)
        new Jatekter(this.lista,this.taroloElem)
        this.esemeny()
    }

    esemeny(){
        $(window).on("kapcsolas", (event) => {
            let emoji = this.Jatekter.setSzoveg();
            new Jatekter(this.lista, this.taroloElem);
          });
    }
}
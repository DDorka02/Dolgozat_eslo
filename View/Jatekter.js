import Kartya from "./Kartya.js";

export default class Jatekter{
    #szuloElem
    #lista
    constructor(lista,szuloElem){
        this.#szuloElem=szuloElem
        this.#lista=lista
        for (let index = 0; index < 20; index++) {
            new Kartya(index,szuloElem)
            
        }
        this.setSzoveg()
    }
    setSzoveg(){
        this.#lista
    }



}
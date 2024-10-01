import Kartya from "./Kartya.js";

export default class Jatekter{
    #szuloElem
    #lista=[]
    constructor(lista,szuloElem){
        this.#szuloElem=szuloElem
        this.#lista=lista
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, index,szuloElem)
        })
        this.setSzoveg()
        
    }
    setSzoveg(){
        
    }



}
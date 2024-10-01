import Kartya from "./Kartya.js";

export default class Jatekter{
    #szuloElem
    #lista=[]
    #eredmeny
    constructor(lista,szuloElem){
        this.#szuloElem=szuloElem
        this.#lista=lista
        this.#eredmeny = $(".eredmeny")
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, index,szuloElem)
        })
        this.katt()
    }

    katt(){
        $(window).on("kattintas", (event) => {
            const index = event.detail;
        this.setSzoveg(index)
        })
    }

    setSzoveg(index){
        const uzenet = this.#lista[index] === "😈" ? "Elvitt az ördög!" : "Megmentettek a jó lelkek!";
        this.#eredmeny.text(uzenet);
        
    }



}
export class UmaClasse{
    #_umAtributo
    outroAtributo = "atributo dois"

    constructor(n){
        this.#_umAtributo = n
    }

    capturaPrimeiroAtributo(){
        return this.#_umAtributo
    }
}
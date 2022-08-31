//06a_Senha.mjs
import {Carro} from "../05_ClasseSimples/05a_carro.mjs"

export class CarroComPlaca extends Carro{
    #_placa
    constructor(umaPlaca){
        super(55)
        this.#_placa=umaPlaca        
    }
    
    get placa(){
        return this.#_placa
    }
}


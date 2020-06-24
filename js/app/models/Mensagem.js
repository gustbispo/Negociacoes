class Mensagem {
    constructor(texto=''){
        this._texto = texto;
    }

    //método que retorna texto
    get texto(){
        return this._texto;
    }

    //método que altera texto
    set texto(texto){
        this._texto = texto;
    }
}

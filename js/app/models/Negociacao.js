class Negociacao {

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
    //método que devolve a data
    get data(){
        return new Date(this._data.getTime());
    }

    //método que devolve a quantidade
    get quantidade(){
        return this._quantidade;
    }

    //método que devolve o valor
    get valor(){
        return this._valor;
    }

    //método que devolve o volume
    get volume(){
        return this._quantidade * this._valor;
    }
}
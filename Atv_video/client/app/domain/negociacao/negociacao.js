class Negociacao {

    contructor(data, quantidade, valor) {
        this.data = new Date(data.getTime());
        this.quantidade = quantidade;
        this.valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this.valor;
    }

    get data() {
        // return this._data;
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
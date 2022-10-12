class NegociacaoConttroller {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        let converter = new DateConverter();

        const data = DateConverter.paraData(this_._inputData.value);
        console.log(data);

        let data = new Date(...this._inputData.value.split('-').map((item, indice) => item - (indice % 2)));

        this._negociacoes.adiciona(negociacao);

        console.log(this._negociacoes.paraArray());

        this._limparFormulario();
    }

    _limparFormulario() {
        this._inputData.val = '2022-01-03';
        this._inputQuantidade.val = 1;
        this._inputValor.val = 2.0
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(data,
            this._inputQuantidade.value,
            this._inputValor.value);
    }

}
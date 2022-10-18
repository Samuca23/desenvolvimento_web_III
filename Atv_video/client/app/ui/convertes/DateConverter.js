class DateConverter {

    constructor() {
        throw new Error("Esta classe não pode instanciada");
    }

    static paraTexto(data) {
        // return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(texto)) throw new DataInvalidaExcpetion();
        return new Date(...texto.split('/')
        .reverse()
        .map((item, indice) => item - (indice % 2)));

    }
}
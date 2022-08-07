class Calculadora {

    constructor() {
        this.montaLayotCalculadora();
    }

    /**
     * Monta o Layout da Calculadora
     */
    montaLayotCalculadora = function () {
        var iPulaLinha = 0;
        var oElementContainer = document.getElementsByClassName('container');

        var oElementoCalculadora = document.createElement('div');
        oElementoCalculadora.setAttribute('class', 'calculadora');
        oElementoCalculadora.style.width = '241px';
        oElementoCalculadora.style.height = '240px';
        oElementoCalculadora.style.backgroundColor = 'black';

        var oElementoDivInput = document.createElement('div');
        oElementoDivInput.setAttribute('class', 'visor');

        var oElementoDivNumber = document.createElement('div', 'number');
        oElementoDivNumber.setAttribute('class', 'number');
        oElementoDivNumber.style.padding = '5px';

        oElementContainer[0].appendChild(oElementoCalculadora);
        oElementoCalculadora.appendChild(oElementoDivInput);
        oElementoDivInput.appendChild(this.montaInputCalc());
        oElementoCalculadora.appendChild(oElementoDivNumber);

        var aButtonNumber = this.montaButtonNumberCalc();
        aButtonNumber.forEach(function (oButtonNumber) {

            if (iPulaLinha == 3) {
                oElementoDivNumber.appendChild(document.createElement('br'));
                oElementoDivNumber.appendChild(oButtonNumber);
                iPulaLinha = 1;

                return;
            }
            iPulaLinha = iPulaLinha + 1;
            oElementoDivNumber.appendChild(oButtonNumber);
        });

        /* Adicionar os botoes de operaçao */
        var aButtonOperator = this.montaButtonOperatorCalc();
        aButtonOperator.forEach(function (oButtonOperator) {
            oElementoDivNumber.appendChild(oButtonOperator);
        });

        oElementoDivNumber.appendChild(this.montaButtonIgual());
        oElementoDivNumber.appendChild(this.montaButtonLimpa());

    }

    /**
     * Monta o Input que será a Tela da Calculadora.
     * 
     * @returns 
     */
    montaInputCalc = function () {
        var oElementInput = document.createElement("input");
        oElementInput.setAttribute("type", "text");
        oElementInput.setAttribute("class", "input-visor");

        /* Estilo do Input */
        oElementInput.style.width = '100%';

        return oElementInput;
    }

    getInputCalc = function () {
        return document.querySelector('.input-visor');
    }


    /**
     * Monta os botões numéricos.
     * 
     * @returns Array
     */
    montaButtonNumberCalc = function () {
        var aRetorno = [];

        for (var i = 9; i >= 0; i--) {
            var oElementButton = document.createElement("button");
            var iConteudoButton = document.createTextNode(i);

            oElementButton.appendChild(iConteudoButton);
            oElementButton.setAttribute('class', 'btn btn-success');
            oElementButton.addEventListener('click', function () {
                var oInputCalc = document.querySelector('.input-visor');
                oInputCalc.value += this.innerText;
            });

            /* Estilo dos botões */
            oElementButton.style.width = '75px';
            oElementButton.style.margin = '1px';

            aRetorno.push(oElementButton);
        }

        return aRetorno;
    }

    /**
     * Monta os operadores passados por parâmetro.
     * 
     * @param {Array} aOperador 
     * @returns Array
     */
    montaButtonOperatorCalc = function (aOperador = ['+', '-', '*', '/']) {

        var aButtonOperator = [];

        aOperador.forEach(function (oOperador) {
            var oButtonOperator = document.createElement('button');
            oButtonOperator.setAttribute('class', 'btn btn-danger');
            oButtonOperator.appendChild(document.createTextNode(oOperador));

            oButtonOperator.addEventListener('click', function () {
                var oInputCalc = document.querySelector('.input-visor');
                oInputCalc.value += this.innerText;
            });

            aButtonOperator.push(oButtonOperator);
        });

        return aButtonOperator;
    }

    montaButtonIgual = function () {
        var oElementButtonIgual = document.createElement("button");
        oElementButtonIgual.appendChild(document.createTextNode('='));
        oElementButtonIgual.setAttribute('class', 'btn btn-warning');

        oElementButtonIgual.addEventListener('click', function () {
            var oInputCalc = document.querySelector('.input-visor');
            var sConta = oInputCalc.value;
            if (sConta) {
                var iResultado = eval(sConta);
                oInputCalc.value = iResultado;
            }

        });

        return oElementButtonIgual;
    }

    montaButtonLimpa = function () {
        var oElementButtonLimpar = document.createElement("button");
        oElementButtonLimpar.appendChild(document.createTextNode("C"));
        oElementButtonLimpar.setAttribute('class', 'btn btn-primary');
        oElementButtonLimpar.addEventListener('click', function () {
            var oInputCalc = document.querySelector('.input-visor');
            oInputCalc.value = "";
        });

        return oElementButtonLimpar;
    }

}

let calculadora = new Calculadora();
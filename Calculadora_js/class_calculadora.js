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
        var oElementoCalculadora = this.montaDivCalculadora();
        var oElementoDivInput = this.montaDivVisor();
        var oElementoDivNumber = this.montaDivNumber();

        /* Adiciona os Elementos para a Tela */
        oElementContainer[0].appendChild(oElementoCalculadora);
        oElementoCalculadora.appendChild(oElementoDivInput);
        oElementoDivInput.appendChild(this.montaVisorCalc());
        oElementoCalculadora.appendChild(oElementoDivNumber);

        /* Adicionando os botões para a Tela */
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

        /* Adicionar os botões de operação */
        var aButtonOperator = this.montaButtonOperatorCalc();
        aButtonOperator.forEach(function (oButtonOperator) {
            oElementoDivNumber.appendChild(oButtonOperator);
        });

        oElementoDivNumber.appendChild(this.montaButtonIgual());
        oElementoDivNumber.appendChild(this.montaButtonLimpa());
    }

    /**
     * Cria a Div da Calculadora.
     * 
     * @returns Element HTML
     */
    montaDivCalculadora = function () {
        var oElementoCalculadora = document.createElement('div');
        oElementoCalculadora.setAttribute('class', 'calculadora');
        this.styleCalculadora(oElementoCalculadora);

        return oElementoCalculadora;
    }

    /**
     * Cria a Div do visor.
     * 
     * @returns Element HTML
     */
    montaDivVisor = function () {
        var oElementoDivInput = document.createElement('div');
        oElementoDivInput.setAttribute('class', 'visor');

        return oElementoDivInput;
    }

    /**
     * Cria a Div dos Números.
     * 
     * @returns Element HTML
     */
    montaDivNumber = function () {
        var oElementoDivNumber = document.createElement('div', 'number');
        oElementoDivNumber.setAttribute('class', 'number');
        oElementoDivNumber.style.padding = '5px';

        return oElementoDivNumber;
    }

    /**
     * Cria o Input que será a Tela da Calculadora.
     * 
     * @returns Element HTML
     */
    montaVisorCalc = function () {
        var oElementInput = document.createElement("input");
        oElementInput.setAttribute("type", "text");
        oElementInput.setAttribute("class", "input-visor");

        /* Estilo do Input */
        oElementInput.style.width = '100%';

        return oElementInput;
    }

    /**
     * Retorna o Visor.
     * 
     * @returns Element HTML
     */
    getInputCalc = function () {
        return document.querySelector('.input-visor');
    }


    /**
     * Cria os botões numéricos.
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

            this.stylePadraoButtonNumber(oElementButton);
            aRetorno.push(oElementButton);
        }

        return aRetorno;
    }

    /**
     * Cria os operadores passados por parâmetro.
     * 
     * @param {Array} aOperador 
     * @returns Array
     */
    montaButtonOperatorCalc = function (aOperador = ['+', '-', '*', '/']) {

        var aButtonOperator = [];

        aOperador.forEach(function (oOperador) {
            var oButtonOperator = document.createElement('button');
            oButtonOperator.setAttribute('class', 'btn btn-danger');
            oButtonOperator.style.width = '36px';
            oButtonOperator.style.margin = '1px';

            oButtonOperator.appendChild(document.createTextNode(oOperador));

            oButtonOperator.addEventListener('click', function () {
                var oInputCalc = document.querySelector('.input-visor');
                oInputCalc.value += this.innerText;
            });
            aButtonOperator.push(oButtonOperator);
        });

        return aButtonOperator;
    }

    /**
     * Cria o botão de Igual.
     * 
     * @returns Element HMTL
     */
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

        this.styleButtonIgualAndLimpar(oElementButtonIgual);

        return oElementButtonIgual;
    }

    /**
     * Cria o Botão de Limpar o Visor.
     * 
     * @returns Element HTML
     */
    montaButtonLimpa = function () {
        var oElementButtonLimpar = document.createElement("button");
        oElementButtonLimpar.appendChild(document.createTextNode("C"));
        oElementButtonLimpar.setAttribute('class', 'btn btn-primary');

        oElementButtonLimpar.addEventListener('click', function () {
            var oInputCalc = document.querySelector('.input-visor');
            oInputCalc.value = "";
        });

        this.styleButtonIgualAndLimpar(oElementButtonLimpar);

        return oElementButtonLimpar;
    }

    /**
     * Estilo para a Calculadora
     * 
     * @param {Elemnt} oCalc 
     */
    styleCalculadora = function (oCalc) {
        oCalc.style.width = '241px';
        oCalc.style.height = '241px';
        oCalc.style.backgroundColor = 'black';
    }

    /**
     * Estilo padrão para os botões numéricos.
     * 
     * @param {Element} oButton 
     */
    stylePadraoButtonNumber = function (oButton) {
        oButton.style.width = '75px';
        oButton.style.margin = '1px';
    }

    styleButtonIgualAndLimpar = function (oButton) {
        oButton.style.width = '113px';
        oButton.style.margin = '1px';
    }

}

let calculadora = new Calculadora();
class Calculadora {

    constructor() {
        this.montaLayotCalculadora();
    }
    
    montaLayotCalculadora = function() {
        var oElementContainer = document.getElementsByClassName('container');
        if (oElementContainer) {
            oElementContainer.innerText();
            this.montaButtonCalc();
            this.montaInputCalc();
        }
    }

    montaButtonCalc = function() {
        for(var i = 0; i <= 9; i++) {
            var oElementButton = document.createElement("button");
            var iConteudoButton = document.createTextNode(i);

            oElementButton.appendChild(iConteudoButton);
        }
    }

    montaInputCalc = function() {
        var oElementInput = document.createElement("input");
        oElementInput.setAttribute("type", "number");
        console.log(oElementInput);
    }

}

let calculadora = new Calculadora();
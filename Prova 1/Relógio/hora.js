let getHora = () => {
    let oData = new Date();
    let iHora = oData.getHours();
    let iMinuto = oData.getMinutes();
    let iSegundo = oData.getSeconds();

    let sHora = iHora + ':' + iMinuto + ':' + iSegundo;
    /* console para fins de estudo, correto deve ser colocado na tela*/
    console.log(sHora);
}

setInterval(() => {
    getHora()
  }, 1000)


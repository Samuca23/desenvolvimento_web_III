/**
 * Transforma data normal para o tipo UTC.
 * 
 * @param {Date} oDate 
 * @returns 
 */
let convertUfcToGmt3 = (oDate = false) => {
    if (oDate) {
        var newDate = new Date(oDate);

        return newDate.toLocaleString();
    }
}

let convertGm3ToUfc = (sDate = false) => {
    if (sDate) {
        [Data, Hora] = sDate.split(' ');
        Data = Data.split('/').reverse().join();

        Data = Data + ' ' + Hora;

        var newDate = new Date(Data);

        return newDate.toISOString();
    }
}

console.log(convertGm3ToUfc('19/09/2022 16:55:00'));
console.log(convertUfcToGmt3(new Date().toISOString()));
/**
 * Transforma data normal para o tipo UTC.
 * 
 * @param {Date} oDate 
 * @returns 
 */
let convertGm3ToUfc = (oDate = false) => {
    if (oDate) {
        var newDate = oDate.toISOString();

        return newDate;
    }
}

let convertUfcToGmt3 = (sDate = false) => {
    if(sDate) {
        var newDate = new Date(Date.parse(sDate));

        return newDate.toLocaleString();
    }
}

console.log(convertGm3ToUfc(new Date()));
console.log(convertUfcToGmt3(new Date().toISOString()));
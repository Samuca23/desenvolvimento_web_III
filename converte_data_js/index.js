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
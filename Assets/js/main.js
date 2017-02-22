function convertToC() {
    "use strict";
    var fTempVal = parseFloat(document.getElementById('fTemp').value), cTempVal = ((fTempVal - 32) * (5 / 9)).toFixed(0);
    document.getElementById('cTemp').value = cTempVal;
    return false;
}

function convertToF() {
    "use strict";
    var cTempVal = parseFloat(document.getElementById('cTemp').value), fTempVal = ((cTempVal * (9 / 5)) + 32).toFixed(0);
    document.getElementById('fTemp').value = fTempVal;
    return false;
}
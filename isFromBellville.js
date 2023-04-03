
function isFromBellville(registration){
    return registration.startsWith('CY');
};
console.log(isFromBellville(["CY 123", "CJ 123"]))
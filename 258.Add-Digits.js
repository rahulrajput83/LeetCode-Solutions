/* Solution of Loot Code Problem : 258. Add Digits */

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    if(num < 10) {
        return num
    }
    const numStr = num.toString();
    const Array = numStr.split("")
    let sum = 0;
    for(let i = 0; i < Array.length; i++) {
        sum += parseInt(Array[i])
    }
    return addDigits(sum)
};
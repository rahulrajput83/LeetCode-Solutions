/* Solution of Loot Code Problem : 709. To Lower Case */

/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    let array = s.split("");
    let str = ""
    for(let i = 0; i < array.length; i++) {
        str += array[i].toLowerCase();
    }
    return str;
};
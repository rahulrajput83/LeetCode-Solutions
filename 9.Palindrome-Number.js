/* Solution of Loot Code Problem : 9. Palindrome Number */

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString().split("").reverse().join("");
    return str == x ? true : false;
};
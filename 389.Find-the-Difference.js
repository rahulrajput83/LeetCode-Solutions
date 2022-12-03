/* Solution of Loot Code Problem : 389. Find the Difference */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let arr1 = s.split("");
    let arr2 = t.split("")
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        arr2.splice(index, 1)
    }
    return arr2[0]
};

/* Solution of Loot Code Problem : 344. Reverse String */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    const arr = [];
    for(let i = s.length - 1; i >= 0; i--){
        arr.push(s[i])
    };
    s.forEach((e, i) => {
        s[i] = arr[i]
    });
};

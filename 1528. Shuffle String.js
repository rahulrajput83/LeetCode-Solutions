/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = [];
    s = s.split("")
    indices.forEach((e, index) => {
        arr[e] = s[index]
    })
    return arr.join("")
};

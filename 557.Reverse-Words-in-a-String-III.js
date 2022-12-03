/* Solution of Loot Code Problem : 557. Reverse Words in a String III */


/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const array = s.split(" ");
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        let str = ''
        let split = array[i].split("");
        for (let j = split.length - 1; j >= 0; j--) {
            str += split[j]
        }
        newArr.push(str);
    }
    return newArr.join(" ")
};


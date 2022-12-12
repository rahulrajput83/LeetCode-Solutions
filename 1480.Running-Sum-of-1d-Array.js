/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    let sum = 0;
    nums.forEach((e) => {
        sum += e;
        arr.push(sum)
    })
    return arr;
};
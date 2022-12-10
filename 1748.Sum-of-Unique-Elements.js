/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let unique = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            unique.push(nums[i]);
        }
    }
    let sum = 0;
    for(let i = 0; i < unique.length; i++) {
        sum += unique[i];
    }
    return sum
};
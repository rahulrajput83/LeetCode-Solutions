/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const map = {};
    let array = [];
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for(let i = 0; i < nums.length; i++) {
        if(map[i + 1] === undefined) {
            array.push(i + 1)
        }
    }
    return array;
};
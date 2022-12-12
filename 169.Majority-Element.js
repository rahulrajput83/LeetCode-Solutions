/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = [];
    nums.forEach((e) => {
        let find = obj.findIndex((ele) => ele.number === e)
        if(find !== -1) {
            obj[find].count++;
        }
        else {
            obj.push({number: e, count: 1})
        }
    })
    obj.sort((a, b) => b.count - a.count);
    return obj[0].number;

};
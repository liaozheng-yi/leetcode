console.time('global')
//删除排序数组中的重复项
// var removeDuplicates = function (nums) {
//     var acc;
//     for (var i = 0; i < nums.length;i++ ) {
//         if (acc != nums[i]) {
//             acc = nums[i]
//         } else {
//             nums.splice(i, 1)
//         }
//     }
//     return nums.length
// };
// let input = [1,1,2]
// let output = removeDuplicates(input);
// console.log(output,input);

//买卖股票的最佳时机2
// var maxProfit = function (prices) {
//     let profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i + 1] && prices[i + 1] - prices[i] > 0) {
//             profit += prices[i + 1] - prices[i]
//         }
//     }
//     return profit
// };
// let ins = [7,1,2,4,2,4];
// let out = maxProfit(ins);
// console.log(out);

//旋转数组
// var rotate = function (nums, k) {
//     let ks = nums.splice(-k);
//     for (let i = 0; i < ks.length; i++) {
//         nums.unshift(ks[ks.length - i - 1]);
//     }
// };
// let ins =[7,8,9,1,2,3,4,5,6];
// rotate(ins,5);
// console.log(ins);

//存在重复元素
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length <= 1) {
        return false;
    }
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]
        } else if (max == nums) {
            return true;
        } else {
            for (let j = 0; j < i; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
    }
};
let ins = [1,2,3,4,5,6,7,8,9,11,9];
let out = containsDuplicate(ins);
console.log(out);
console.timeEnd('global')

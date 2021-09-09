console.time("global");
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

//找出存在的重复元素
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   if (nums.length <= 1) {
//     return false;
//   }
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     } else if (max == nums) {
//       return true;
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (nums[i] == nums[j]) {
//           return true;
//         }
//       }
//     }
//   }
// };   //这个方法在执行[1,2,3,4]时会报错；
// let containsDuplicate = function (nums) {
//   nums.sort((a,b)=>{return b-a});
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return true;
//     }
//   }
// };
// let containsDuplicate = function (nums) {
//   let arySet = Array.from(new Set(nums));
//   console.log(arySet);
//   return arySet.length < nums.length;
// };
// let ins = [1, 2, 3, 2, 4, 5, 6, 7, 9, 11, 9];
// let ins =[1,2,3,4];
// let out = containsDuplicate(ins);
// console.log(out);

//只出现一次的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
//  var singleNumber = function(nums) {
//     return nums.reduce((pre,cur)=>{
//         return pre^cur
//     })
//  };
// let nums = [2,2,1,1,3,3,4,5,5,6,7,8,8,7,6]
// console.log(singleNumber(nums));
console.timeEnd("global");

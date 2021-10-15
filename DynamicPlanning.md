### 爬楼梯

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

````javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let [f1, f2, f3] = [0, 0, 1]
  for (let i = 0; i < n; ++i) {
    f1 = f2
    f2 = f3
    f3 = f1 + f2
  }
  return f3
};
````

### 买卖股票的最佳时机

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

````javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0, minPrice = Infinity
  prices.forEach(dayPrice => {
    if(dayPrice < minPrice) {
      minPrice = dayPrice
    } else if (dayPrice - minPrice > maxProfit) {
      maxProfit = dayPrice -minPrice
    }
  })
  return maxProfit
};
````

### 最大子序和

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

````javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0, maxSum = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxSum = Math.max(maxSum, pre);
    });
    return maxSum;
};
````


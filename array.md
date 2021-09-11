### 删除排序数组中的重复项

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    if(len<=1){
        return len;
    }
    let [fast,slow] = [1,1];
    while(fast<len){
        if(nums[fast]!=nums[fast-1]){
           nums[slow] = nums[fast];
           slow ++;
        }
        fast++
    }
    return slow
};
```

### 买卖股票的最佳时机 II

给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] && prices[i + 1] - prices[i] > 0) {
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit
};
```

### 旋转数组

给定一个数组，将数组中的元素向右移动 `k` 个位置，其中 `k` 是非负数。

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const gcd = (x, y) => y ? gcd(y, x % y) : x;
// var rotate = function(nums, k) {
//     const n = nums.length;
//     k = k % n;
//     let count = gcd(k, n);
//     for (let start = 0; start < count; ++start) {
//         let current = start;
//         let prev = nums[start];
//         do {
//             const next = (current + k) % n;
//             const temp = nums[next];
//             nums[next] = prev;
//             prev = temp;
//             current = next;
//         } while (start !== current);
//     }
// };
function reverse(nums, start, end) {
    let temp = nums[start];
    while (start < end) {
        nums[start] = nums[end];
        nums[end] = temp;
        temp = nums[start+1];
        start++;
        end--;
    }
}
var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1)
};
```

### 存在重复元素

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let arySet = Array.from(new Set(nums));
    return arySet.length < nums.length;
};
```

### 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((pre,cur)=>{
        return pre^cur
    })
};
```


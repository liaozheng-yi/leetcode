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

### 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。

说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let len1 = nums1.length;
    let len2 = nums2.length;
    let i = 0, j = 0;
    let ary = [];
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] == nums2[j]) {
            ary.push(nums1[i]);
            i++;
            j++;
        } else {
            j++;
        }
    };
    return ary;
}
```

### 加一

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};
```
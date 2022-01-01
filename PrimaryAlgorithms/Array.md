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

### 移动零

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != 0 && nums[i] == 0) {
      nums[i] = nums[j];
      nums[j] = 0;
    }
    if (nums[i] != 0) {
      i++;
    }
  }
};
```

### 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

进阶：你可以想出一个时间复杂度小于 `O(n2)` 的算法吗？

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  hash[nums[0]] = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = (target - nums[i]).toString();
    if (diff in hash) {
      return [i, hash[diff]]
    } else {
      hash[nums[i]] = i;
    }
  }
};
```

### 有效的数独

请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
数独部分空格内已填入了字符串型数字，空白格用 '.' 表示。

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  let column = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  let box = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const num = board[y][x] + ''
      if (num != '.') {
        if (row[y][num] || column[x][num] || box[divisionInteger(x, y)][num]) {
          return false
        }
        row[y][num] = column[x][num] = box[divisionInteger(x, y)][num] = num
      }
    }
  }
  return true
};
function divisionInteger(x, y) {
  return parseInt(y / 3) * 3 + parseInt(x / 3)
}
```

### [旋转图像](https://leetcode-cn.com/problems/rotate-image/)

给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const xy_s = new Map()
    // 先循环一次，记录位置
    matrix.forEach((y, yIndex) => {
        y.forEach((x, xIndex) => {
            xy_s.set(xIndex + '_' + yIndex, x)
        })
    })
    // 根据旋转的90度进行取值赋值，例如：3x3矩阵，旋转后0_0的位置应该是0_2的数
    const len = matrix.length - 1
    xy_s.forEach((value, key) => {
        const [x, y] = key.split('_')
        matrix[x][y] = xy_s.get(x + '_' + (len - y))
    })
};
```

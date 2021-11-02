### 位1的个数

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为[汉明重量](https://baike.baidu.com/item/汉明重量)）。

````javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let times = 0
  while (n) {
    n &= n - 1
    ++times
  }
  return times
};
````

### 汉明距离

两个整数之间的 [汉明距离](https://baike.baidu.com/item/汉明距离) 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 `x` 和 `y`，计算并返回它们之间的汉明距离。

````javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let z = x ^ y
  let res = 0
  while(z){
    z &= z -1
    res++
  }
  return res
};
````

### 颠倒二进制位

颠倒给定的 32 位无符号整数的二进制位。

````javascript
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let rev = 0
  for (let i = 0; i < 32 && n > 0; ++ i) {
    rev |= (n & 1) << (31 - i)
    n >>>= 1
  }
  return rev >>> 0
};
````

### 杨辉三角

给定一个非负整数 *`numRows`，*生成「杨辉三角」的前 *`numRows`* 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

````javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; ++i) {
    let nums = new Array(i + 1).fill(1)
    for (let k = 1; k < nums.length - 1; ++k) {
      nums[k] = result[i - 1][k - 1] + result[i - 1][k]
    }
    result.push(nums)
  }
  return result;
};
````

### 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

1、左括号必须用相同类型的右括号闭合。
2、左括号必须以正确的顺序闭合。

````javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const map = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}']
])
var isValid = function (s) {
  let brackets = []
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) == map.get(brackets[brackets.length - 1])) {
      brackets.pop()
    } else {
      brackets.push(s.charAt(i))
    }
  }
  return brackets.length == 0
};
````


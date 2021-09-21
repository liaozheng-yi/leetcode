### 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

````javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let tem = ''
  let len = s.length
  for(let before = 0, after = len -1; before<len/2; before++,after--){
    if(before==after)return
    tem = s[before]
    s[before] = s[after]
    s[after] = tem
  }
};
````

### 整数反转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0
  while (x != 0) {
    const remainder = x % 10
    x = ~~(x / 10)
    rev = rev * 10 + remainder
  }
  if (rev < Math.pow(-2, 31) || rev > (Math.pow(2, 31) - 1)) {
    return 0
  } else {
    return rev
  }
};
```

### 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

````javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const single = new Map()
  for (let i = 0; i < s.length; i++) {
    if (single.has(s.charAt(i))) {
      single.set(s.charAt(i), single.get(s.charAt(i)) + 1)
    } else {
      single.set(s.charAt(i), 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (single.get(s.charAt(i)) == 1) {
      return i
    }
  }
  return -1
};
````

### 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

````javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const table = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++
  }
  for (let j = 0; j < t.length; j++) {
    table[t.codePointAt(j) - 'a'.codePointAt(0)]--
    if (table[t.codePointAt(j) - 'a'.codePointAt(0)] < 0) {
      return false
    }
  }
  return true
};
````

### 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明：**本题中，我们将空字符串定义为有效的回文串。

````javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9A-Z]/g, '').toLocaleLowerCase()
    let i = 0, j = s.length - 1
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false
        }
        i++
        j--
    }
    return true
};
````

### 字符串转换整数 (atoi)

请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。

[题链]:https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnoilh/

````javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trimStart()
  let pre = ""
  if (/\-|\+/.test(s.charAt(0))) {
    pre = s.charAt(0)
  } else if (/[a-z]/i.test(s.charAt(0))) {
    return 0
  }
  let num = 0
  for (let i = pre ? 1 : 0; i < s.length; i++) {
    if (/\d/.test(s.charAt(i))) {
      num = num * 10 + parseInt(s.charAt(i))
    } else {
      break
    }
  }
  if (num >= Math.pow(2, 31)) {
    num = Math.pow(2, 31)
    if (pre !== '-') {
      num--
    }
  }
  return parseInt(pre + num)
};
````
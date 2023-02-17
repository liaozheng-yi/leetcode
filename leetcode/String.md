### 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let tem = ''
  let len = s.length
  for (let before = 0, after = len - 1; before < len / 2; before++, after--) {
    if (before == after) return
    tem = s[before]
    s[before] = s[after]
    s[after] = tem
  }
}
```

### 整数反转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231, 231 − 1] ，就返回 0。

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
  if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
    return 0
  } else {
    return rev
  }
}
```

### 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

```javascript
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
}
```

### 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

```javascript
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
}
```

### 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明：**本题中，我们将空字符串定义为有效的回文串。

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9A-Z]/g, '').toLocaleLowerCase()
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false
    }
    i++
    j--
  }
  return true
}
```

### 字符串转换整数 (atoi)

请你来实现一个  myAtoi(string s)  函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数  myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。

[题链]: https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnoilh/

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trimStart()
  let pre = ''
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
}
```

### 实现 strStr()

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//如下为暴力解法
function isSame(me, him, hisIndex) {
  for (let m = 0; m < me.length; m++) {
    if (me[m] != him[hisIndex + m]) {
      return false
    }
  }
  return true
}
var strStr = function (haystack, needle) {
  if (needle == '') {
    return 0
  }
  if (needle.length > haystack.length) {
    return -1
  }
  let h = 0
  while (h < haystack.length) {
    if (haystack[h] == needle[0]) {
      if (isSame(needle, haystack, h)) {
        return h
      }
    }
    h++
  }
  return -1
}
```

### 外观数列

给定一个正整数 n ，输出外观数列的第 n 项。
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

```javascript
/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  let res = '1'
  let no = 1
  while (no < parseInt(n)) {
    res = readNum(res)
    no++
  }
  return res
}
function readNum(str) {
  let res = ''
  let i = 0
  while (i < str.length) {
    let n = 1
    while (str.charAt(i) == str.charAt(i + n) && i + n < str.length) {
      n++
    }
    res += n + str.charAt(i)
    i += n
  }
  return res
}
```

### 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs[0].length == 0) {
    return ''
  }
  if (strs.length == 1) {
    return strs[0]
  }
  let i = 0
  let flag = true
  while (flag) {
    let temp = strs[0][i]
    if (temp) {
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== temp) {
          flag = false
        }
      }
      if (flag) {
        i++
      }
    } else {
      flag = false
    }
  }
  return strs[0].slice(0, i)
}
```

### 2278.字母在字符串中的百分比

给你一个字符串 `s` 和一个字符 `letter` ，返回在 `s` 中等于 `letter` 字符所占的 **百分比** ，向下取整到最接近的百分比。

```
输入：s = "foobar", letter = "o"
输出：33
解释：
等于字母 'o' 的字符在 s 中占到的百分比是 2 / 6 * 100% = 33% ，向下取整，所以返回 33 。
```

```
输入：s = "jjjj", letter = "k"
输出：0
解释：
等于字母 'k' 的字符在 s 中占到的百分比是 0% ，所以返回 0 。
```

```javascript
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
function percentageLetter(s, letter) {
  let times = 0
  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i)==letter) {
          times++
      }
  }
  return Math.floor(times/s.length*100)
};
```

### 2279. 装满石头的背包的最大数量

现有编号从 `0` 到 `n - 1` 的 `n` 个背包。给你两个下标从 **0** 开始的整数数组 `capacity` 和 `rocks` 。第 `i` 个背包最大可以装 `capacity[i]` 块石头，当前已经装了 `rocks[i]` 块石头。另给你一个整数 `additionalRocks` ，表示你可以放置的额外石头数量，石头可以往 **任意** 背包中放置。

请你将额外的石头放入一些背包中，并返回放置后装满石头的背包的 **最大** 数量。

```
输入：capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2
输出：3
解释：
1 块石头放入背包 0 ，1 块石头放入背包 1 。
每个背包中的石头总数是 [2,3,4,4] 。
背包 0 、背包 1 和 背包 2 都装满石头。
总计 3 个背包装满石头，所以返回 3 。
可以证明不存在超过 3 个背包装满石头的情况。
注意，可能存在其他放置石头的方案同样能够得到 3 这个结果。
```

```
输入：capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100
输出：3
解释：
8 块石头放入背包 0 ，2 块石头放入背包 2 。
每个背包中的石头总数是 [10,2,2] 。
背包 0 、背包 1 和背包 2 都装满石头。
总计 3 个背包装满石头，所以返回 3 。
可以证明不存在超过 3 个背包装满石头的情况。
注意，不必用完所有的额外石头。
```

```javascript
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  let fullBags = 0
  let shouldFullRocks = []
  for (let i = 0; i < capacity.length; i++) {
     if(capacity[i] == rocks[i]) {
         fullBags++
     } else {
        shouldFullRocks.push(capacity[i] - rocks[i])
     }
  }
  shouldFullRocks.sort((a,b) => a-b)
  for (let i = 0; i < shouldFullRocks.length; i++) {
     additionalRocks -= shouldFullRocks[i]
     if(additionalRocks >= 0) {
         fullBags++
     }
  }
  return fullBags
};
```


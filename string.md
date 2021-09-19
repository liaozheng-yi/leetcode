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


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


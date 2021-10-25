### Fizz Buzz

给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。
answer[i] == i 如果上述条件全不满足。

````javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = []
  for (let i = 1; i <= n; ++i) {
    let s = ''
    if (i % 3 === 0) {
      s += 'Fizz'
    }
    if (i % 5 === 0) {
      s += 'Buzz'
    }
    if (s.length === 0) {
      s += i
    }
    result.push(s)
  }
  return result
};
````

### 计算质数

统计所有小于非负整数 *`n`* 的质数的数量。

````javascript
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isPrime = new Array(n).fill(1)
  let result = 0
  for(let i = 2; i < n; ++i) {
    if(isPrime[i]) {
      result += 1
      for(let j = i*i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return result
};
````

### 3的幂

给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x

````javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n !== 0 && n % 3 === 0) {
    n = n / 3
  }
  return n === 1
};
````

### 罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

````javascript
/**
 * @param {string} s
 * @return {number}
 */
const matics = new Map()
matics.set('I', 1)
matics.set('V', 5)
matics.set('X', 10)
matics.set('L', 50)
matics.set('C', 100)
matics.set('D', 500)
matics.set('M', 1000)

const combination = new Map()
combination.set('IV', 4)
combination.set('IX', 9)
combination.set('XL', 40)
combination.set('XC', 90)
combination.set('CD', 400)
combination.set('CM', 900)

var romanToInt = function (s) {
  let num = 0
  for (let i = 0; i < s.length; ++i) {
    let group = s.charAt(i) + s.charAt(i + 1)
    if (combination.has(group)) {
      num += combination.get(group)
      ++i
    } else {
      num += matics.get(s.charAt(i))
    }
  }
  return num
};
````


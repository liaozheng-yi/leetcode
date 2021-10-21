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


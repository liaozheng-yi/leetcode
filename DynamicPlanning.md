### 爬楼梯

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

````javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let [f1, f2, f3] = [0, 0, 1]
  for (let i = 0; i < n; ++i) {
    f1 = f2
    f2 = f3
    f3 = f1 + f2
  }
  return f3
};
````


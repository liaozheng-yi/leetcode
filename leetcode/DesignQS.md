### 打乱数组

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果

````javascript
/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.nums = nums
  }
  reset() {
    return this.copy()
  }
  shuffle() {
    let nums = this.copy()
    for (let i = 0; i < nums.length; ++i) {
      let random = this.randOne(i, nums.length - 1);
      [nums[i], nums[random]] = [nums[random], nums[i]]
    }
    return nums
  }
  copy() {
    return JSON.parse(JSON.stringify(this.nums))
  }
  randOne(left, right) {
    return left + Math.floor(Math.random() * (right - left + 1));
    //下面这个写法就过不了
    //return left + Math.round(Math.random() * (right - left));
  };
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
````

### 最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

````javascript
class MinStack {
  constructor() {
    this.stack = []
    this.minStack = [Infinity]
  }
  push(x) {
    this.stack.unshift(x)
    this.minStack.unshift(Math.min(this.minStack[0], x))
  }
  pop() {
    this.stack.shift()
    this.minStack.shift()
  }
  top() {
    return this.stack[0]
  }
  getMin() {
    return this.minStack[0]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
````


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
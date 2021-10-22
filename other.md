## 加餐

### 全排列算法

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。

````javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  function arrange(doneArr, undoneArr) {
    if (undoneArr.length === 0) {
      result.push(doneArr)
    } else {
      undoneArr.forEach((num, index) => {
        let nextUndoneArr = [].concat(undoneArr)
        nextUndoneArr.splice(index, 1)
        arrange(doneArr.concat(num), nextUndoneArr)
      })
    }
  }
  arrange([],nums)
  return result
};
````


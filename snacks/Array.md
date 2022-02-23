### 全排列算法

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。

```javascript
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
  arrange([], nums)
  return result
}
```

### 按顺序插入

给定一组顺序数组和一个数字，若数组中存在该数字，则返回该索引值，
如果不存在，则按顺序插入数组，并返回数组和插入的索引值。
比如 [1,2,4,5] 6 返回[1,2,4,5,6] 索引值 4
[1,3,5,7] 3 返回 索引值 1
[2,7,8,9,10] 8 返回 索引值 2
[2,7,8,9,10] 6 返回[2,6,7,8,9,10] 索引值 1

```javascript
/**
 * @param {number[]} nums
 * @param number
 * @return {number[]} index
 */

function sortPush(nums, item) {
  let isHave = nums.findIndex(e => e === item)
  if (isHave > -1) {
    return isHave
  }
  for (let i = 0; i < nums.length; i++) {
    if (item < nums[i]) {
      nums.splice(i, 0, item)
      return i
    }
  }
  nums.splice(nums.length, 0, item)
  return nums.length + 1
}
```

### 排列格式对比

给定两组长度相同的数组,比较两组数组的排列格式是否相同,相同则返回true,不同则返回false
比如 
["a",1,"a",1],["b",2,"b",2]  两组数组的排列格式都为abab形式,返回true
["c","c","c","e"],["f","f","2","g"]  第一组的格式为aaab,第二组的格式为aabc,返回false 

```javascript
/**
 * @param {(number|string)[]} ary1
 * @param {(number|string)[]} ary2
 * @return {boolean}
 */
function isSameFormat(ary1, ary2) {
  
}
```
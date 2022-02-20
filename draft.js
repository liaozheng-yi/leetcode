// let nums = [2, 7, 8, 9, 10]
// let target = 6
let nums = [1, 2, 4, 5]
let target = 6
function sortPush(nums, item) {
    let isHave = nums.findIndex(e => e === item)
    if (isHave > -1) {
        return isHave
    }
    for (let i = 0; i < nums.length; i++) {
        if (item < nums[i] ) {
            nums.splice(i , 0, item)
            return i 
        }
    }
    nums.splice(nums.length, 0 , item)
    return nums.length + 1
}
const index = sortPush(nums, target)
console.log(nums, index);
let a = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function reverse(nums, start, end) {
    let temp = nums[start];
    while (start < end) {
        nums[start] = nums[end];
        nums[end] = temp;
        temp = nums[start+1];
        start++;
        end--;
    }
}
var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
rotate(a, k)
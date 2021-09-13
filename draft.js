let nums = [9,1,2,3];

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // console.log(i)
        // if (i == -1) {
        //     digits.unshift(1);
        //     return digits;
        // }
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};
let res = plusOne(nums);

console.log(res);
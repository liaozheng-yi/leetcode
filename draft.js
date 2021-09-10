let a = [0,0,1,1,1,1,2,2,3,3,4];
var removeDuplicates = function(nums) {
    // var acc;
    // for (var i = 0; i < nums.length;i++ ) {
    //     if (acc !== nums[i]) {
    //         acc = nums[i]
    //     } else {
    //         nums.splice(i, 1)
    //     }
    // }
    // return nums.length
    for(var i =0;i<nums.length;i++){
        if(i==nums.length)return;
        if(nums[i]==nums[i+1]){
            nums.splice(i,1)
        }
    }
};
removeDuplicates(a);
console.log(a)
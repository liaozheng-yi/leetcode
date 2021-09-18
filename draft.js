let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var rotate = function (matrix) {
    const xy_s = new Map()
    const len = matrix.length - 1
    matrix.forEach((y, yIndex) => {
        y.forEach((x, xIndex) => {
            xy_s.set(xIndex + '_' + yIndex, x)
        })
    })
    xy_s.forEach((value, key) => {
        const [x, y] = key.split('_')
        matrix[x][y] = xy_s.get(x + '_' + (len - y))

    })
};

rotate(nums)
//[[7,4,1],[8,5,2],[9,6,3]]
console.log(nums);
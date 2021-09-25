var str = '5'
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (parseInt(n) === 1) {
        return '1'
    }
    let res = "11"
    let no = 2
    while (no < parseInt(n)) {
        res = readNum(res)
        no ++
    }
    return res
};
function readNum(str) {
    let res = ''
    let i = 0
    while (i < str.length) {
        let n = 1
        console.log(str.charAt(i) !== str.charAt(i + n))
        while (str.charAt(i) == str.charAt(i + n) && i + n < str.length) {
            n++
        }
        res += n + str.charAt(i)
        console.log('res', res)
        i += n
    }
    return res
}

let res = countAndSay(str)
// let res = readNum('11')
console.log(res)
let str = "aabb";


var firstUniqChar = function (s) {
    const single = new Map()
    for (let i = 0; i < s.length; i++) {
        if (single.has(s.charAt(i))) {
            single.set(s.charAt(i), single.get(s.charAt(i)) + 1)
        } else {
            console.log(s.charAt(i))
            single.set(s.charAt(i), 1)
        }
    }
    console.log(single)
    for (let i = 0; i < s.length; i++) {
        if (single.get(s.charAt(i)) == 1) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar(str));
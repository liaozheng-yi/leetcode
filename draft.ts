// let str = "-91283472332";
let str = '21474836460'

var myAtoi = function (s: string) {
  s = s.trimStart()
  console.log('s', s)
  let pre = ""
  if (/\-|\+/.test(s.charAt(0))) {
    pre = s.charAt(0)
  } else if (/[a-z]/i.test(s.charAt(0))) {
    return 0
  }
  let num = 0
  for (let i = pre ? 1 : 0; i < s.length; i++) {
    if (/\d/.test(s.charAt(i))) {
      num = num * 10 + parseInt(s.charAt(i))
    } else {
      break
    }
  }
  if (num >= Math.pow(2, 31)) {
    num = Math.pow(2, 31)
    if (pre !== '-') {
      num--
    }
  }
  console.log(pre, num)
  return parseInt(pre + num)
};
let res = myAtoi(str)
console.log('res', res)
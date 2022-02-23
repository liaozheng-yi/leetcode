let ary1 = ["c","c","c","e"]
let ary2 = ["f","f","2","g"]
function isSameFormat(ary1, ary2) {
  let mapping = {}
  for (let i = 0; i < ary1.length; i++) {
      if(ary1[i] in mapping) {
        if(ary2[i] !== mapping[ary1[i]]) {
            return false
        }
      } else {
        mapping[ary1[i]] = ary2[i]
      }
  }
  return true
}
const result = isSameFormat(ary1, ary2)
console.log(result);
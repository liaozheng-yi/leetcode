let ary1 = ["j","1","j","2","c","c","a"]
let ary2 = ["b","3","b","4","l","l","i"]
function isSameFormat(ary1, ary2) {
  if(ary1.length !== ary2.length) {
    return false
  }
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
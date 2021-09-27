
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// let five = new ListNode(5)
// let four = new ListNode(4, five)
let three = new ListNode(3)
let two = new ListNode(2, three)
let one = new ListNode(1, two)
console.log(one)

var reverseList = function (head) {
    let pre = null
    let cur = head
    console.log('cur1',cur)
    while (cur) {
        const next = cur.next
        console.log('next',next)
        cur.next = pre
        console.log('cur2',cur)
        pre = cur
        console.log('pre',pre)
        cur = next
        console.log('cur3',cur)
        if(cur){
            console.log(cur.next)
        }
        if(pre){
            console.log('pre.next',pre.next)
        }
    }
    return pre
};
// reverseList(one)
// console.log('one',one)
console.log(reverseList(one))
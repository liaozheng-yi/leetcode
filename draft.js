// let str = "-91283472332";
var str = '21474836460';
var myAtoi = function (s) {
    s = s.trimStart();
    console.log('s', s);
    var pre = "";
    if (/\-|\+/.test(s.charAt(0))) {
        pre = s.charAt(0);
    }
    else if (/[a-z]/i.test(s.charAt(0))) {
        return 0;
    }
    var num = 0;
    for (var i = pre ? 1 : 0; i < s.length; i++) {
        if (/\d/.test(s.charAt(i))) {
            num = num * 10 + parseInt(s.charAt(i));
        }
        else {
            break;
        }
    }
    if (num >= Math.pow(2, 31)) {
        num = Math.pow(2, 31);
        if (pre !== '-') {
            num--;
        }
    }
    console.log(pre, num);
    return parseInt(pre + num);
};
var res = myAtoi(str);
console.log('res', res);

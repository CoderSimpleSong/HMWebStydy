 /* 学习目标
 1.能够使用if分支语句
 2.能够使用switch分支语句
 3.能够使用三元表达式
 */
 
/* 
1.流程控制:就是控制代码的执行顺序
分类: 顺序结构(从上到下下执行),分支结构(就是if switch),循环结构
*/

/* 
顺序结构: 代码书写的先后顺序,就是顺序流程控制
*/
/* 
分支流程控制:根据不同的条件,执行不同的路径代码,从而得到不同的结果 (多选一)
if分支语句
switch分支语句
*/
var num = 10;
if (num > 5) {
    console.log('num 大于5');   
} else {
    console.log('num 小于等于5');
}

/* var year = prompt('请输入年份:');
if (year%4 == 0 && year%100 != 0  || year %400 == 0) {
    console.log('是闰年');
} else {
    console.log('是平年');
} */

var str = prompt('请输入您的姓名:');

if (str === '刘德华') {
    alert('恭喜'+ str + '中了5块钱');
} else {
    alert('抱歉您没有中奖');
}


if (str == '1') {
    console.log(str);
    
}else if (str == '2') {
    console.log(str);
    
}else {
    console.log(str);
    
}

var scanf = prompt('请输入0~59的数字');
scanf = scanf<=9?'0'+scanf:scanf;
alert(scanf);

switch (num) {
    case num > 5:
        console.log('num大于5');
        break;
    case num = 5: 
        console.log('num等于5');
        break;
    default:
        console.log('num小于等于5');
        break;
}
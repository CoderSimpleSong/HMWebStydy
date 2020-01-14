var num = 10;
console.log(typeof num); // number

var str = 'sj';
console.log(typeof str); // string

var flag = true;
console.log(typeof flag);//boolean

var vari = undefined;
console.log(typeof vari); // undefined

var obj = null;
console.log(typeof obj);// object 

prompt // 返回值是一个字符类型


//下面的内容为数据类型的转换
/* 
1.把其他类型转换为字符串类型
2.把其他类型转换为数字型
3.把其他类型转换为布尔型
*/

//转换为字符串方式
//toString()
var num = 13;
console.log(num.toString());

//String()   强转换
var num_1 = 14;
console.log(String(num_1));

//与字符串拼接  这一种方式称之为隐式转换
var num_2 = 15;
console.log(num_2 + '');


var qq = '234'
//转换为数字型
//将字符串转换为数字型  利用parseint(string)函数  取整 parseInt(3.14) 值为3
// parseInt(120px)  值为120  去除单位
var aa = parseInt(qq);
console.log(aa);

//将string转换为浮点数值型 利用 parseFloat(string)函数
var bb = parseFloat(qq);
console.log(bb);

//Number() 强转换
var cc = Number(qq)
console.log(cc);

//js 隐式转换   利用算数运算隐式转换为数值型   -  * /
var dd = qq - 0;
console.log(dd);

//计算年龄案例
/* var ageNum = prompt('请输入您出生的年份');
var str = '您今年'+(2020 - ageNum)+'岁了';
alert(str); */

/* var num1 = prompt('请输入第一个值');
var num2 = prompt('请输入第二个值');
var sum = parseInt(num1) + parseInt(num2);
alert('结果为:'+ sum); */


//将其他类型中换为布尔类型
//只有一个方法 Boolean()
// 代表空、否定的值会被转换为flase, 比如 0 NaN null Undefined
//其余值会被转换为true
var bool = Boolean(NaN);
console.log(bool);

var nm = prompt('请输入您的姓名');
var age =prompt('请输入您的年龄');
var rr = prompt('请输入您的性别'); 
var ss = '您的姓名是:'+nm+'\n您的年龄是:'+age + '\n您的性别是:'+rr;
alert(ss);








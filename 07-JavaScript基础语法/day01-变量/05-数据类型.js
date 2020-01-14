/* 
数据类型学习目标:
1.能够说出5种简单数据类型
2.能够使用typeof获取变量的类型
3.能够说出1~2种转换为数值型的方法
4.能够说出1~2种转换为字符型的方法
5.能够说出什么是隐式转换



一:数据类型的简介:
在计算机中,不同的数据所占的存储空间是不同的,为了便于把数据分成所需内存大小啊不同的数据,充分利用存储空间,于是定义了不同的数据类型
简单的来说,数据类型就是数据的类别型号,比如 "张三", 18 这是两种数据类型
1).变量的数据类型
变量是用来存储值的所在处,他们有名字和数据类型,变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中,JavaScript是一种弱类型的或者说动态语言,这意味着不同提前声明变量的类型,在程序运行过程中,类型会被自动确定 (这里与oc相似啊!!!!! id类型?)
2).JavaScript拥有动态类型,同时意味着相同的变量可用作不同的类型
var x = 6;
x = 'bill';
3). JavaScript中数据类型的分类: 
a.简单数据类型: Number , String , Boolean, Undefined , Null
b.复杂数据类型:(object)
Number: 数字型,包含整型值和浮点型值, 如21 . 0.21  默认值 0 
Boolean: ture flase   默认值 flase
String: 字符串类型  默认值 ""
Undefined: var a;声明了变量a但是没有给他赋值,此时a = Undefined
Null: var a = null; 声明了变量a为空值

4).数字型的进制关系
八进制: 0 ~ 7  
十六进制: 0~9 a~f
5).数字型范围:  Number.Max_VALUE   Number.MIN_VALUE
6).特殊值: 
a.infinity  无穷大
b.-infinity  无穷小
c.NaN(Not a number) 代表一个非数值

6).字符串型: 可以是单引号 也可以是双引号  ''  ""  引号中包含引号  外双内单
7).字符串转义符:
a.\n  换行
b. \\ 斜杠
c. \'  单引号
d. \"  双引号
e. \t  tab缩进
f. \b  空格

7)获取字符串的长度 length

8)字符串的拼接   + 

9)  Undefined 与 数字相加   结果为NaN
  
*/
// 程序中,数字前面加0 表示八进制
var num1 = 010;
console.log(num1);
//  数字的前面加0x 就表示16进制
var num2 = 0x9;
console.log(num2);

// isNaN方法,判断非数字   如果不是数字  返回ture
var myName = '宋大大';
console.log(isNaN(myName));

var msg = "我是一个'高富帅'的程序猿";
console.log(msg);

console.log(msg.length);

//字符串的拼接  +       只要有字符串与其他类型相拼接 结果就是字符串类型
//数值相加, 字符相连
console.log('沙漠' + '骆驼');
console.log('sj' + 777);
console.log('sj' + true);  // sjtrue
console.log(12 + 12);  // 24 
console.log('12' + 12); // 1212 
//字符串拼接加强  变量不要写到字符串里面,是通过和字符串相连的方式
var age =  26;
console.log('sj今年'+age+'岁');

var age = prompt('请输入您的年龄');
alert('您的年龄是' + age + '岁')


var variable = undefined;
console.log(variable + 'sj'); // undefinedsj
console.log(variable + 12); // 结果为NaN

var space = null;  //空值
console.log(space + 'sj');
console.log(space + 12); // 结果为12











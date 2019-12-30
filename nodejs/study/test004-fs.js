/*
* 阻塞是按顺序执行的，而非阻塞是不需要按顺序的
* */

var fs = require('fs');

/*=====================阻塞代码实例========================*/
// let readFileSync = fs.readFileSync('./resources/input.txt');
// console.log(readFileSync.toString());
// console.log("程序执行结束!");

/*=====================非阻塞代码实例========================*/
//不会阻碍后面的代码执行
fs.readFile('./resources/input.txt',function (error,data) {
    console.log(error);
    console.log(data.toString());
});
console.log("程序执行结束");//会先执行
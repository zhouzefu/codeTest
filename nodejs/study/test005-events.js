/*
* on:绑定事件
* emit:触发事件
* */

//  初始化事件驱动
let events = require('events');
let eventEmitter = new events.EventEmitter();

//  自定义函数
var test001 =  function ()  {
    console.log('test001');
};
var test002 =  function() {
    console.log('test002');

};
// 绑定事件
eventEmitter.on('trigger-function001',test001);
eventEmitter.on('trigger-function002',test002);

// 执行事件
eventEmitter.emit('trigger-function001');
eventEmitter.emit('trigger-function002');

console.log("程序执行完毕");


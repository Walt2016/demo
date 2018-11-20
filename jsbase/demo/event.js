// 事件
// 事件捕获 capture
// 事件冒泡 pop

// addEventListener(eventName,handlers,boolean)

// removeEventListener(eventName,handlers)
// //事件解绑
// //不能remove匿名handlers函数 
// //相同事件绑定和解除，需要使用共用函数；
// //共用函数不能带参数；

// e.stopPropagation() 阻止事件传播
// e.preventDefault() 阻止默认行为
// e.target() 触点
// e.currentTarget() 事件挂载点

// 事件委托
// 事件绑定到了父节点上。便于处理新增的子节点
// 父节点是通过event.target来找对应的子节点的。
// 事件处理程序中的this值始终等于currentTarget的值，指向父节点

var handler = function(e) {
    console.log(e.target)
    if (e.target.className === "box") {
        e.target.innerText = +new Date();
    }

}
document.body.addEventListener("click", handler, false);
// 基础类型 typeof 类型判断

typeof 1 === "number"
typeof undefined === "undefined"
typeof "1" === "string"
typeof true === "boolean"


typeof {} === "object"
typeof [] === "object"
typeof null == "object"
// typeof document.body==="object"
// typeof document.querySelector("div")==="object"

typeof 1 / 0 === 'NaN'
1 / 0 === Infinity
typeof Infinity === "number"
typeof NaN === "number"

typeof(function() {}) === "function"
typeof(new function() {}) === "object"


typeof Date() === "string"
typeof Date === "function"
typeof String === "function"
typeof Array === "function"
typeof new Date() === "object"
typeof new Array() === "object"


parseInt("a") === NaN
parseInt("a") !== parseInt("a")
NaN == NaN == false;


// ({}) instanceof Ojbect


Object instanceof Object; //true 
Function instanceof Function; //true 
Number instanceof Number; //false 
String instanceof String; //false 

Function instanceof Object; //true 

var Foo=function(){
}
Foo instanceof Function; //true 
Foo instanceof Foo; //false



//类型判断 Object.prototype.toString.call
Object.prototype.toString.call(1)
// "[object Number]"
Object.prototype.toString.call("a")
// "[object String]"
Object.prototype.toString.call([])
// "[object Array]"
Object.prototype.toString.call({})
// "[object Object]"
Object.prototype.toString.call()
// "[object Undefined]"
Object.prototype.toString.call(undefined)
// "[object Undefined]"
Object.prototype.toString.call(null)
// "[object Null]"
Object.prototype.toString.call(function() {})
// "[object Function]"

Object.prototype.toString.call(Date())
// "[object String]"
Object.prototype.toString.call(new Date())
// "[object Date]"
Object.prototype.toString.call(new Array())
// "[object Array]"
Object.prototype.toString.call(new Object())
// "[object Object]"

Object.prototype.toString.call(NaN)
// "[object Number]"
Object.prototype.toString.call(Infinity)
// "[object Number]"

// Object.prototype.toString.call(document)
// // "[object HTMLDocument]"
// Object.prototype.toString.call(document.body)
// // "[object HTMLBodyElement]"
// Object.prototype.toString.call(document.querySelector("div"))
// // "[object HTMLDivElement]"

var type = function(o) {
    if (o === null) return 'null';
    var s = Object.prototype.toString.call(o);
    var t = s.match(/\[object (.*?)\]/)[1].toLowerCase();
    return t === 'number' ? isNaN(o) ? 'nan' : !isFinite(o) ? 'infinity' : t : t;
};



var Type = (function() {
    var type = {};
    ['String', 'Object', 'Number', 'Array', 'Undefined', 'Function', 'Null', 'Symbol'].forEach(function(t) {
        type['is' + t] = function(o) {
            return Object.prototype.toString.call(o) == '[object ' + t + ']';
        }
    })

    return type;
})();
console.log(Type.isObject(null))
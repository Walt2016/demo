
// 数组操作
// map filter sort  reduce
// push pop shift unshift
// splice
// slice
// indexOf 
// forEach
// concat
// join
// reverse
// toString

// splice() 用来改变原数组  

// slice(0) 用来复制

// reduce迭代器
var a= [1, 2, 3, 4]

var b=a.slice(0);
var c=b.splice(0,1,"99");


console.log(b,c)

a.reduce(function(t,a){return t*a})
// 24
a.reduce(function(t,a){return t+a})



// 数组对象排序
var a=[{a:1},{a:2}]
a.sort(function(a,b){
	return a.a-b.a
})

//根据参数排序
var sortBy=function(key,asc){
	return function(a,b){
		return asc?a[key]-b[key]:b[key]-a[key]
	}
}

a.sort(sortBy("a"))
console.log(a)
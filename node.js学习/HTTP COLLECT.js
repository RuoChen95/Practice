var http = require('http') //获取模版
var bl = require('bl')  //这个模版的作用：其中有个方法将单字符串合并



http.get(process.argv[2], function(res) {
	res.pipe(bl(function (err, data) {
		data = data.toString() //将数据转化为字符串
		console.log(data.length) //输出字符串的长度
		console.log(data) //输出数据 Q：为什么会输出多个数据？A:当字符串之间有个换行符号的时候，会以多组数据输出（猜想）
	}))
}).on('error', function(e) { //get方法之后如果有错误则套用这个函数
	console.log("Got error: " + e.message);
});
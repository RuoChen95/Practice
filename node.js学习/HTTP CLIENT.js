var http = require('http') //获取模版

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8'); //将参数转化为utf8字符
	res.on('data', function (chunk) { //将data打包到chunk上
		console.log(chunk); //输出chunk
	});
}).on('error', function(e) { //get方法之后如果有错误则套用这个函数
	console.log("Got error: " + e.message);
});
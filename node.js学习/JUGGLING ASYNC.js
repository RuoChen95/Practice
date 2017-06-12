/*
	这个是标准答案，代码没写出来
*/


var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () { //当OK的时候，输出内容
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) { //当count达到3的时候，表明已经?了
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) { //多参传入
  	httpGet(i)
}
/*=====================属性=================*/
var http = require('http');

/*=====================方法=================*/
http.createServer(httpServer).listen(80);

function httpServer(request,response) {
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.end('Hello World\n');
}
/*=====================测试=================*/
console.log('Server running at http://127.0.0.1:80/');
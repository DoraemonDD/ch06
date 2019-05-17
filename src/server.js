var http = require('http');//引入http包
var url = require('url');
var USERS = [{
    username: 'wl1702',
    password: '123456'
}];

http.createServer(function (request, response) {
    //解析请求包括用户名
    var pathname = url.parse(request.url).pathname;

    //输出请求的文件名
    console.log("请求消息" + pathname + "收到.");
    console.log("请求类型" + request.method.toUpperCase());
    if (pathname == '/login') {
        if (request.method.toUpperCase() != 'GET') {
            //postdata表示用户提交上来的数据
            var postdata = '';
            //当接收到'data'事件的时候，将data添加到postdata
            request.addListener('data', function (data) {
                postdata += data;
            });

            //当接受完成（'end'事件），则进行验证处理
            request.addListener('end', function () {
                console.log(postdata);
                var user = JSON.parse(postdata);
                response.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'//允许跨域访问
                });

                // console.log(user.username);
                // console.log(user.password);
                if (user.user == USERS[0].username && user.password == USERS[0].password) {
                    response.write('{"success":true,"errorCode":0}');
                } else {
                    response.write('{"success":false,"errorCode":100}');
                }
                response.end();
            });

        } else {
            response.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'//允许跨域访问
            });
            response.write(JSON.stringify(USERS));
            response.end();
        }
    }
    else {
        response.write("Hello");
        response.end();
    }
}).listen(8082);

console.log("启动web服务器,监听8082端口");
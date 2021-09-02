let http = require('http');
let users = [
    { id: 1, name: 'John', email: '123@qq.com' },
    { id: 1, name: 'jack', email: '678@qq.com' }
];

let server = http.createServer(function (req, res) {
    if (req.url === '/api/users') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify(users));
    } else {
        res.end('Not found')
    }
})

server.listen(3000, () => {
    console.log('监听3000');
})
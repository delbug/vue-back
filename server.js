let http = require('http');
let users = [
    { id: 1, name: 'John', email: '111@qq.com' },
    { id: 2, name: 'jack', email: '222@qq.com' },
    { id: 3, name: 'mack', email: '333@qq.com' },
    { id: 4, name: 'summy', email: '444@qq.com' },
    { id: 5, name: 'toni', email: '55@qq.com' },
    { id: 6, name: 'luosha', email: '666-3@qq.com' },
];
// 1 2 3 4 5 6 7 8 9 10 
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

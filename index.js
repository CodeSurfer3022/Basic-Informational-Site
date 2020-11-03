const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    if(q.pathname === '/') {
        console.log('ok');
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        fileName = '.' + q.pathname + '.html';
        fs.readFile(fileName, (err, data) => {
            if (err) {
                return fs.readFile('404.html', (err, data) => {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write(data);
                    return res.end();
                });
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.write(data);
            return res.end();
        });
    }
}).listen(8080)

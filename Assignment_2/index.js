const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', 'text/plain');

    if (pathname === '/create' && req.method === 'GET') {
        const filePath = path.join(__dirname, query.filename || 'default.txt');
        const content = query.content || 'This is a default file content.';
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error creating file.');
            } else {
                res.statusCode = 200;
                res.end(`File '${query.filename}' created successfully.`);
            }
        });
    } 
    else if (pathname === '/read' && req.method === 'GET') {
        const filePath = path.join(__dirname, query.filename || 'default.txt');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('File not found.');
            } else {
                res.statusCode = 200;
                res.end(`Content of '${query.filename}':\n\n${data}`);
            }
        });
    } 
    else if (pathname === '/delete' && req.method === 'GET') {
        const filePath = path.join(__dirname, query.filename || 'default.txt');
        fs.unlink(filePath, (err) => {
            if (err) {
                res.statusCode = 404;
                res.end('File not found or unable to delete.');
            } else {
                res.statusCode = 200;
                res.end(`File '${query.filename}' deleted successfully.`);
            }
        });

    } else {
        res.statusCode = 404;
        res.end('Invalid route. Try /create, /read, or /delete');
    }
});

server.listen(PORT, () => {
    console.log(`File Management Server running at http://localhost:${PORT}`);
});

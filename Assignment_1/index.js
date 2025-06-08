const http = require('http')
const port = 4000

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Node</title>
            <style>
                body {
                    background-color: #121212;
                    color: #fff;
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background-color: #1e1e1e;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
                    text-align: center;
                }
                h1 {
                    color: #00ffcc;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1> Hello World Application!</h1>
                <p>This is Celebal Assignment 1</p>
            </div>
        </body>
        </html>
    `);
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Server running on port '+port);
    }
})
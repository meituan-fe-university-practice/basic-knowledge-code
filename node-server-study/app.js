const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
debugger;

let func = function (req, res){
  
}
let func1 = (req, res) => {
  
}

// request response
const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  if (req.method === 'POST') {
    let body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      console.log('post-data:', body);
    });
  }
  console.log(req.method, req.url, req.headers);
  console.log(params);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n' + JSON.stringify(params));
  // res.end(JSON.stringify(params));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


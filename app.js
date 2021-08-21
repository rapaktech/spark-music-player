const path = require('path');

const fs = require('fs');

const http = require('http');


// HTTP Status codes

// 200: Successful retrieval
// 201: Successful creation

// 300: Redirect
// 301: Redirect after creation

// 400: Bad request
// 403: Forbidden

// 500: Server Error


const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');
  let contentType = getContentType(filePath) || 'text/html';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const getContentType = (filePath) => {
  let extName = path.extname(filePath);

  if (extName == '.js') return 'text/javascript';

  if (extName == '.css') return 'text/css';
}

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
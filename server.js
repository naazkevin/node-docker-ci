const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from DevOps CI/CD 🚀");
  res.end("Hello from DevOps CI/CD 🚀 v2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

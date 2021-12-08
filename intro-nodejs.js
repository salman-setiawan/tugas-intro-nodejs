const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  switch (req.url) {
    case "/users":
      res.writeHead(200);
      res.end("welcome to about us page");
      break;
    case "/contact":
      res.writeHead(200);
      res.end("welcome to contact us page");
      break;
    default:
      res.writeHead(404);
      res.end("hello world");
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(
    `Server is running on http://${host}:${port}`
  );
});
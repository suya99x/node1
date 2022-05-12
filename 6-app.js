const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our homepage");
    res.end();
  }
  //incoming request and response is what we are sending back
  if (req.url === "/about") {
    res.write("here is our short his");
    res.end();
  }
  //default
  res.end(<h1>oops~</h1>);
});

server.listen(5000);

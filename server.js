const test = require('./module');
// console.log(test.stat);
test.log()

const http = require("http");

const server = http.createServer(function(req, res) {

  res.write("Hello World!");
  res.end();

})

server.listen(3000, () => {
    console.log("Server listen port 3000");
})
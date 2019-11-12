const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello world!");
  response.end();
});
server.listen(8080);

process.on("SIGINT", () => {
  console.log("SIGINT received. Cleanup before exit.");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Cleanup before exit.");
  process.exit(0);
});

// . Nodemon uses SIGUSR2 to inform the program that it's about to be restarted.
// . process.kill() sends a signal to a process, not "killing" the process as
//   suggested by the name.
process.once("SIGUSR2", () => {
  console.log("SIGUSR2 received. Cleanup before restart.");
  process.kill(process.pid, "SIGUSR2");
});

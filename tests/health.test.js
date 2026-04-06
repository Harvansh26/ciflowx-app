const http = require("http");
const { spawn } = require("child_process");

const server = spawn("node", ["src/server.js"]);

setTimeout(() => {
  http.get("http://localhost:3000/health", (res) => {
    if (res.statusCode === 200) {
      console.log("Health test passed");
      server.kill();
      process.exit(0);
    } else {
      console.error("Health test failed");
      server.kill();
      process.exit(1);
    }
  }).on("error", () => {
    console.error("Could not connect to app");
    server.kill();
    process.exit(1);
  });
}, 2000);
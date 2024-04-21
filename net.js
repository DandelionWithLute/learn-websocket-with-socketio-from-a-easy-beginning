// process.stdout.write("\u001B[2J\u001B[0;0f");

const server = require("net").createServer();
try {
  server.on("connection", (socket) => {
    console.log("Client Connected!");
    // socket.write("Welcome new client!\n");

    socket.on("data", (data) => {
      console.log("data is:", data);
      socket.write("data is: ");
      socket.write(data, "utf8");
    });
  });
} catch (err) {
  console.log(err);
}

server.listen(8000, () => {
  console.log("Server bound");
});

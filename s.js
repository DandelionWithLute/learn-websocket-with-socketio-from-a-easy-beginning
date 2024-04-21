const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// receiving emitting events from
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    socket.broadcast.emit("hi")
  });
});



server.listen(3000, () => {
  console.log("Http Listening on Port http://localhost:3000");
});

// console.log("Hello World!")
// console.log(5)

const http = require("http")

const server = http.createServer()

server.on("connection",(socket)=>{
    console.log('New conneciton...')
})

server.listen(3000);

console.log("Listening on port 3000")
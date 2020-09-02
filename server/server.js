var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("sendMsg", (msgTo) => {
    msgTo = JSON.parse(msgTo);
    const minutes = new Date().getMinutes();
    io.emit(
      "getMsg",
      JSON.stringify({
        id: socket.id,
        msg: msgTo.msg,
        time:
          new Date().getHours() +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes),
      })
    );
  });
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});

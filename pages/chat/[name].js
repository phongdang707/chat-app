import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button, Input } from "semantic-ui-react";

export default function index() {
  const router = useRouter();
  const [name, setname] = useState(router.query.name);

  const [msg, setMsg] = useState("");
  const [recMsg, setRecMsg] = useState({
    listMsg: [],
  });
  var socket = io("http://localhost:3001");
  // const [name, setName] = useState("");

  useEffect(() => {
    socket.on("getMsg", (data) => {
      console.log("data", data);
      var obj = JSON.parse(data);
      setMsg(obj.msg);
    });
  }, []);

  // to send a message
  const sendMessage = () => {
    socket.emit("sendMsg", JSON.stringify({ msg: msg }));
  };

  return (
    <div>
      hello
      {" " + name}
      <Input
        placeholder="Nhập nội dung..."
        onChange={(event) => setMsg(event.target.value)}
      />
      <Button
        onClick={() => {
          sendMessage();
        }}
      >
        Gửi
      </Button>
      <div>{msg}</div>
    </div>
  );
}

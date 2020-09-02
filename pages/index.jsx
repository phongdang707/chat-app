import React from "react";
import { Button, Input } from "semantic-ui-react";
import Link from "next/link";
import { userName } from "../redux/actions/counterActions";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");

  return (
    <div>
      <Input
        placeholder="Nhập tên của bạn..."
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => dispatch(userName(name))}>
        <Link href="/chat/[name]" as={`/chat/${name}`}>
          <a>Tham gia</a>
        </Link>
      </Button>
    </div>
  );
}

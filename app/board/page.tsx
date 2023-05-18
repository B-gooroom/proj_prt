"use client";
import Click from "../../styles/atoms/click";

async function getData() {
  const res = await fetch(
    `http://ec2-13-209-47-58.ap-northeast-2.compute.amazonaws.com:8080/api/v2/notice`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function board() {
  const data = await getData();
  console.log("board", data);

  return (
    <div>
      <div>공지사항</div>
      <Click color="pink">click</Click>
      <div>
        {data.boards.map((board: any) => (
          <div key={board.board_no}>
            <p>{board.subject}</p>
            <p>{board.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

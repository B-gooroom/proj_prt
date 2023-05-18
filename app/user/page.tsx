async function getUserData() {
  const res = await fetch(
    `http://ec2-13-209-47-58.ap-northeast-2.compute.amazonaws.com:8080/api/v2/user`
  );
  // `http://ec2-13-209-47-58.ap-northeast-2.compute.amazonaws.com:8080/api/v2/user/${user_no}?userNo=${user_no}` //constructor 추가 후 전굥
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function user() {
  const data = await getUserData();
  console.log("user", data);
  return (
    <div>
      <div>user</div>
    </div>
  );
}

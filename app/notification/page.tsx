async function getData() {
  const res = await fetch(
    `http://ec2-13-209-47-58.ap-northeast-2.compute.amazonaws.com:8080/api/v2/notification`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function notification() {
  const data = await getData();
  console.log("notification", data);

  return (
    <div>
      <div>notification</div>
      <div>
        {data.notifications.map((noti: any) => (
          <div key={noti.noti_no}>
            <p>{noti.noti_title}</p>
            <p>{noti.noti_content}</p>
            <p>{noti.flag_read}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

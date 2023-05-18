async function getEstiData() {
  const res = await fetch(
    `http://ec2-13-209-47-58.ap-northeast-2.compute.amazonaws.com:8080/api/v2/estimate/29?rstrNo=29`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function on() {
  const data = await getEstiData();
  console.log("estimate", data);

  return <div>page</div>;
}

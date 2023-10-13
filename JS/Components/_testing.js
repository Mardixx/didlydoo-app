export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/attendees");
  let response = await data.json();
  console.log(response);
}

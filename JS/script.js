export async function getData() {
  fetch("http://localhost:3000/api/events/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}

getData();

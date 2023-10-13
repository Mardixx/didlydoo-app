export async function getData() {
  fetch("http://localhost:3000/api/events/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let project = document.getElementById("project");
      let test = document.createElement("p");

      test.textContent += data[0].name;

      console.log(test);
      project.appendChild(test);
    })
    .catch((error) => console.error(error));
}

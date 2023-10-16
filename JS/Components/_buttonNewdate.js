async function getData() {
  fetch("http://localhost:3000/api/events/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}

getData();

document.addEventListener("DOMContentLoaded", () => {
  proposerDate.addEventListener("click", () => {
    let eventID = document.getElementById("eventID").value;
    let dateToAdd = document.getElementById("newDate").value;
    fetch(`http://localhost:3000/api/events/${eventID}/add_dates`, {
      method: "POST",
      body: JSON.stringify({
        dates: [`${dateToAdd}`],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  });
});
// newDateProposition();

import { addAttendeeFormToCard } from "./_addUser.js";

export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/events");
  let response = await data.json();
  /*     console.log(response); */

  let section = document.querySelector(".project");

  for (let child of response) {
    let div = document.createElement("div");
    let name = child.name;
    let h1 = document.createElement("h1");
    div.appendChild(h1);
    h1.textContent = name;
    for (let objects of child.dates[0].attendees) {
      let attendees = objects.name;
      let span = document.createElement("span");

      span.classList = "Names";

      span.textContent = attendees;

      div.appendChild(span);
    }
    for (let dates of child.dates) {
      console.log(dates);

      let span3 = document.createElement("span");
      span3.classList = "Dates";
      span3.textContent = dates.date;
      div.appendChild(span3);
      span3.style.marginLeft = "10px";
      for (let names of dates.attendees) {
        let span2 = document.createElement("span");
        let availibility = names.available;
        span2.classList = "Availibility";
        span2.textContent = availibility;
        div.appendChild(span2);
        span2.style.marginLeft = "10px";
        if (availibility == null) {
          span2.textContent = "Do not know";
        }
      }
    }
    section.appendChild(div);
    addAttendeeFormToCard(child, div);
  }
}

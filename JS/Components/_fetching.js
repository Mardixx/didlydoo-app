import { addAttendeeFormToCard } from "./_addUser.js";
import { deleteEvent } from "./_deleteEvent.js";

export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/events");
  let response = await data.json();
  let section = document.querySelector(".project");
  for (let child of response) {
    let delBtn = document.createElement("button");
    delBtn.setAttribute("data-event-id", child.id);
    let addBtn = document.createElement("button");
    let modBtn = document.createElement("button");

    /* let availibilityDiv = document.createElement("div");
    let dateDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    let gridDiv = document.createElement("div");
    let name = child.name;
    let h1 = document.createElement("h1");
    let h1Div = document.createElement("div"); */

    /* h1Div.classList = "h1Div"; */

    /* h1.textContent = name; */

    /* h1Div.appendChild(h1);
    gridDiv.appendChild(h1Div); */

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let tr3 = document.createElement("tr");
    let th = document.createElement("th");

    th.textContent = child.name;

    table.appendChild(th);
    table.appendChild(modBtn);
    table.appendChild(addBtn);
    table.appendChild(delBtn);
    table.appendChild(tr);

    console.log(child.name);
    section.appendChild(table);

    for (let objects of child.dates[0].attendees) {
      let td = document.createElement("td");

      td.textContent = objects.name;

      console.log(objects);

      tr3.appendChild(td);
      table.appendChild(tr3);

      /* let attendees = objects.name;
      let span = document.createElement("span");

      span.classList = "Names";
      nameDiv.classList = "nameDiv";
      gridDiv.classList = "grid";

      span.textContent = attendees;

      nameDiv.appendChild(span);
      gridDiv.appendChild(nameDiv); */
    }
    for (let dates of child.dates) {
      let td = document.createElement("td");

      td.textContent = dates.date;

      table.appendChild(tr);

      tr.appendChild(td);

      /* let span3 = document.createElement("span"); */

      /* span3.classList = "Dates"; */

      /* span3.textContent = dates.date; */

      /* span3.style.marginLeft = "10px"; */

      /* let i = 0; */

      /* let onedayDiv = document.createElement("div");
      onedayDiv.classList = "availibilityPerPersonPerDay"; */

      for (let names of dates.attendees) {
        let td = document.createElement("td");

        if (names.available == null) {
          td.textContent = "Do not know";
        } else {
          td.textContent = names.available;
        }

        table.appendChild(tr2);

        tr2.appendChild(td);
        /* console.log(names); */
        /* let span2 = document.createElement("span");
        let availibility = names.available; */

        /* span2.classList = "Availibility";
        availibilityDiv.classList = "availibilityDiv";
        dateDiv.classList = "dateDiv"; */

        /* span2.textContent = availibility; */

        /* dateDiv.appendChild(span3);
        gridDiv.appendChild(dateDiv); */
        /*         availibilityDiv.appendChild(span2); */
        /* gridDiv.appendChild(availibilityDiv); */

        /* span2.style.marginLeft = "10px"; */

        /* if (availibility == null) {
          span2.textContent = "Do not know";
        } */

        /* if (i <= 1) {
          onedayDiv.appendChild(span2);
          availibilityDiv.appendChild(onedayDiv);
        } */
        /* i++; */
      }
    }
    /* section.appendChild(gridDiv); */
    addAttendeeFormToCard(child, table);
  }
}

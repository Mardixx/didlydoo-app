import { addAttendeeFormToCard } from "./_addUser.js";
import { deleteEvent } from "./_deleteEvent.js";
import { modifyEvent } from "./modifyEvent.js";
import { addDate } from "./_buttonNewdate.js";

export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/events");
  let response = await data.json();
  let section = document.querySelector(".project");
  for (let child of response) {
    let h1 = document.createElement("h1");
    let table = document.createElement("table");
    let div = document.createElement("div");
    let trDates = document.createElement("tr");
    let bigDiv = document.createElement("div");

    bigDiv.classList = "bigDiv";

    trDates.classList = "dateRow";

    h1.textContent = child.name;

    let delBtn = document.createElement("button");
    delBtn.setAttribute("data-event-id", child.id);
    delBtn.addEventListener("click", deleteEvent);
    let addDateBtn = document.createElement("button");
    addDateBtn.setAttribute("data-event-id", child.id);
    let modBtn = document.createElement("button");
    let eveBtn = document.createElement("button");
    eveBtn.setAttribute("data-event-id", child.id);
    eveBtn.addEventListener("click", modifyEvent);
    addDateBtn.addEventListener("click", addDate);
    bigDiv.appendChild(modBtn);
    bigDiv.appendChild(addDateBtn);
    bigDiv.appendChild(delBtn);
    bigDiv.appendChild(eveBtn);

    let divNames = document.createElement("tr");

    divNames.classList = "nameDiv";
    for (let attendees of child.dates[0].attendees) {
      let td = document.createElement("td");

      td.classList = "names";

      td.textContent = attendees.name;

      divNames.appendChild(td);
      bigDiv.appendChild(divNames);
      console.log(attendees);
    }

    div.appendChild(h1);
    div.appendChild(trDates);
    div.appendChild(table);
    bigDiv.appendChild(div);
    section.appendChild(bigDiv);

    for (let dates of child.dates) {
      let td = document.createElement("td");

      td.classList = "dates";
      td.textContent = dates.date;

      trDates.appendChild(td);

      let tr = document.createElement("tr");

      for (let names of dates.attendees) {
        let td = document.createElement("td");

        if (names.available === null) {
          td.textContent = "Don't know";
        } else {
          td.textContent = names.available;
        }
        tr.appendChild(td);
        table.appendChild(tr);
      }
    }

    /*     let delBtn = document.createElement('button')
    let addBtn = document.createElement('button')
    let modBtn = document.createElement('button')


    table.appendChild(modBtn)
    table.appendChild(addBtn)
    table.appendChild(delBtn) */

    addAttendeeFormToCard(child, div);
  }
}

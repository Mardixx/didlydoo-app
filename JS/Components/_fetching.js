import { addAttendeeFormToCard } from "./_addUser.js";
import { deleteEvent } from "./_deleteEvent.js";
import { modifyEvent } from "./modifyEvent.js";
import { addDate } from "./_buttonNewdate.js";

export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/events");
  let response = await data.json();
  let section = document.getElementById("app");
  for (let child of response) {
    let h2 = document.createElement("h2");
    let table = document.createElement("table");
    let div = document.createElement("div");
    let bigDiv = document.createElement("div");
    let description = document.createElement("span");

    description.textContent = child.description;

    bigDiv.classList = "bigDiv";

    h2.textContent = child.name;

    let delBtn = document.createElement("button");
    delBtn.setAttribute("data-event-id", child.id);
    delBtn.classList.add("event-btn", "event-btn--delete");
    delBtn.addEventListener("click", deleteEvent);
    let addDateBtn = document.createElement("button");
    addDateBtn.setAttribute("data-event-id", child.id);
    addDateBtn.classList.add("event-btn", "event-btn--addDate");
    addDateBtn.addEventListener("click", addDate);
    let modBtn = document.createElement("button");
    modBtn.classList.add("event-btn", "event-btn--modAttend");
    let eveBtn = document.createElement("button");
    eveBtn.setAttribute("data-event-id", child.id);
    eveBtn.classList.add("event-btn", "event-btn--modEvent");
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
      table.appendChild(divNames);
      console.log(attendees);
    }

    div.appendChild(h2);
    div.appendChild(description);
    div.appendChild(table);
    bigDiv.appendChild(div);
    section.appendChild(bigDiv);

    for (let dates of child.dates) {
      let tdDate = document.createElement("td");

      tdDate.classList = "dates";
      tdDate.textContent = dates.date;

      let tr = document.createElement("tr");
      tr.appendChild(tdDate);
      for (let names of dates.attendees) {
        let td = document.createElement("td");

        let img = document.createElement("img");
        switch (names.available) {
          case true:
            img.src = "./img/Checkmark.svg";
            img.alt = "imgCheckmark";
            td.appendChild(img);
            img.style.width = "20px";
            break;
          case false:
            img.src = "./img/xMark.svg";
            img.alt = "imgCheckmark";
            td.appendChild(img);
            img.style.width = "20px";

            break;
          case null:
            img.src = "./img/xMark.svg";
            img.alt = "imgCheckmark";
            td.appendChild(img);
            img.style.width = "20px";
            break;
        }

        tr.appendChild(td);
        table.appendChild(tr);
      }
    }
    addAttendeeFormToCard(child, div);
  }
}

import { addAttendeeFormToCard } from "./_addUser.js";
import { deleteEvent } from "./_deleteEvent.js";

export async function getInfo() {
  let data = await fetch("http://localhost:3000/api/events");
  let response = await data.json();
  let section = document.getElementById("app");
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
    delBtn.classList.add("delete-button");
    delBtn.addEventListener("click", deleteEvent);
    let addBtn = document.createElement("button");
    let modBtn = document.createElement("button");
    bigDiv.appendChild(modBtn);
    bigDiv.appendChild(addBtn);
    bigDiv.appendChild(delBtn);

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

    div.appendChild(h1);
    div.appendChild(trDates);
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

    /*     let delBtn = document.createElement('button')
    let addBtn = document.createElement('button')
    let modBtn = document.createElement('button')


    table.appendChild(modBtn)
    table.appendChild(addBtn)
    table.appendChild(delBtn) */

    addAttendeeFormToCard(child, div);
  }
}

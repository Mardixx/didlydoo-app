export const nameForm = document.createElement("form");
export const inputName = document.createElement("input");
export const submitName = document.createElement("button");
export const project = document.getElementById("project");

export async function getData() {
  fetch("http://localhost:3000/api/events/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((eventData) => {
        let title = document.createElement("h1");
        let attendList = document.createElement("ul");

        title.textContent += eventData.name;

        project.appendChild(title);
        project.appendChild(attendList);

        addAttendeeFormToCard(eventData, project);
      });
    })
    .catch((error) => console.error(error));
}

function addAttendeeFormToCard(eventData, project) {
  const addAttendeeForm = document.createElement("form");
  const attendeeNameInput = document.createElement("input");
  const submitAttendeeButton = document.createElement("button");

  attendeeNameInput.placeholder = "Enter your name";
  submitAttendeeButton.textContent = "Add Attendee";

  eventData.dates.forEach((date) => {
    const dateValue = date.date;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = dateValue;
    checkbox.name = "dateAvailability";
    checkbox.checked = false;

    addAttendeeForm.appendChild(checkbox);
  });
  addAttendeeForm.appendChild(attendeeNameInput);
  addAttendeeForm.appendChild(submitAttendeeButton);
  project.appendChild(addAttendeeForm);
}

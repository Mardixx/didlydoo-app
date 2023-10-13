export const project = document.getElementById("project");

export function addAttendeeFormToCard(eventData, project) {
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

export const project = document.getElementById("project");

export function addAttendeeFormToCard(eventData, project) {
  const addAttendeeForm = document.createElement("form");
  addAttendeeForm.classList.add("nameForm");
  const attendeeNameInput = document.createElement("input");
  const submitAttendeeButton = document.createElement("button");

  attendeeNameInput.placeholder = "Enter your name";
  submitAttendeeButton.textContent = "Send";
  addAttendeeForm.appendChild(attendeeNameInput);

  eventData.dates.forEach((date) => {
    const dateValue = date.date;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = dateValue;
    checkbox.name = "dateAvailability";
    checkbox.checked = false; // <- This is the default value //

    addAttendeeForm.appendChild(checkbox);
  });
  addAttendeeForm.appendChild(submitAttendeeButton);
  project.appendChild(addAttendeeForm);
  const error = document.createElement("span");
  error.setAttribute("id", "error");
  addAttendeeForm.appendChild(error);

  // RETRIEVE INPUT DATA WITH SUBMIT
  addAttendeeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = attendeeNameInput.value;

    if (name.length <= 2 || name.length >= 15) {
      error.textContent = "Wrong name";
      return;
    }
    const availability = [];

    eventData.dates.forEach((date) => {
      const dateValue = date.date;
      const checkbox = document.getElementById(dateValue);
      availability.push({
        date: dateValue, // <- DATE HAS TO BE A STRING !! //
        available: checkbox.checked,
      });
    });
    let userAvailability = {
      name,
      dates: availability,
    };
    let eventID = eventData.id;
    fetch(`http://localhost:3000/api/events/${eventID}/attend`, {
      method: "POST",
      body: JSON.stringify(userAvailability, eventID),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
}

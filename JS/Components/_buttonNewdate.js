export async function addDate(event) {
  const eventID = event.target.getAttribute("data-event-id");

  const inputDate = prompt("Enter a new date (DD/MM/YYYY):");

  if (inputDate) {
    const dateToAdd = convertDate(inputDate);
    if (dateToAdd) {
      fetch(`http://localhost:3000/api/events/${eventID}/add_dates`, {
        method: "POST",
        body: JSON.stringify({
          dates: [`${dateToAdd}`],
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          alert("Oops, an error occurs while trying to add the date");
          console.error(error);
        });
    } else {
      alert("Invalid date, please use DD/MM/YYYY");
    }
  }
}

// CONVERT DATE FOR DB (merci stack overflow)
function convertDate(inputDate) {
  const dateParts = inputDate.split("/");
  if (dateParts.length === 3) {
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    const isoDate = `${year}-${month}-${day}`;
    if (dateFormat(isoDate)) {
      return isoDate;
    }
  }
  return null;
}

// TESTING THE DATE FORMAT
function dateFormat(date) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
}

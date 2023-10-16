export async function deleteEvent(event) {
  const eventID = event.target.getAttribute("data-event-id");
  const confirmation = confirm(
    "Warning, this event will be deleted. Are u sure ?"
  );
  if (confirmation) {
    fetch(`http://localhost:3000/api/events/${eventID}`, {
      method: "DELETE",
    })
      .then((reponse) => {
        if (reponse.status === 200) {
          console.log("Deleted successfully");
          event.target.parentElement.remove();
        } else {
          console.error("Deletion failed!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
}

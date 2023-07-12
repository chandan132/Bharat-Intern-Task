// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const addEventForm = document.getElementById("add-event-form");
  const eventTimeInput = document.getElementById("event-time");
  const eventDescriptionInput = document.getElementById("event-description");
  const addEventBtn = document.getElementById("add-event-btn");
  const calendarEventsContainer = document.getElementById(
    "calendar-events-container"
  );

  addEventBtn.addEventListener("click", function () {
    const eventTime = eventTimeInput.value;
    const eventDescription = eventDescriptionInput.value;

    if (eventTime.trim() !== "" && eventDescription.trim() !== "") {
      const calendarEvent = document.createElement("div");
      calendarEvent.classList.add("calendar-event");
      calendarEvent.innerHTML = `
          <span>${eventTime}</span>
          <span>${eventDescription}</span>
        `;
      calendarEventsContainer.appendChild(calendarEvent);

      // Reset input fields
      eventTimeInput.value = "";
      eventDescriptionInput.value = "";
    }
  });
});

// Example data for the pie charts
const task1Data = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#44c767", "#f2f2f2"],
    },
  ],
};

const task2Data = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ["#44c767", "#f2f2f2"],
    },
  ],
};

const task3Data = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [30, 70],
      backgroundColor: ["#44c767", "#f2f2f2"],
    },
  ],
};

// Create the pie charts using Chart.js
new Chart(document.getElementById("task1-pie-chart"), {
  type: "pie",
  data: task1Data,
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
});

new Chart(document.getElementById("task2-pie-chart"), {
  type: "pie",
  data: task2Data,
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
});

new Chart(document.getElementById("task3-pie-chart"), {
  type: "pie",
  data: task3Data,
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
});
// Add event listener to the upload form to handle document uploads
document
  .querySelector(".upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const documentName = document.getElementById("documentName").value;
    const documentDescription = document.getElementById(
      "documentDescription"
    ).value;

    // Perform the upload process using an appropriate backend service
    // You can use AJAX, Fetch API, or libraries like Axios to send the file and document details to the server

    // Once the upload is successful, you can dynamically add the new document entry to the document list using JavaScript
    const newDocument = createDocumentEntry(documentName, documentDescription);
    document.querySelector(".document-list").appendChild(newDocument);

    // Clear the form fields after successful upload
    fileInput.value = "";
    document.getElementById("documentName").value = "";
    document.getElementById("documentDescription").value = "";
  });

function createDocumentEntry(name, description) {
  const documentDiv = document.createElement("div");
  documentDiv.className = "document";

  const documentNameHeading = document.createElement("h2");
  documentNameHeading.textContent = name;

  const documentDescriptionP = document.createElement("p");
  documentDescriptionP.textContent = "Description: " + description;

  const viewButton = document.createElement("button");
  viewButton.className = "view-button";
  viewButton.textContent = "View";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    // Code to handle deleting the document
    documentDiv.remove();
  });

  documentDiv.appendChild(documentNameHeading);
  documentDiv.appendChild(documentDescriptionP);
  documentDiv.appendChild(viewButton);
  documentDiv.appendChild(deleteButton);

  return documentDiv;
}

// Example of loading existing documents dynamically (you can fetch from the server)
const existingDocuments = [
  { name: "Document 1", description: "Lorem ipsum dolor sit amet." },
  {
    name: "Document 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more existing documents as needed
];

const documentList = document.querySelector(".document-list");
existingDocuments.forEach((document) => {
  const newDocument = createDocumentEntry(document.name, document.description);
  documentList.appendChild(newDocument);
});

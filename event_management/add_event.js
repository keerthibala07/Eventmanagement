function validateAndDisplayChosenImageName() {
  var input = document.getElementById('eventposter');
  var fileSize = input.files[0].size; // in bytes
  var minSize = 1 * 1024 * 1024; // 1 MB
  var maxSize = 3 * 1024 * 1024; // 3 MB

  var fileSizeError = document.getElementById('fileSizeError');
  var chosenImageNameContainer = document.getElementById('chosenImageNameContainer');
  var chosenImageName = document.getElementById('chosenImageName');

  if (fileSize < minSize || fileSize > maxSize) {
    fileSizeError.textContent = 'File size should be between 1 MB and 3 MB.';
    chosenImageNameContainer.style.display = 'none';
    input.value = ''; // Clear the input to prevent choosing the file
  } else {
    fileSizeError.textContent = '';
    chosenImageName.textContent = 'Image Name: ' + input.files[0].name;
    chosenImageNameContainer.style.display = 'block';
  }
}

var eventId = 0;

function addEventFields() {
  eventId++;
  var eventsContainer = document.getElementById('eventsContainer');
  var eventDiv = document.createElement('div');
  eventDiv.innerHTML = `
    <label for="eventName${eventId}">Event Name:</label>
    <input type="text" id="eventName${eventId}" name="eventName${eventId}" required oninput="removeError('eventName${eventId}')">

    <label for="eventvenue${eventId}">Event Venue:</label>
    <input type="text" id="eventvenue${eventId}" name="eventvenue${eventId}" required oninput="removeError('eventvenue${eventId}')">

    <label for="eventmode${eventId}" class="dropdown-label">Event Mode:</label>
    <select id="eventmode${eventId}" name="eventmode${eventId}" class="dropdown" style="width: 150px;" required>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
    </select>

    <label for="eventtype${eventId}" class="next-label">Event Type:</label>
    <select id="eventtype${eventId}" name="eventtype${eventId}" class="dropdown" style="width: 150px;" required>
        <option value="Technical">Technical</option>
        <option value="Non-Technical">Non-Technical</option>
    </select>

    <label for="formlink${eventId}" class="next-label">Form link:</label>
    <input type="text" id="formlink${eventId}" name="formlink${eventId}" required oninput="removeError('formlink${eventId}')">
  `;
  eventsContainer.appendChild(eventDiv);
}

function removeEventFields() {
  var eventsContainer = document.getElementById('eventsContainer');
  if (eventId > 0) {
    var lastEventDiv = eventsContainer.lastChild;
    eventsContainer.removeChild(lastEventDiv);
    eventId--;
  }
}

function validateForm() {
  var isValid = true;

  // Validate Event Name
  var eventName = document.getElementById('eventName');
  if (eventName.value.trim() === '') {
    displayError(eventName, 'Event Name is required');
    isValid = false;
  } else {
    removeError(eventName);
  }

  // Validate Event Description
  var eventDescription = document.getElementById('eventDescription');
  if (eventDescription.value.trim() === '') {
    displayError(eventDescription, 'Event Description is required');
    isValid = false;
  } else {
    removeError(eventDescription);
  }

  // Validate Event Poster
  var eventPoster = document.getElementById('eventposter');
  if (!eventPoster.files || eventPoster.files.length === 0) {
    displayError(eventPoster, 'Event Poster is required');
    isValid = false;
  } else {
    removeError(eventPoster);
  }

  // Add similar blocks for other fields

  return isValid;
}

function displayError(element, errorMessage) {
  element.classList.add('error'); // Add 'error' class to the input field for red border

  var errorElement = document.getElementById(element.id + 'Error');
  errorElement.textContent = errorMessage;
  errorElement.style.color = 'red'; // Set red color for the error message
}

function removeError(element) {
  element.classList.remove('error'); // Remove 'error' class to remove red border

  var errorElement = document.getElementById(element.id + 'Error');
  errorElement.textContent = '';
}

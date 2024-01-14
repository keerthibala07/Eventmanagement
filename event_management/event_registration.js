var sections = ['over', 'events-columns', 'schedule', 'contact'];

function showSection(sectionId) {
    hideAllSections();
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}
function hideAllSections() {
    sections.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function showOverview() {
    showSection('over');
}

function showEvents() {
    showSection('events-columns');
    populateEvents(); // Populate events content if needed
}

function showSchedule() {
    showSection('schedule');
}

function showContact() {
    showSection('contact');
}

function populateEvents() {
    var eventsColumns = document.getElementById('events-columns');
    // Clear existing content
    eventsColumns.innerHTML = '';

    // Create a single column for both technical and non-technical events
    var allEventsColumn = document.createElement('div');
    allEventsColumn.classList.add('nav-column');
    allEventsColumn.innerHTML = '<h4>Technical Events</h4>' +
        '<ul>' +
        '   <li>Technical Paper Presentation</li><br>' +
        '   <li>Coding Competition</li>' +
        '</ul>' +
        '<h4>Non-Technical Events</h4>' +
        '<ul>' +
        '   <li>Poster Presentation</li><br>' +
        '   <li>Project Exhibition</li>' +
        '</ul>';

    // Append the single column to eventsColumns
    eventsColumns.appendChild(allEventsColumn);
}
function register() {
  // Add your registration logic here
  alert("Registration logic goes here!");
}

let currentIndex = 0;

  function changeSlide(direction) {
    const slides = document.querySelector('.slide-content');
    const cards = document.querySelectorAll('.card-now');
    const totalSlides = cards.length;

    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
  }

  let stars = 
    document.getElementsByClassName("star");
let op = 
    document.getElementById("output");
 
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
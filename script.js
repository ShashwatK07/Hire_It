const candidates = [
  {
    id: 1,
    name: "John Doe",
    jobRole: "Software Engineer",
    location: "New York",
    image: "./assets/person.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobRole: "Data Analyst",
    location: "San Francisco",
    image: "./assets/person.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    jobRole: "Web Developer",
    location: "Los Angeles",
    image: "./assets/person.png",
  },
  {
    id: 4,
    name: "Emily Brown",
    jobRole: "UX Designer",
    location: "Chicago",
    image: "./assets/person.png",
  },
  {
    id: 5,
    name: "Alex Davis",
    jobRole: "Product Manager",
    location: "Seattle",
    image: "./assets/person.png",
  },
  {
    id: 6,
    name: "Drake",
    jobRole: "Software Engineer",
    location: "New York",
    image: "./assets/person.png",
  },
  {
    id: 7,
    name: "Luffy",
    jobRole: "Software Engineer",
    location: "New York",
    image: "./assets/person.png",
  },
];
const selected = [];

function searchCandidates() {
  const jobRoleInput = document.getElementById("jobRoleInput");
  const locationInput = document.getElementById("locationInput");
  const resultsContainer = document.getElementById("results");

  const jobRoleQuery = jobRoleInput.value.toLowerCase();
  const locationQuery = locationInput.value.toLowerCase();

  resultsContainer.innerHTML = "";

  const filteredCandidates = candidates.filter((candidate) => {
    const jobRole = candidate.jobRole.toLowerCase();
    const location = candidate.location.toLowerCase();

    if (jobRoleQuery && locationQuery) {
      return jobRole.includes(jobRoleQuery) && location.includes(locationQuery);
    } else if (jobRoleQuery) {
      return jobRole.includes(jobRoleQuery);
    } else if (locationQuery) {
      return location.includes(locationQuery);
    }
    return false;
  });

  if (filteredCandidates.length > 0) {
    filteredCandidates.forEach((candidate) => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `
      <div class="card">
      <img src="${candidate.image}" alt="Candidate Image">
      <div class="card-info">
        <h2>${candidate.name}</h2>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
      </div>
      <button onclick="addCandidate('${candidate.id}')">Add</button>
    </div>
    `;

      resultsContainer.appendChild(listItem);
    });
  } else {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "No match found.";
    if (!jobRoleQuery && !locationQuery) {
      messageDiv.textContent = "Find Your Candidate";
    }

    resultsContainer.appendChild(messageDiv);
  }
}
const selectedContainer = document.getElementById("selected");
selectedContainer.innerHTML = "";

if (selected.length == 0) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = "No candidates selected.";
  selectedContainer.appendChild(messageDiv);
} else {
  updateSelectedList();
}

function addCandidate(id) {
  const candidate = candidates.find(
    (candidate) => candidate.id === parseInt(id)
  );
  const selectedCandidate = selected.find(
    (candidate) => candidate.id === parseInt(id)
  );
  if (candidate && !selectedCandidate) {
    selected.push(candidate);
    console.log(selected);
    updateSelectedList();
  }
}

function removeCandidate(id) {
  const selectedCandidate = selected.find(
    (candidate) => candidate.id === parseInt(id)
  );
  if (selectedCandidate) {
    selected.pop(selectedCandidate);
    console.log(selected);
    updateSelectedList();
  }
}

function updateSelectedList() {
  const newList = document.getElementById("selected");
  newList.innerHTML = "";

  if (selected.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No candidate selected yet";
    newList.appendChild(message);
  } else {
    selected.forEach((candidate) => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `
      <div class="card">
      <img src="${candidate.image}" alt="Candidate Image">
      <div class="card-info">
        <h2>${candidate.name}</h2>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
      </div>
      <button style="background-color: red" onclick="removeCandidate('${candidate.id}')">Remove</button>
    </div>
      `;
      newList.appendChild(listItem);
    });
  }
}

document
  .getElementById("jobRoleInput")
  .addEventListener("input", searchCandidates);
document
  .getElementById("locationInput")
  .addEventListener("input", searchCandidates);

window.addEventListener("load", searchCandidates);

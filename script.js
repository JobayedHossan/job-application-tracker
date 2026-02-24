// Added job data array in JavaScript
const jobs = [
    { id: 1, company: "Google", position: "Frontend Developer", status: "all" },
    { id: 2, company: "Microsoft", position: "Backend Engineer", status: "all" },
    { id: 3, company: "Amazon", position: "DevOps Engineer", status: "all" },
    { id: 4, company: "Meta", position: "UI Designer", status: "all" },
    { id: 5, company: "Tesla", position: "Software Engineer", status: "all" },
    { id: 6, company: "Netflix", position: "Full Stack Developer", status: "all" },
    { id: 7, company: "Spotify", position: "Mobile Developer", status: "all" },
    { id: 8, company: "Adobe", position: "QA Engineer", status: "all" }
];

// implemented tab filtering functionality

const jobsContainer = document.getElementById("jobsContainer");
const tabCount = document.getElementById("tabCount");

let currentTab = "all";

function renderJobs() {
    jobsContainer.innerHTML = "";

    const filteredJobs = jobs.filter(job =>
        currentTab === "all" || job.status === currentTab
    );

    tabCount.innerText = filteredJobs.length;

    filteredJobs.forEach(job => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${job.position}</h3>
            <p>${job.company}</p>

            <button onclick="updateStatus(${job.id}, 'interview')">
                Interview
            </button>

            <button onclick="updateStatus(${job.id}, 'rejected')">
                Rejected
            </button>

            <!-- Delete Button Added -->
            <button onclick="deleteJob(${job.id})">
                Delete
            </button>
        `;

        jobsContainer.appendChild(div);
    });
}

document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        currentTab = button.dataset.tab;
        renderJobs();
    });
});

// Added interview and rejected toggle feature
function updateStatus(id, status) {
    const selectedJob = jobs.find(job => job.id === id);
    selectedJob.status = status;
    renderJobs();
}

// Implemented delete job functionality
function deleteJob(id) {

    // Find job index
    const index = jobs.findIndex(job => job.id === id);

    // Remove job from array
    jobs.splice(index, 1);

    // Re-render UI
    renderJobs();
}

renderJobs();
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

renderJobs();
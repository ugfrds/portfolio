
// Data for projects
const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "A creative description of Project 1.",
        image: "project1.jpg",
        thumbnail: "project1-thumb.jpg",
        link: "project1.html"
    },
    {
        id: 2,
        title: "Project 2",
        description: "A creative description of Project 2.",
        image: "project2.jpg",
        thumbnail: "project2-thumb.jpg",
        link: "project2.html"
    },
    {
        id: 3,
        title: "Project 3",
        description: "A creative description of Project 3.",
        image: "project3.jpg",
        thumbnail: "project3-thumb.jpg",
        link: "project3.html"
    },
    {
        id: 4,
        title: "Project 4",
        description: "A creative description of Project 4.",
        image: "project4.jpg",
        thumbnail: "project4-thumb.jpg",
        link: "project4.html"
    }
];

// Function to populate the projects grid
function populateProjectsGrid() {
    const projectsGrid = document.getElementById("projects-grid");

    projectsData.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";
        projectItem.onclick = () => location.href = project.link;

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="hover-overlay"><span>View Project</span></div>
            <div class="description">${project.description}</div>
        `;

        projectsGrid.appendChild(projectItem);
    });
}

// Function to populate the sidebar
function populateSidebar() {
    const sidebar = document.getElementById("sidebar");

    // Insert the latest projects
    const latestProjectsContainer = document.createElement("div");
    latestProjectsContainer.innerHTML = "<h2>Latest Projects</h2>";

    projectsData.slice(0, 3).forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}">
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        latestProjectsContainer.appendChild(projectCard);
    });

    // Add the CTA
    const cta = document.createElement("div");
    cta.className = "cta";
    cta.innerHTML = `<a href="contact.html">Hire Me</a>`;

    // Append everything to the sidebar
    sidebar.innerHTML = "";
    sidebar.appendChild(latestProjectsContainer);
    sidebar.appendChild(cta);
}

// Initialize the page content
document.addEventListener("DOMContentLoaded", () => {
    populateProjectsGrid();
    populateSidebar();
});


// Data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        author: "Jane Doe",
        date: "November 17, 2024",
        content: `
            <p>JavaScript closures are a powerful feature that allow a function to retain access to variables from its lexical scope, even after the parent function has finished executing.</p>
            <h2>Why Are Closures Important?</h2>
            <p>Closures allow for the creation of private variables and functions, which helps in encapsulation and reducing unintended interference between different parts of your code.</p>
            <img src="js-closures.png" alt="JavaScript Closures Example">
            <p>Using closures effectively can lead to cleaner code and improved performance in your applications.</p>
        `,
        tags: ["JavaScript", "Programming", "WebDevelopment", "Closures"]
    },
    {
        id: 2,
        title: "Mastering React in 2024",
        author: "John Smith",
        date: "October 5, 2024",
        content: `
            <p>React is one of the most popular libraries for building modern web applications. In 2024, mastering React means understanding its fundamentals as well as new features like Server Components and Suspense.</p>
            <img src="react-master.png" alt="React Mastery Example">
            <p>This post will guide you through the key aspects of React, from setting up a project to deploying it efficiently.</p>
        `,
        tags: ["React", "Frontend", "JavaScript", "WebDevelopment"]
    },
    {
        id: 3,
        title: "10 CSS Tricks You Should Know",
        author: "Jane Doe",
        date: "September 22, 2024",
        content: `
            <p>CSS is the backbone of beautiful web design. Here are 10 tricks that can help you create stunning layouts and improve your workflow.</p>
            <img src="css-tricks.png" alt="CSS Tricks Example">
            <p>From Flexbox to Grid, these tricks will make your life as a developer much easier.</p>
        `,
        tags: ["CSS", "WebDesign", "Frontend", "Tips"]
    }
];

// Populate Sidebar Posts
function populateSidebarPosts() {
    const latestPostsList = document.querySelector(".sidebar section:nth-child(2) ul");
    const popularPostsList = document.querySelector(".sidebar section:nth-child(3) ul");

    blogPosts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" data-id="${post.id}">${post.title}</a>`;
        latestPostsList.appendChild(listItem);

        // Clone for Popular Posts
        const popularItem = listItem.cloneNode(true);
        popularPostsList.appendChild(popularItem);
    });
}

// Update Main Content
function updateMainContent(postId) {
    const post = blogPosts.find(p => p.id === parseInt(postId));

    if (post) {
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = `
            <h1>${post.title}</h1>
            <p class="meta">By <strong>${post.author}</strong> | Published on <em>${post.date}</em></p>
            ${post.content}
            <div class="tags">
                ${post.tags.map(tag => `<span>#${tag}</span>`).join("")}
            </div>
        `;
    }
}

// Search Functionality
function searchPosts(query) {
    const searchResults = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );

    const latestPostsList = document.querySelector(".sidebar section:nth-child(2) ul");
    latestPostsList.innerHTML = ""; // Clear the list

    searchResults.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" data-id="${post.id}">${post.title}</a>`;
        latestPostsList.appendChild(listItem);
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Populate Sidebar Posts
    populateSidebarPosts();

    // Handle Post Clicks
    document.querySelector(".sidebar").addEventListener("click", e => {
        if (e.target.tagName === "A" && e.target.dataset.id) {
            e.preventDefault();
            updateMainContent(e.target.dataset.id);
        }
    });

    // Handle Search Input
    const searchBox = document.querySelector(".search-box input");
    searchBox.addEventListener("input", e => {
        searchPosts(e.target.value);
    });
});


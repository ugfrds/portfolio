
const projects = [
    { name: "Restaurant POS", background: "url('../imgs/pos.jpg')" },
    { name: "Gadgets Shop Website", background: "url('../imgs/code.jpg')" },
    { name: "Dating Website", background: "url('../imgs/date.jpg')" },
    { name: "Trade Wisphers", background: "url('../imgs/tradewhispers.png')" },
    { name: "Gadgets Shop Website", background: "url('../imgs/code.jpg')" },
    { name: "Gadgets Shop Website", background: "url('../imgs/code.jpg')" },
    
    // Add more projects as needed
    ]; 
    
    const projectCards = document.querySelectorAll(".p-card");
    
    projectCards.forEach((card, index) => {
    // Check if a corresponding project exists in the array
    if (projects[index]) {
    // Update the project name inside each `.p-details` element
    card.querySelector(".p-details p").textContent = projects[index].name;
    
        // Update the background of the `.p-card` element
        card.style.backgroundImage = projects[index].background;
        card.style.backgroundSize = "cover"; // Optional, to ensure the image covers the whole card
    
    } 
    });
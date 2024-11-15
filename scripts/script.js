

const projects = [
{ name: "Restaurant POS", background: "url('./code.jpg')" },
{ name: "Gadgets Shop Website", background: "url('./code.jpg')" },
{ name: "Dating Website", background: "url('./date.jpg')" },
{ name: "Trade Wisphers", background: "url('./code.jpg')" },
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



document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    
        question.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
    
          // Close all FAQs
          faqItems.forEach(i => {
            i.classList.remove("open");
            i.querySelector(".faq-answer").style.maxHeight = null;
            i.querySelector(".faq-icon").textContent = "+";
          });
    
          // Toggle current FAQ
          if (!isOpen) {
            item.classList.add("open");
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.querySelector(".faq-icon").textContent = "−";
          }
        });
    
    });
    });
   
    


// Select the hamburger button and nav-links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add an event listener for click events
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on nav-links
  navLinks.classList.toggle('active');
});



// Select all elements with the class 'cta-button'
const buttons = document.querySelectorAll(".cta-button");

// Loop through each button and add an event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.location.href = "contact.html"; // Redirect to contact page
  });
});

// Select all elements with the class 's-cta' for Learn More
const Sbuttons = document.querySelectorAll(".s-cta");

// Loop through each button and add an event listener
Sbuttons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.location.href = "services.html"; 
  });
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
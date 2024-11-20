   
    
//     document.getElementById('contactForm').addEventListener('submit', function (event) {
//       event.preventDefault(); // Prevent default form submission
  
//       // Get form inputs
//       const name = document.getElementById('name').value.trim();
//       const email = document.getElementById('email').value.trim();
//       const phone = document.getElementById('phone').value.trim();
//       const subject = document.getElementById('subject').value.trim();
//       const message = document.getElementById('message').value.trim();
  
//       // Clear previous errors
//       const errorDiv = document.getElementById('form-errors');
//       let isValid = true;
//       let errors = [];
  
//       // Minimum word limits
//       const minWords = {
//           name: 2,
//           subject: 3,
//           message: 10,
//       };
  
//       // Validate name field
//       if (name.split(' ').length < minWords.name) {
//           isValid = false;
//           errors.push(`Name must have at least ${minWords.name} words.`);
//       }
  
//       // Validate email field
//       if (!validateEmail(email)) {
//           isValid = false;
//           errors.push('A valid email is required.');
//       }
  
//       // Validate phone field
//       if (!validatePhone(phone)) {
//           isValid = false;
//           errors.push('A valid phone number is required.');
//       }
  
//       // Validate subject field
//       if (subject.split(' ').length < minWords.subject) {
//           isValid = false;
//           errors.push(`Subject must have at least ${minWords.subject} words.`);
//       }
  
//       // Validate message field
//       if (message.split(' ').length < minWords.message) {
//           isValid = false;
//           errors.push(`Message must have at least ${minWords.message} words.`);
//       }
  
//       // Display errors or proceed
//       if (!isValid) {
//           errorDiv.innerHTML = errors.join('<br>');
//       } else {
//           alert('Form submitted successfully!');
//           this.reset(); // Clear the form
//       }
//   });
  
//   // Helper functions
//   function validateEmail(email) {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailPattern.test(email);
//   }
  
//   function validatePhone(phone) {
//       const phonePattern = /^[0-9]{10,15}$/; // Adjust regex based on expected format
//       return phonePattern.test(phone);
//   }
  
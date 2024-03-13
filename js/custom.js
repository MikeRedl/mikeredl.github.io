

$(document).ready(function () {
     // Define the URL of your Azure Function
     const functionUrl = 'https://websiteform.azurewebsites.net/api/HttpTrigger1';

     // Define the data you want to send
     const requestData = {
          add: 1
     };

     // Make the HTTP request
     fetch(functionUrl, {
          method: 'POST', // Assuming your function is expecting a POST request
          headers: {
               'Content-Type': 'application/json'
               // If your function requires an API key or authentication, add it here
          },
          body: JSON.stringify(requestData) // Convert the JavaScript object to a JSON string
     })
      


   




     let isClicked = false;

     $('#HomeClick2').click(function () {
          window.scrollTo(0, 0);
     });
     $('#HomeClick').click(function () {
          window.scrollTo(0, 0);
     });
     $('#exprt').click(function () {
          document.getElementById('expertiseSection').scrollIntoView({ block: 'start' });
     });
     $('#expr').click(function () {
          document.getElementById('experienceSection').scrollIntoView({ block: 'start' });
     });
     $('#qual').click(function () {
          document.getElementById('qualificationSection').scrollIntoView({ block: 'start' });
     });
     $('#exprt2').click(function () {
          document.getElementById('expertiseSection').scrollIntoView({ block: 'start' });
     });
     $('#expr2').click(function () {
          document.getElementById('experienceSection').scrollIntoView({ block: 'start' });
     });
     $('#qual2').click(function () {
          document.getElementById('qualificationSection').scrollIntoView({ block: 'start' });
     });

     $('.HamburgerIcon').click(() => {
          if (isClicked) {
               $('.mobileNav').css("display", "none");
               isClicked = false;
          }
          else {
               $('.mobileNav').css("display", "block");
               isClicked = true;
          }
     });



});

function showContactForm() {
     document.getElementById('contactForm').reset();
     document.getElementById('contactFormModal').style.display = 'block';
 }
 
 function cancelForm() {
     document.getElementById('contactFormModal').style.display = 'none';
     document.getElementById('thankYouMessageContainer').style.height = '0px';
     document.getElementById('thankYouMessage').style.display = 'none';
 }
 
 document.getElementById('contactForm').onsubmit = function(e) {
     e.preventDefault(); 
     submitForm();
 };
 
 function submitForm() {
     event.preventDefault();
     document.getElementById('contactFormModal').style.display = 'none';
     document.getElementById('thankYouMessageContainer').style.height = '750px';
     document.getElementById('thankYouMessage').style.display = 'block';
 }
 
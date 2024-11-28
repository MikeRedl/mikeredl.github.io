

$(document).ready(function () {
     const functionUrl = 'https://websiteform.azurewebsites.net/api/HttpTrigger1';

     const requestData = {
          add: 1
     };

     fetch(functionUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
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
     const functionUrl = 'https://websiteform.azurewebsites.net/api/HttpTrigger2';

     const requestData = {
          Betreff: document.getElementById('subject').value,
          Anschreiben: document.getElementById('description').value,
          Vorname: document.getElementById('vorname').value,
          Nachname: document.getElementById('nachname').value,
          Telefonnummer: document.getElementById('phone').value,
          Email: document.getElementById('email').value,
     };

     fetch(functionUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
     })
      

     document.getElementById('thankYouMessageContainer').style.height = '750px';
     document.getElementById('thankYouMessage').style.display = 'block';
 }
 
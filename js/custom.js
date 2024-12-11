$(document).ready(function () {
     const functionUrl = 'https://websiteform.azurewebsites.net/api/HttpTrigger1';
     const requestData = { add: 1 };
 
     fetch(functionUrl, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(requestData)
     });
 
     let isClicked = false;
 
     $('#HomeClick2, #HomeClick').click(function () {
         window.scrollTo({ top: 0, behavior: 'smooth' });
     });
     $('#exprt').click(function () {
         document.getElementById('expertiseSection').scrollIntoView({ behavior:'smooth'});
     });
     $('#expr').click(function () {
         document.getElementById('experienceSection').scrollIntoView({ behavior:'smooth'});
     });
     $('#qual').click(function () {
         document.getElementById('qualificationSection').scrollIntoView({ behavior:'smooth'});
     });
     $('#exprt2').click(function () {
         document.getElementById('expertiseSection').scrollIntoView({ behavior:'smooth'});
     });
     $('#expr2').click(function () {
         document.getElementById('experienceSection').scrollIntoView({ behavior:'smooth'});
     });
     $('#qual2').click(function () {
         document.getElementById('qualificationSection').scrollIntoView({ behavior:'smooth'});
     });
 
     $('.HamburgerIcon').click(() => {
         if (isClicked) {
             $('.mobileNav').hide();
             isClicked = false;
         } else {
             $('.mobileNav').show();
             isClicked = true;
         }
     });
 
     // Fade-in animations
     function initElements(elements) {
         elements.forEach(el => {
             el.style.opacity = '0';
             el.style.transform = 'translateY(60px)';
             el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
         });
     }
 
     function setupFadeInIndividually(className) {
         const elements = Array.from(document.querySelectorAll(className));
         if (elements.length === 0) return;
         let threshold = 0.2;
 
         initElements(elements);
 
         const observer = new IntersectionObserver((entries, obs) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     const el = entry.target;
                     el.style.opacity = '1';
                     el.style.transform = 'translateY(0)';
                     obs.unobserve(el);
                 }
             });
         }, {
             threshold: threshold
         });
 
         elements.forEach(el => observer.observe(el));
     }
 
     setupFadeInIndividually('.myExpertiseGridDiv');
     setupFadeInIndividually('.projectsGridDiv');
     setupFadeInIndividually('.aboutMeGrid1div');
     setupFadeInIndividually('.qualificationDiv');
     setupFadeInIndividually('.section-heading');
 });
 
 function showContactForm() {
     document.getElementById('contactForm').reset();
     document.getElementById('overlay').style.display = 'block';
     document.getElementById('contactFormModal').style.display = 'block';
 }
 
 function cancelForm() {
     document.getElementById('overlay').style.display = 'none';
     document.getElementById('contactFormModal').style.display = 'none';
     document.getElementById('thankYouMessageContainer').style.display = 'none';
     document.getElementById('thankYouMessage').style.display = 'none';
 }
 
 document.getElementById('contactForm').onsubmit = function (e) {
     e.preventDefault();
     submitForm();
 };
 
 function submitForm() {
     event.preventDefault();
     document.getElementById('overlay').style.display = 'none';
     document.getElementById('contactFormModal').style.display = 'none';
 
     const functionUrl2 = 'https://websiteform.azurewebsites.net/api/HttpTrigger2';
     const requestData = {
         Betreff: document.getElementById('subject').value,
         Anschreiben: document.getElementById('description').value,
         Vorname: document.getElementById('vorname').value,
         Nachname: document.getElementById('nachname').value,
         Firma: document.getElementById('firma').value,
         Telefonnummer: document.getElementById('phone').value,
         Email: document.getElementById('email').value,
     };
 
     fetch(functionUrl2, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(requestData)
     });
 
     document.getElementById('thankYouMessageContainer').style.display = 'block';
     document.getElementById('thankYouMessage').style.display = 'inline-block';
 }
 
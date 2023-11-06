

$(document).ready(function () {

     let isClicked = false;

     $('#HomeClick2').click(function () {
          window.scrollTo(0,0);
     });
     $('#HomeClick').click(function () {
          window.scrollTo(0,0);
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

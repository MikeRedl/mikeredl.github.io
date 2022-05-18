

$(document).ready(function() {
    
    
    $('.fadein').each( function(i){
    
                 
    
             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    
             var bottom_of_window = $(window).scrollTop() + $(window).height();
    
                 
    
            if( bottom_of_window > bottom_of_element ){
    
                $(this).animate({'opacity':'1'},1000);
    
            }
    
                 
    
    });
        
    /* $(window).scroll( function(){
        $('.fadein2').each( function(i){
    
                 
    
           //var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            //var bottom_of_window = $(window).scrollTop() + $(window).height()/5;

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop()+$(window).outerHeight()/2.7;
   
                
            setTimeout(
                function() 
                {
                  //do something special
                }, 5000);
           if( bottom_of_window > bottom_of_element ){
   
               $(this).animate({'opacity':'1'},1);
   
           }
           else{
            $(this).animate({'opacity':'0'},1);
           }
          
   
                
   
              });
        


             
     });*/
    

     $('#Techno').click(function(){
        document.getElementById('Technologies').scrollIntoView({block: 'center'});
          }); 
    $('#HomeClick').click(function(){
         document.getElementById('Homeview').scrollIntoView({block: 'center'});
         }); 
     $('#WorkE').click(function(){
         document.getElementById('WorkExperience').scrollIntoView({block: 'center'});
         });       
    $('#education').click(function(){
        document.getElementById('Education').scrollIntoView({block: 'center'});
        }); 
    });



$(document).ready(function() {
    
    
    $('.fadein').each( function(i){
    
                 
    
             var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    
             var bottom_of_window = $(window).scrollTop() + $(window).height();
    
                 
    
            if( bottom_of_window > bottom_of_element ){
    
                $(this).animate({'opacity':'1'},1000);
    
            }
    
                 
    
    });
        
     $(window).scroll( function(){
        $('.fadein2').each( function(i){
    
                 
    
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
   
            var bottom_of_window = $(window).scrollTop() + $(window).height()/2;
   
                
   
           if( bottom_of_window > bottom_of_element ){
   
               $(this).animate({'opacity':'1'},1000);
   
           }
   
                
   
              });
        



             
     });
    

     $('#Techno').click(function(){
        document.getElementById('Technologies').scrollIntoView({block: 'center'});
          }) 
       

    });

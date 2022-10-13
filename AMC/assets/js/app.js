$(function() {
    
   /*ACORDION*/
$("[data-collapse]").on("click", function(event) { event.preventDefault();

   var $this = $(this),
        blockId = $this.data('collapse');
                                                  
   $this.toggleClass("active");   
  });


                
 
                                                           
                                                          
});    
                
                    
 $('.count').each(function(){
   $(this).prop('Counter',0).animate({
       Counter: $(this).text()
     
 }, {
     duration: 10000,
     easing:'swing',
     step:function(now){
         $(this).text(Math.ceil(now));
     }
 });
});
    

const formWrap = document.getElementById('form-wrap');

function openForm() {
    formWrap.classList.add('open');
}












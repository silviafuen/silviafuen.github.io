
$(document).ready(function(){
  $("button").on("click", function(){
    $(this).closest(".language").find(".hidden").slideToggle();
  });
  $( function() {
    $( "#tabs" ).tabs();
  } );

});

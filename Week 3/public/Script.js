$(document).ready(function(){
    // Initialize Materialize components
    $('.sidenav').sidenav();
    $('form').on('submit', function(e){
        e.preventDefault();
        M.toast({html: 'Form submitted!'});
    });
});
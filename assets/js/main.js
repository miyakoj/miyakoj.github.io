jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    if (window.innerWidth > 767) {
        $('#summary-bookmark, #skills-bookmark').hide();
    }
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});
'use strict';
$('.menu-toggle').on('click', function(){
    if($(window).width() < 768){
        $('nav ul').slideToggle().toggleClass('expanded');
    }
    return false;
});
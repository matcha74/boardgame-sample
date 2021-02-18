$(function() {
    const hum = $('.menu-icon, .close')
    const nav = $('.sp-nav')
    hum.on('click', function(){
       nav.toggleClass('toggle');
    });
 });
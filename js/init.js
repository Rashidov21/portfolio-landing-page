(function($) {
    $(function() {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        direction: 'ttb',
        height: '30rem',
        wheel: true,
        autoplay: true,
        // type: 'fade',
        // rewind: true,
    });

    splide.mount();
});

var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
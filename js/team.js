$(document).ready(() => {
    /* Mobile only sliders */
    if ($(window).width() < 768) {
        $('#teamSlider').slick({
            infinite: false,
            prevArrow: $('#teamControls .prev')[0],
            nextArrow: $('#teamControls .next')[0],
            speed: 1000,
        })
    }
});

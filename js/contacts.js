$(document).ready(() => {
    $('#certificatesSlider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#reviews-cards .sliderControls .prev')[0],
        nextArrow: $('#reviews-cards .sliderControls .next')[0],
        speed: 1000
    });

    $('#reviewsSlider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#reviewsControls .prev')[0],
        nextArrow: $('#reviewsControls .next')[0],
        speed: 1000
    });

    if ($(window).width() < 768) {
        $('#reviewsSlider').slick('unslick');

        $('#textReviewsSlider').slick({
            infinite: false,
            prevArrow: $('#textReviewsControls .prev')[0],
            nextArrow: $('#textReviewsControls .next')[0],
            speed: 1000,
        });
        $('#darkReviewsSlider').slick({
            infinite: false,
            prevArrow: $('#darkReviewsControls .prev')[0],
            nextArrow: $('#darkReviewsControls .next')[0],
            speed: 1000,
        });
        $('#lightReviewsSlider').slick({
            infinite: false,
            prevArrow: $('#lightReviewsControls .prev')[0],
            nextArrow: $('#lightReviewsControls .next')[0],
            speed: 1000,
        });
    }
});

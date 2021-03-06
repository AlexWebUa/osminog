$(document).ready(() => {
    /* Advantages */
    $('#advantagesSlider').slick({
        infinite: false,
        slidesToShow: 1,
        prevArrow: $('#advantagesControls .prev')[0],
        nextArrow: $('#advantagesControls .next')[0],
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000
    });

    $('#advantagesSlider').on('beforeChange', () => {
        if ($('#dots').css('display') !== 'none') {
            let dots = $('#dots');
            let currentDot = dots.find('.dot.current');
            let index = currentDot.data('index');
            if (index < 4) index++;
            else index = 1;
            let nextDot = dots.find(`[data-index=${index}]`);
            currentDot.removeClass('current');
            nextDot.addClass('current');
        }
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
})


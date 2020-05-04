$(document).ready(() => {
    let formIndicators = $('#form .form-wrapper .footer .form-indicator li');

    $('#certificatesSlider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#reviews-cards .sliderControls .prev')[0],
        nextArrow: $('#reviews-cards .sliderControls .next')[0],
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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

        $('#team .members').slick({
            infinite: false,
            prevArrow: $('#teamControls .prev')[0],
            nextArrow: $('#teamControls .next')[0],
            speed: 1000,
        })

        $('#advantages .advantages').slick({
            infinite: false,
            adaptiveHeight: true,
            prevArrow: $('#advantagesControls .prev')[0],
            nextArrow: $('#advantagesControls .next')[0],
            speed: 1000,
        })
    }

    $('#_quiz1Next').on('click', () => {
        let form = document.getElementById('_quiz1Form');
        collectFormData(form);
        animateCSS('#form .form-1', 'fadeOut', clearStyles, ()=>{
            $('#form .form-1').css('display', 'none');
            $('#form .form-2').css('display', 'block');
            animateCSS('#form .form-2', 'fadeIn', clearStyles);
            $(formIndicators[0]).removeClass('active');
            $(formIndicators[1]).addClass('active');
        })
    });

    $('#_quiz2Next').on('click', () => {
        let form = document.getElementById('_quiz2Form');
        collectFormData(form);
        animateCSS('#form .form-2', 'fadeOut', clearStyles, ()=>{
            $('#form .form-2').css('display', 'none');
            $('#form .form-3').css('display', 'block');
            animateCSS('#form .form-3', 'fadeIn', clearStyles);
            $(formIndicators[1]).removeClass('active');
            $(formIndicators[2]).addClass('active');
        })
    });
    $('#_quiz3Next').on('click', () => {
        let form = document.getElementById('_quiz3Form');
        collectFormData(form);
        animateCSS('#form .form-3', 'fadeOut', clearStyles, ()=>{
            $('#form .form-3').css('display', 'none');
            $('#form .form-4').css('display', 'block');
            animateCSS('#form .form-3', 'fadeIn', clearStyles);
            $(formIndicators[2]).removeClass('active');
            $(formIndicators[3]).addClass('active');
        })
    });

    $('#_quiz2Back').on('click', () => {
        animateCSS('#form .form-2', 'fadeOut', clearStyles, ()=>{
            $('#form .form-2').css('display', 'none');
            $('#form .form-1').css('display', 'block');
            animateCSS('#form .form-1', 'fadeIn', clearStyles);
            $(formIndicators[1]).removeClass('active');
            $(formIndicators[0]).addClass('active');
        })
    });
    $('#_quiz3Back').on('click', () => {
        animateCSS('#form .form-3', 'fadeOut', clearStyles, ()=>{
            $('#form .form-3').css('display', 'none');
            $('#form .form-2').css('display', 'block');
            animateCSS('#form .form-2', 'fadeIn', clearStyles);
            $(formIndicators[2]).removeClass('active');
            $(formIndicators[1]).addClass('active');
        })
    });

    $('#_quiz4Back').on('click', () => {
        animateCSS('#form .form-4', 'fadeOut', clearStyles, ()=>{
            $('#form .form-4').css('display', 'none');
            $('#form .form-3').css('display', 'block');
            animateCSS('#form .form-3', 'fadeIn', clearStyles);
            $(formIndicators[3]).removeClass('active');
            $(formIndicators[2]).addClass('active');
        })
    });

    $('#_quiz4Send').on('click', () => {
        let form = document.getElementById('_quiz4Form');
        collectFormData(form);
        console.log(formsData);
    });

});

/* Mobile hack for correct vh calculation */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/* Functions */
let formsData = {};

function collectFormData(form) {
    let inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let name = inputs[i].id;
        if (inputs[i].type === 'radio') formsData[name] = inputs[i].checked;
        else formsData[name] = inputs[i].value;
    }
}

function sticky_header() {
    if ($(window).width() >= 768) {
        if ($(window).scrollTop() > 1) {
            if (!$("header").hasClass('header-fixed')) {
                $("header").addClass("header-fixed");
                $("header .navbar-brand img").attr('src', 'assets/img/logo_white.png');
                /*$(".navbar-collapse .icons .instagram-icon a img").attr('src', 'assets/img/instagram_white.png');
                $(".navbar-collapse .icons .phone-icon a img").attr('src', 'assets/img/phone_white.png');*/
            } else return;
        } else {
            if ($("header").hasClass('header-fixed')) {
                $("header").removeClass("header-fixed");
                $("header .navbar-brand img").attr('src', 'assets/img/logo.png');
                /*$(".navbar-collapse .icons .instagram-icon a img").attr('src', 'assets/img/instagram.png');
                $(".navbar-collapse .icons .phone-icon a img").attr('src', 'assets/img/phone.png');*/
            } else return;
        }
    } else {
        if (!$("header").hasClass('header-fixed')) {
            $("header").addClass("header-fixed");
            $("header .navbar-brand img").attr('src', 'assets/img/logo_white.png');
            /*$(".navbar-collapse .icons .instagram-icon a img").attr('src', 'assets/img/instagram_white.png');
            $(".navbar-collapse .icons .phone-icon a img").attr('src', 'assets/img/phone_white.png');*/
        } else return;
    }
}

$(window).on('load', () => {
    sticky_header();
    $(window).on("scroll", function () {
        sticky_header();
    });
});

/* Quiz buttons */
$('#quiz1Next').on('click', () => {
    let form = document.getElementById('quiz1Form');
    collectFormData(form);
    $('#quiz1').modal('hide');
    $('#quiz2').modal('show');
});
$('#quiz2Next').on('click', () => {
    let form = document.getElementById('quiz2Form');
    collectFormData(form);
    $('#quiz2').modal('hide');
    $('#quiz3').modal('show');
});
$('#quiz3Next').on('click', () => {
    let form = document.getElementById('quiz3Form');
    collectFormData(form);
    $('#quiz3').modal('hide');
    $('#quiz4').modal('show');
});

$('#quiz2Back').on('click', () => {
    $('#quiz2').modal('hide');
    $('#quiz1').modal('show');
});
$('#quiz3Back').on('click', () => {
    $('#quiz3').modal('hide');
    $('#quiz2').modal('show');
});

$('#quiz4Send').on('click', () => {
    let form = document.getElementById('quiz4Form');
    collectFormData(form);
    console.log(formsData);
});

/* Events */

// Header dropdowns
$(document).on('click', (e) => {
    if (e.target === $('#dropdown-menu .close')[0])
        $('#dropdown-menu').css('display', 'none');

    else if (e.target === document.getElementById('dropdown-menu') || (e.target === document.getElementById('dropdown-link') && $('#dropdown-menu').css('display') === 'none'))
        $('#dropdown-menu').css('display', 'flex');

    else
        $('#dropdown-menu').css('display', 'none');
});


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

    /* Mobile only sliders */
    if ($(window).width() < 768) {
        $('#aboutSlider').slick({
            infinite: false,
            rows: 2,
            slidesPerRow: 1,
            prevArrow: $('#aboutControls .prev')[0],
            nextArrow: $('#aboutControls .next')[0],
            speed: 1000
        });

        $('#portfolioSlider').slick({
            infinite: false,
            prevArrow: $('#portfolioControls .prev')[0],
            nextArrow: $('#portfolioControls .next')[0],
            speed: 1000
        });

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


        /* Footer */
        $('#companyCollapse').collapse('hide');
        $('#siteMakingCollapse').collapse('hide');
        $('#forClientsCollapse').collapse('hide');

        $('#companyHeading').on('click', () => {
            $('#companyCollapse').collapse('toggle');
        });

        $('#siteMakingHeading').on('click', () => {
            $('#siteMakingCollapse').collapse('toggle');
        });

        $('#forClientsHeading').on('click', () => {
            $('#forClientsCollapse').collapse('toggle');
        });
    }
});

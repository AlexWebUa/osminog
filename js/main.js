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
    if ($(window).scrollTop() > 1) {
        if (!$("header").hasClass('header-fixed')) {
            $("header").addClass("header-fixed");
            $("header .navbar-brand img").attr('src', 'assets/img/logo_white.png');
        } else return;
    } else {
        if ($("header").hasClass('header-fixed')) {
            $("header").removeClass("header-fixed");
            $("header .navbar-brand img").attr('src', 'assets/img/logo.png');
        } else return;
    }
}

function animateCSS(element, animationName, startEvent, endEvent) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof endEvent === 'function') endEvent(node)
    }

    function handleAnimationStart() {
        if (typeof startEvent === 'function') startEvent(node)
    }

    node.addEventListener('animationstart', handleAnimationStart)
    node.addEventListener('animationend', handleAnimationEnd)
}

function clearStyles(el) {
    el.style = '';
}

$(window).on('load', () => {
    sticky_header();
    $(window).on("scroll", function () {
        sticky_header();
    });

    animateCSS('#page-header .fill','fadeInDown', clearStyles);
    animateCSS('#page-header .outline','fadeInUp', clearStyles,()=>{
        animateCSS('#page-header .pink-line','fadeInRight', clearStyles);
        if($('#page-header .white-line').length) animateCSS('#page-header .white-line','fadeInLeft', clearStyles);
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

$('#aboutSlide1').on('wowStart', ()=>{
    let animateAbout = function() {
        animateCSS('#aboutSlide2', 'fadeIn', clearStyles, () => {
            animateCSS('#aboutSlide3', 'fadeIn', clearStyles, () => {
                animateCSS('#aboutSlide4', 'fadeIn', clearStyles, () => {
                    animateCSS('#aboutSlide5', 'fadeIn', clearStyles, () => {
                        animateCSS('#aboutSlide6', 'fadeIn', clearStyles);
                    });
                });
            });
        })
    }
    setTimeout(animateAbout, 1000);
});

$('#portfolio .work-1 img').on('wowStart', ()=>{
    let animatePortfolio;
    if ($(window).width() < 768) {
        animatePortfolio = function () {
            $('#portfolio .work-2 img').css('visibility', '');
            $('#portfolio .work-2 .work-description-wrap').css('visibility', '');
        }
    } else {
        animatePortfolio = function() {
            animateCSS('#portfolio .work-2 img', 'fadeInRight', ()=>{
                $('#portfolio .work-2 img').css('visibility', '');
                animateCSS('#portfolio .work-2 .work-description-wrap', 'fadeInLeft', clearStyles);
            } )
        }
    }
   setTimeout(animatePortfolio, 1000);
});

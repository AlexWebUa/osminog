$(document).ready(()=>{
    let tabs = $('.tabs .tab');
    if ($(window).width() < 767) tabs = $('.tabs .mobile-only .tab');
    let cards = $('.cards .row');
    let footers = $('.footer .row');

    $(tabs).on('click', (e)=>{
        let activeTab = tabs.closest('.active')[0];
        let activeCard = cards.closest('.active')[0];
        let activeFooter = footers.closest('.active')[0];
        let targetTab = e.target;
        let targetCard = $(`#card-${targetTab.id}`)[0];
        let targetFooter = $(`#footer-${targetTab.id}`)[0];
        if (activeTab === targetTab) return;
        activeTab.classList.remove('active');
        targetTab.classList.add('active');

        animateCSS(`#${activeCard.id}`, 'fadeOut', clearStyles,(el)=>{
            el.style.display = 'none';
            activeCard.classList.remove('active');
            $(`#${activeCard.id}`).slick('unslick');

            targetCard.classList.add('active');
            animateCSS(`#${targetCard.id}`, 'fadeIn');
            targetCard.style.display = 'block';
            $(`#${targetCard.id}`).slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: $(`#${targetTab.id}Controls .prev`)[0],
                nextArrow: $(`#${targetTab.id}Controls .next`)[0],
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            })
        });

        animateCSS(`#${activeFooter.id}`, 'fadeOut', clearStyles, (el)=>{
            el.style.display = 'none';
            activeFooter.classList.remove('active');
            targetFooter.classList.add('active');
            animateCSS(`#${targetFooter.id}`, 'fadeIn');
            targetFooter.style = '';
        });

    })

    $('#card-yandex').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#yandexControls .prev')[0],
        nextArrow: $('#yandexControls .next')[0],
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#video-reviews .video').on('click', ev=> {
        let tag = ev.currentTarget;
        let preview = $(tag).find('.preview');
        let previewHeight = $(preview).height();
        let previewWidth = $(preview).width();
        let videoElement = `<iframe width="${previewWidth}" height="${previewHeight}" src="https://youtu.be/wu3V6ai38Mo"></iframe>`;

        $(tag).empty();
        $(tag).append(videoElement);
    });

    $('#light-reviews .light-reviews').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#lightReviewsControls .prev')[0],
        nextArrow: $('#lightReviewsControls .next')[0],
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })


});

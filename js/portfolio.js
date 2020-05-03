$(document).ready(() => {
    let tabs = $('.tabs .tab');
    if ($(window).width() < 767) tabs = $('.tabs .mobile-only .tab');
    let works = $('.works .row');
    let description = $('.work .description');
    let descriptionHeight = description.outerHeight(true);
    let title = $(description).find('.title');
    let titleHeight = title.outerHeight(true);
    let titleMarginTop = parseInt($('.work .description .title').css('margin-top'));
    let descriptionOffset = descriptionHeight - titleHeight + titleMarginTop;
    let workHeight = $('.work .image-wrapper').height() + titleHeight;

    $(tabs).on('click', (e) => {
        let activeTab = tabs.closest('.active')[0];
        let activeCard = works.closest('.active')[0];
        let targetTab = e.target;
        let targetCard = $(`#works-${targetTab.id}`)[0];
        if (activeTab === targetTab) return;
        activeTab.classList.remove('active');
        targetTab.classList.add('active');

        animateCSS(`#${activeCard.id}`, 'fadeOut', clearStyles, (el) => {
            el.style.display = 'none';
            activeCard.classList.remove('active');
            $(`#${activeCard.id}`).slick('unslick');
            targetCard.classList.add('active');
            $(`#${activeCard.id}Controls`).css('display', 'none');
            $(`#${targetCard.id}Controls`).css('display', '');
            if ($(window).width() < 1200) {
                $(`#${targetCard.id}`).slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: $(`#${targetCard.id}Controls .prev`)[0],
                    nextArrow: $(`#${targetCard.id}Controls .next`)[0],
                    speed: 1000,
                });
            }
            animateCSS(`#${targetCard.id}`, 'fadeIn');
            targetCard.style = '';
        })

    })

    $('.work').css('max-height', `${workHeight}px`);

    $('.work').on('click touch', e => {
        let work = e.currentTarget;
        let description = $(work).find('.description');

        if ($(description).hasClass('expanded') && e.target.tagName !== 'BUTTON') {
            $(description).css('transform', 'translateY(0px)');
            $(description).removeClass('expanded');
        } else {
            $(description).css('transform', `translateY(-${descriptionOffset}px)`);
            $(description).addClass('expanded');
        }
    })

    if ($(window).width() < 1200) {
        $(`#works-landing`).slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(`#works-landingControls .prev`)[0],
            nextArrow: $(`#works-landingControls .next`)[0],
            speed: 1000,
        });
    }
    if ($(window).width() < 992) {
        $('.catalog-list').addClass('collapse');
        $('.catalog .heading').on('click', ev=>{
            console.log(ev);
            // if (!$(ev.target).hasClass('catalog-list')) {
                $('.catalog-list').collapse('toggle');
                $('.catalog').toggleClass('showed');
            // }
        })
    }
});

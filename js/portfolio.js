/*$(".work").on('click touch', e =>{
    let work = e.currentTarget;

    if($(work).hasClass('active')) {
        $(work).removeClass('active');
        $(work).css('height', '');

        let footer = $(work).find('.footer')[0];


        $(footer).css('height', '0px');

        let description = $(work).find('.description')[0];
        $(description).css('margin-top', '');
        footer.style = '';
        $(footer).removeClass('show');

    } else {
        $(work).addClass('active');
        let workHeight = $(work).height();
        $(work).css('height', `${workHeight}px`);

        let description = $(work).find('.description')[0];
        let footer = $(work).find('.footer')[0];

        $(footer).addClass('show');
        let footerOuterHeight = $(footer).outerHeight(true);
        let footerHeight = $(footer).height();
        $(footer).css('height', `0px`);
        $(footer).css('height', `${footerHeight}px`);

        $(description).css('margin-top', `-${footerOuterHeight}px`);
    }
});*/

$(document).ready(()=> {
    let tabs = $('.tabs button');
    let works = $('.works .row');
    let description = $('.work .description');
    let descriptionHeight = description.outerHeight(true);
    let title = $(description).find('.title');
    let titleHeight = title.outerHeight(true);
    let titleMarginTop = parseInt($('.work .description .title').css('margin-top'));
    let descriptionOffset = descriptionHeight - titleHeight + titleMarginTop;
    let workHeight = $('.work .image-wrapper').height() + titleHeight;

    $(tabs).on('click', (e)=>{
        let activeTab = tabs.closest('.active')[0];
        let activeCard = works.closest('.active')[0];
        let targetTab = e.target;
        let targetCard = $(`#works-${targetTab.id}`)[0];
        if (activeTab === targetTab) return;
        activeTab.classList.remove('active');
        targetTab.classList.add('active');

        animateCSS(`#${activeCard.id}`, 'fadeOut', clearStyles,(el)=>{
            el.style.display = 'none';
            activeCard.classList.remove('active');
            targetCard.classList.add('active');
            animateCSS(`#${targetCard.id}`, 'fadeIn');
            targetCard.style = '';
        })

    })

    $('.work').css('max-height', `${workHeight}px`);

    $('.work').on('click touch', e => {
        let work = e.currentTarget;
        let description = $(work).find('.description');

        if($(description).hasClass('expanded') && e.target.tagName !== 'BUTTON') {
            $(description).css('transform', 'translateY(0px)');
            $(description).removeClass('expanded');
        }

        else {
            $(description).css('transform', `translateY(-${descriptionOffset}px)`);
            $(description).addClass('expanded');
        }
    })
});

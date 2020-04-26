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

$(".work").on('click touch', e =>{
    let work = e.currentTarget;
    let footer = $(work).find('.footer')[0];
    $(footer).collapse('toggle');
});

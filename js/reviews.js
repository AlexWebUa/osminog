$(document).ready(()=>{
    let tabs = $('.tabs button');
    let cards = $('.cards .row');
    let footers = $('.footer .row');

    $(tabs).on('click', (e)=>{
        let activeTab = tabs.closest('.active')[0];
        let activeCard = cards.closest('.active')[0];
        let activeFooter = footers.closest('.active')[0];
        let targetTab = e.target;
        let targetCard = $(`#card-${targetTab.id}`)[0];
        let targetFooter = $(`#footer-${targetTab.id}`)[0];

        console.log(`activeTab - ${activeTab.id}, activeCard - ${activeCard.id}, activeFooter - ${activeFooter.id}`);
        console.log(`targetTab - ${targetTab.id}, targetCard - ${targetCard.id}, targetFooter - ${targetFooter.id}`);


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
                speed: 1000
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
        speed: 1000
    });

    /*$('#card-google').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#googleControls .prev')[0],
        nextArrow: $('#googleControls .next')[0],
        speed: 1000
    });

    $('#card-twogis').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#twogisControls .prev')[0],
        nextArrow: $('#twogisControls .next')[0],
        speed: 1000
    });*/
});

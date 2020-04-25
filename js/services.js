$(document).ready(() => {
    let tabs = $('.tabs button');
    let cards = $('.cards .row');

    $(tabs).on('click', (e)=>{
        let activeTab = tabs.closest('.active')[0];
        let activeCard = cards.closest('.active')[0];
        let targetTab = e.target;
        let targetCard = $(`#card-${targetTab.id}`)[0];
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
})

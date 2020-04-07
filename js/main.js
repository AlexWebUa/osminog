function sticky_header() {
    if ($(window).width() > 768 && $(window).scrollTop() > 1) {
        if (!$("header").hasClass('header-fixed')) {
            $("header").addClass("header-fixed");
            $("header .navbar-brand img").attr('src', 'assets/img/logo_white.png');
            $(".navbar-collapse .icons .instagram-icon a img").attr('src', 'assets/img/instagram_white.png');
            $(".navbar-collapse .icons .phone-icon a img").attr('src', 'assets/img/phone_white.png');
        } else return;
    } else {
        if ($("header").hasClass('header-fixed')) {
            $("header").removeClass("header-fixed");
            $("header .navbar-brand img").attr('src', 'assets/img/logo.png');
            $(".navbar-collapse .icons .instagram-icon a img").attr('src', 'assets/img/instagram.png');
            $(".navbar-collapse .icons .phone-icon a img").attr('src', 'assets/img/phone.png');
        } else return;
    }
}

$(window).on('load', () => {
    sticky_header();
    $(window).on("scroll", function () {
        sticky_header();
    });
});

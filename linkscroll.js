$(function() {
    $('.linkscroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            var speed = parseInt($(this).attr('data-speed'));
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, speed);
                return false;
            }
        }
    });
    $('.topscroll').click(function(){
        var speed = parseInt($(this).attr('data-speed'));
        $("html, body").animate({ scrollTop: 0 }, speed);
        return false;
    });
});
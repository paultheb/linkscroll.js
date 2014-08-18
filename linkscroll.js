(function($) {
    $('.linkscroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var speed = $(this).attr('data-speed');
            if (typeof speed !== typeof undefined && speed !== false) {
                speed = parseInt(speed);
            } else {
                speed = 800;
            }
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
        var speed = $(this).attr('data-speed');
            if (typeof speed !== typeof undefined && speed !== false) {
                speed = parseInt(speed);
            } else {
                speed = 800;
            }
        $("html, body").animate({ scrollTop: 0 }, speed);
        return false;
    });
})(jQuery);
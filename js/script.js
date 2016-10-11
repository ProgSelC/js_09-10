(function($) {
    $(function() {
        $('.jcarousel').jcarousel({wrap: 'circular'});

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

$(function(){
    $('.top-menu li').mouseenter(function(){
        $('.submenu', this).slideDown();
    });

    $('.top-menu li').mouseleave(function(){
        $('.submenu', this).slideUp();
    });

    $('#sumo').SumoSelect({
        floatWidth: 400,
        search: true
    });

    $(".niceCheck").mousedown(function() {
        changeCheck($(this));
    });

    $(".niceCheck").each(function() {
        changeCheckStart($(this));
    });

    function changeCheck(el) {
        var el = el,
        input = el.find("input").eq(0);

        if(!input.attr("checked")) {
            el.css("background-position","-17px 0");
            input.attr("checked", true)
        } else {
            el.css("background-position","0 0");
            input.attr("checked", false)
        }
        return true;
    }

    function changeCheckStart(el) {
        var el = el,
        input = el.find("input").eq(0);
        if(input.attr("checked")) {
            el.css("background-position","-17px 0");
        }
        return true;
    }
});

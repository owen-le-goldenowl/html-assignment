// $(document).ready(function () {
$(document).on('turbolinks:load', function () {
    // handle navbar background color change when start scrolling
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $('.menutren').css('background-color', '#292525cc');
        } else if (scroll_pos == 0) {
            $('.menutren').css('background-color', 'rgba(41, 37, 37, 0)');
        }
    });

    //handle image drag effect
    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        // allowPageScroll: "vertical"
    });

    //define hover effect of dropdown menu
    $(".dropdown").mouseenter(function () {
        $(".dropdown-menu").css("display", "block");
    });

    $(".dropdown-menu").mouseleave(function () {
        $(".dropdown-menu").css("display", "none");
    });

});

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $('.menutren').css('background-color', '#292525cc');
        } else if (scroll_pos == 0) {
            $('.menutren').css('background-color', 'rgba(41, 37, 37, 0)');
        }
    });

    
});

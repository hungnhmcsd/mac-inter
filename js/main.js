//$('.mac-arrow-down').hover(function () {
//    setInterval(function () {
//        $(this).css({
//            transform: 'translate(-50%, -40%)',
//            cursor: 'poiter'
//        });
//    }, 100);
//});
$('.mac-bar').click(function () {
    $('.top').css({
        transform: 'rotate(45deg)',
        top: '15px',
        color: '#ccc !important'
    });
    $('.bottom').css({
        transform: 'rotate(-45deg)',
        top: '15px',
        color: '#ccc !important'
    });
    $('.middle').css({
        display: 'none'
    });

    $('.menu-main-container').css({
        visibility: 'visible',
        'transition-delay': '0.5s',
        height: '100%'
    });

    $('#mac-overlay').css({
        left: '0px'
    });
    $(this).fadeOut(1000);
});

$('.overlay-bar').click(function () {
    $('.top').css({
        transform: 'rotate(0deg)',
        top: '5px',
        transition: 'all 0.5s'
    });
    $('.bottom').css({
        transform: 'rotate(-0deg)',
        top: '25px',
        transition: 'all 0.5s'

    });
    $('.middle').css({
        display: 'block',
        top: '15px',
        transition: 'all 0.5s'
    });

    $('.menu-main-container').css({
        visibility: 'hidden',
        'transition-delay': '0',
        height: '100%'
    }, 0)

    $('#mac-overlay').css({
        left: '-400px'
    });

    $('.mac-bar').fadeIn();
});

$('.mac-arrow-down').click(function () {
    $('html, body').animate({
        scrollTop: $('#main-body').offset().top
    }, 800);
});

$(window).scroll(function () {
    $('#mac-menu').removeClass('stick');
    var window_top = $(window).scrollTop();
    var div_top = $('#mac-menu').offset().top;

    if (window_top >= div_top) {
        $('#mac-menu').addClass('stick');
    } else if (window_top < div_top) {
        console.log(window_top, div_top);
        $('#mac-menu').removeClass('stick');
    }
});



/*$('.mac-hide-logo').hover(function () {
    $('.mac-logo').css({
        visibility: 'hidden'
    });
}, function () {
    $('.mac-logo').css({
        visibility: 'visible',
        cursor: 'pointer',
        opacity: 0.5
    });
});*/
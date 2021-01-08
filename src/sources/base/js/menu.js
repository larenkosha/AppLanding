let stickyTop = $('.block-header').offset().top;

$(window).on('scroll', function () {
    if ($(window).scrollTop() > stickyTop) {
        $('.block-header').addClass('sticky');
    } else {
        $('.block-header').removeClass('sticky');
    }
});

function menu() {
    let burger = $('.burger');

    burger.on('click', function(){
        $(this).toggleClass('active');
    })
}

menu();
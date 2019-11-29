$(document).ready(function () {
    $('.prtnr-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1
        // responsive: [
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             centerPadding: '60px',
        //             vertical: false,
        //             arrows: false
        //         }
        //     }, {
        //         breakpoint: 481,
        //         settings: {
        //             centerMode: false,
        //             centerPadding: '0px',
        //             vertical: false,
        //             arrows: false
        //         }
        //     }
        // ]
    });

    //.pres-slider
    $('.pres-gal').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true
        // responsive: [
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             centerPadding: '60px',
        //             vertical: false,
        //             arrows: false
        //         }
        //     }, {
        //         breakpoint: 481,
        //         settings: {
        //             centerMode: false,
        //             centerPadding: '0px',
        //             vertical: false,
        //             arrows: false
        //         }
        //     }
        // ]
    });
});
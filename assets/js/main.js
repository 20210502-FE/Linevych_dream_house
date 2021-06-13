$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/arrow-left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/arrow-right.svg" alt="right"></button>',
        autoplay: true,
        autoplaySpeed: 2500,
    })
});
$(function () {
    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev reviews__slick-prev"><img src="assets/icons/arrow-left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next reviews__slick-next"><img src="assets/icons/arrow-right.svg" alt="right"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
    })
});
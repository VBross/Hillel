$('.js-team-slider-parent').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
});

$('.js-about__slider-parent').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
});

$('.js-about__slider-parent--wide').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
});

document.querySelector('.header__menu-button').addEventListener('click', function() {
    document.querySelector('.header__menu-button').classList.add('header__menu-button--active')
    document.querySelector('.header__menu-mobile-list').classList.add('header__menu-mobile-list--active')
    document.querySelector('.js-background').classList.add('black-background')
    document.querySelector('html').classList.add('stop-scroll')
    document.querySelector('.x-mark').classList.remove('x-mark--active')
});

document.querySelector('.x-mark').addEventListener('click', function() {
    document.querySelector('.header__menu-button').classList.remove('header__menu-button--active')
    document.querySelector('.header__menu-mobile-list').classList.remove('header__menu-mobile-list--active')
    document.querySelector('html').classList.remove('stop-scroll')
    document.querySelector('.js-background').classList.remove('black-background')
    document.querySelector('.x-mark').classList.add('x-mark--active')
});

document.querySelector('.pop-up__title-x-mark').addEventListener('click', function() {
    document.querySelector('.pop-up--parent').classList.add('display-none')
    document.querySelector('.body').classList.remove('body--pop-up')
    document.querySelector('.x-mark').classList.add('x-mark--active')
});

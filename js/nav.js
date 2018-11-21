$(function () {

    //    Funkcja rozwijająca nav

    $(".header__trigger").click(function () {
        $(".nav").slideToggle(400, function () {
            $(this).toggleClass("nav--show");
            $(this).toggleClass("nav--hide");
        });
        $('.material-icons').toggleClass('material-icons--hide');
    });

    //    Funkcja zamykająca nav po kliknięciu

    $(".nav__item").click(function () {
        $(".nav").slideToggle(400, function () {
            $(this).toggleClass("nav--show");
            $(this).toggleClass("nav--hide");
        });
        $('.material-icons').toggleClass('material-icons--hide');
    });








});
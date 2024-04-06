$(document).ready(function () {
    $('#hide-ww2').click(function () {
        $('#world-war p, #world-war img').hide();
    });

    $('#show-ww2').click(function () {
        $('#world-war p, #world-war img').show();
    });

    $('#fade-ai').click(function () {
        $('#ai p, #ai img').fadeToggle();
    });

    $('#slide-custom').click(function () {
        $('#custom p').slideToggle();
    });
});

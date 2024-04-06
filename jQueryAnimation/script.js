$(document).ready(function () {
    $('#up').click(function () {
        $('#movable-div').stop().animate({ top: '-=50px' }, 500);
    });
    $('#down').click(function () {
        $('#movable-div').stop().animate({ top: '+=50px' }, 500);
    });
    $('#left').click(function () {
        $('#movable-div').stop().animate({ left: '-=50px' }, 500);
    });
    $('#right').click(function () {
        $('#movable-div').stop().animate({ left: '+=50px' }, 500);
    });

    $('#movable-div').dblclick(function () {
        $(this).stop().animate({
            top: 0,
            left: 0,
            width: '100px',
            height: '100px',
            borderRadius: '50%'
        }, 500);
    });

    $('.controls button').mouseover(function () {
        $(this).animate({
            borderWidth: '2px',
            fontSize: '18px'
        }, 200).animate({
            borderWidth: '0px',
            fontSize: '16px'
        }, 200);
    });
});

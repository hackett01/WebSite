/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $(".button").hover(function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-10.png");
    }, function () {
        $(this).attr("src", "../img/iconosweb-09_converted.png");
    });

    $(".button2").hover(function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-04.png");
    }, function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-08.png");
    });

    $(".button3").hover(function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-11.png");
    }, function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-07.png");
    });
    $(".button4").hover(function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-03.png");
    }, function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-05.png");
    });
    $(".button5").hover(function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-02.png");
    }, function () {
        $(this).attr("src", "../img/iconosweb/iconosweb-06.png");
    });
    $(".button6").hover(function () {
        $(this).attr("src", "../img/iconos-02.png");
    }, function () {
        $(this).attr("src", "../img/iconos-03.png");
    });
    $(".button7").hover(function () {
        $(this).attr("src", "../img/iconos-06.png");
    }, function () {
        $(this).attr("src", "../img/iconos-05.png");
    });
});


$().ready(function () {
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}

$(document).ready(function (e) {


    $('#input-default').emojiPicker();

    $('#input-custom-size').emojiPicker({
        width: '400px',
        height: '200px'
    });

    $('#input-left-position').emojiPicker({
        position: 'left'
    });

    $('#trigger').click(function (e) {
        e.preventDefault();
        $('#text-custom-trigger').emojiPicker('toggle');
    });

    // keyup event is fired 
    $(".emojiable-question, .emojiable-option").on("keyup", function () {
        console.log("emoji added, input val() is: " + $(this).val());
    });

});
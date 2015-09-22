/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    $("#mostrar").click(function (event) {
        event.preventDefault();
        $("#caja").slideToggle();
    });
    $("#caja a").click(function (event) {
        event.preventDefault();
        $("#caja").slideUp();
    });
});


$(function () {
    /* BOOTSNIPP FULLSCREEN FIX */
    if (window.location == window.parent.location) {
        $('#back-to-bootsnipp').removeClass('hide');
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('#fullscreen').on('click', function (event) {
        event.preventDefault();

    });
    $('a[href="#cant-do-all-the-work-for-you"]').on('click', function (event) {
        event.preventDefault();
        $('#cant-do-all-the-work-for-you').modal('show');
    })

    $('[data-command="toggle-search"]').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('hide-search');

        if ($(this).hasClass('hide-search')) {
            $('.c-search').closest('.row').slideUp(100);
        } else {
            $('.c-search').closest('.row').slideDown(100);
        }
    })

    $('#contact-list').searchable({
        searchField: '#contact-list-search',
        selector: 'li',
        childSelector: '.col-xs-12',
        show: function (elem) {
            elem.slideDown(100);
        },
        hide: function (elem) {
            elem.slideUp(100);
        }
    })
});



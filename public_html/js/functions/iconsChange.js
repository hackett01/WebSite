/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    $(".broadcast_1").hover(function () {
        $(this).attr("src", "../img/iconos/secciones/broadcast.png");
    }, function () {
        $(this).attr("src", "../img/iconos/secciones/broadcast_1.png");
    });

    $(".contactos").hover(function () {
        $(this).attr("src", "../img/iconos/secciones/contactos_1.png");
    }, function () {
        $(this).attr("src", "../img/iconos/secciones/contactos.png");
    });

    $(".gritChat").hover(function () {
        $(this).attr("src", "../img/iconos/secciones/chat.png");
    }, function () {
        $(this).attr("src", "../img/iconos/secciones/chat_1.png");
    });

 $(".grupsChat").hover(function () {
        $(this).attr("src", "../img/iconos/secciones/grupos.png");
    }, function () {
        $(this).attr("src", "../img/iconos/secciones/grupos_1.png");
    });







});


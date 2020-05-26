// window.onload = function(e) {
//     var offset = document.getElementsByClassName('nav-container')[0].offsetTop;
//     var menu = document.getElementsByClassName('nav-container')[0];
    
//     console.log ( menu )

//     document.addEventListener('scroll', function() {
//         if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
//             menu.style.position = 'fixed';
//         } else {
//             menu.style.position = 'initial';
//         }
//     });
// }

// $(window).on('scroll load', function(){
//     var win_scl = $(window).scrollTop(); // valor do scroll da janela
//     var nav = $('.nav-container'); // menu
//     var nav_ant = nav.prev('div'); // div antes do menu
//     var nav_hgt = nav.outerHeight(); // altura do menu
//     var nav_ant_hgt = nav_ant.outerHeight(); // altura da div antes do menu
//     var nav_ant_top = nav_ant.offset().top; // distância da div antes do menu ao topo
//     var nav_ant_dst = nav_ant_top-win_scl; // distancia do final da div antes do menu ao topo da janela
 
//     if(win_scl > ) {
//        nav.addClass("f-nav");
//         // adiciono margem superior à primeira div depois do menu
//        $(".nav-container+section").css('margin-top',nav_hgt+'px');
//     }else{
//        nav.removeClass("f-nav");
//         // retiro margem superior à primeira div depois do menu
//        $(".nav-container+section").css('margin-top','0');
//     }
//  });


new WOW().init();

function fixarMenu(){
    $(window).on('scroll', function(){
        var x = $(this).scrollTop();
        if(x > 100){
            $('.menu_principal').addClass('isActive');
        }else{
            $('.menu_principal').removeClass('isActive');
        }
    });
}
fixarMenu();
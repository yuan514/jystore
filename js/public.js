$(function(){
    $('.content-down').click(function(){
        $('.mark-must').css('display','block');
        $('.mark-must').click(function(){
            $('.mark-must').css('display','none');
        })
    })

    //点击图片出现
    $('.swiper-slide img').click(function(){
        var url=this.src.split('page/')[1];
        $('.mark').append('<img src=../'+url+' alt="">');
        $('.mark').css('display','block');
        $('.mark').click(function(){
            $('.mark').css('display','none');
            $('.mark img').remove();
        })
    })

    $('.des-re').click(function () {
        if ($('.des img').hasClass('xuan')) {
            $('.des img').removeClass("xuan");
            $('.des img').addClass("xuan1");
            $('.des i').css('height', '2.5rem');
        } else {
            $('.des img').removeClass("xuan1");
            $('.des img').addClass("xuan");
            $('.des i').css('height', 'auto');
        }
    })
    $('.xiang').click(function () {
        if ($('.xiang img').hasClass('rotate')) {
            $('.xiang img').removeClass("rotate");
            $('.xiang img').addClass("rotate1");
            $('.change').css('display', 'none');
        } else {
            $('.xiang img').removeClass("rotate1");
            $('.xiang img').addClass("rotate");
            $('.change').css('display', 'block');
        }
    })

})


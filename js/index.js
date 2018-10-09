$(document).ready(function () {

    var main_ul=$('.main-a ul').eq(0);
    var main_li=main_ul.find('li');

    var img_ul=$('.imge ul').eq(0);
    var img_li=img_ul.children();

    main_li.hover(function(){
    	var index=$(this).index();
        if(index!=6 || index!=7){
            $('.imge').stop().animate({
                height:230,
                opacity: 1
            },600);
            $('.all').show();
             $('.imge').show();
            img_li.eq(index).show();
        }
        if(index==6 || index==7){
                $('.imge').stop().animate({
                height:0,
                opacity: 0
            },600);
        }
    },function(){
        var index=$(this).index();
    	$('.imge').stop().animate({
    		height:0,
    		opacity: 0
    	},600);
        img_li.eq(index).hide();
        $('.all').hide();
    })
    
    var ban_ul=$('.banner .picture').eq(0);
    var ban_pic=ban_ul.find('li');

    var sp_ul=$('.banner .spot').eq(0);
    var sp_li=sp_ul.find('li');

    function ChangeImg(e){
        ban_pic.eq(e).fadeIn(1000).siblings().fadeOut(1000);
        sp_li.eq(e).addClass('on').siblings().removeClass('on');
    };

    var timmer=null,num=0;

    function autoPlay(){
        timmer=setInterval(function(){
            num++;
            if(num>4){
                num=0;
            }
            ChangeImg(num);
        },2000);
    };
    autoPlay();

    sp_li.on('click',function(){
        clearInterval(timmer);
        num=$(this).index();
        ChangeImg(num);
        autoPlay();
    });

    var btn_pre=$('.btn .pre');
    var btn_next=$('.btn .next');

    btn_pre.on('click',function(){
        clearInterval(timmer);
        num--;
        if(num<0){
            num=4;
        }
        ChangeImg(num);
        autoPlay();
    });
    btn_next.on('click',function(){
        clearInterval(timmer);
        num++;
        if(num>4){
            num=0;
        }
        ChangeImg(num);
        autoPlay();
    });

    ban_pic.on('mouseenter',function(){
        clearInterval(timmer);
    })
    .on('mouseout',function(){
        autoPlay();
    });


    var sub=$('.sub .hand').eq(0);
    var sub_li=sub.find('li');

    sub_li.hover(function(){
        $(this).addClass('active');
        $(this).find('.side_sub').show();
    },function(){
        $(this).removeClass('active');
        $(this).find('.side_sub').hide();
    });

    var btn_left=$('.btn-pre');
    var btn_right=$('.btn-next');

    var line_ul=$('.row-roll');

    btn_left.unbind('click').click(function(){
        line_ul.animate({left:"-1235px"},1000);
    });
    btn_right.unbind('click').click(function(){
        line_ul.animate({left:"0px"},1000);
    });

    var content_li=$('.content-right ul').eq(0).find('li');
    content_li.hover(function(){
        $(this).animate({top:"-5px"});
        $(this).css('box-shadow','rgba(0,0,0,.3) 0px 15px 30px');
    },function(){
        $(this).animate({top:"0px"});
        $(this).css('box-shadow','none');
    });
})
 $(document).ready(function () {
    var pic_ul=$('.picture ul').eq(0);
    var pic_img=pic_ul.find('li');

    var btn_ul=$('.spot ul').eq(0);
    var btn_li=btn_ul.find('li');


    var num=0,timmer=null;

    function Change(e){
        pic_img.eq(e).fadeIn(500).siblings().fadeOut(500);
        btn_li.eq(e).addClass('on').siblings().removeClass('on');
    }
    function autoPlay(){
        timmer=setInterval(function(){
            num++;
            if(num>4){
                num=0;
            }
            Change(num);
        },1000);
    }
    autoPlay();

    btn_li.on('click',function(){
        num=$(this).index();
        clearInterval(timmer);
        Change(num);
        autoPlay();
    });
    pic_img.on('mouseover',function(){
        clearInterval(timmer);
    })
    .on('mouseout',function(){
        autoPlay();
    });

    var pre=$('.btn .pre');
    var next=$('.btn .next');

    pre.on('click',function(){
        clearInterval(timmer);
        num--;
        if(num<0){
            num=4;
        }
        Change(num);
        autoPlay();
    });
    next.on('click',function(){
        clearInterval(timmer);
        num++;
        if(num>4){
            num=0;
        }
        Change(num);
        autoPlay();
    });
})
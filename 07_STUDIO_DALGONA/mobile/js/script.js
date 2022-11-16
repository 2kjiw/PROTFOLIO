/* loding page */
/* window.onload= function(){
    $('#loding').fadeIn();
    $('#wrap').css('display','none');
    setTimeout(function(){
        $('#loding').fadeOut();
        $('#wrap').css('display','block'); 
    },3000);
}; */


/* menu */
let menuBtn=$('#header>.header-top>.container>span');
let menuList=$('#menu');
let listBtn=$('.menu-list>a');
let listBtn2=$('.menu-list>i');
let listList=$('.menu-list>div');
let listClick=listList.find('li');

menuList.hide();
menuBtn.click(function(){
    menuList.toggle();
    menuBtn.toggleClass('on');
    $('.menu-bg').toggle();
});

listBtn.click(function(){
    listList.stop().slideUp();
    listBtn.parent('li').removeClass('on');
    $(this).parent('li').addClass('on');
    $(this).siblings('div').stop().slideDown();
});

listBtn2.click(function(){
    listList.stop().slideUp();
    listBtn.parent('li').removeClass('on');
    $(this).parent('li').addClass('on');
    $(this).siblings('div').stop().slideDown();
});

listClick.click(function(){
    listClick.removeClass('on');
    $(this).addClass('on');
});

let loginBtn=$('.login-inner>button');

loginBtn.click(function(){
    location.href="./mypage.html"
});


/* slide */
let banner=$('.slide-imgs>li');
let current=0;

slide();
function slide(){
    setInterval(function(){
        let prev=banner.eq(current);
        move(prev, 0, '-130%');
        current++;
        if(current===banner.size())current=0;
        let next=banner.eq(current);
        move(next, '100%', 0);
    },3000);
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end})
}


/* topBtn */
$('#top-btn').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop :0
    },500)
});
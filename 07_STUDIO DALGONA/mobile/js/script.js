
$('#loging').animate({display:'none'},5000);

let menuBtn=$('#header>.header-top>.container>span>.menu-btn');
let menuList=$('#menu');

menuList.hide();
menuBtn.click(function(){
    menuList.toggle();
});

$('.menu-list').click(function(){
    
});

let loginBtn=$('.login-inner>button');

loginBtn.click(function(){
    location.href="./mypage.html"
})



//banner slide
let banner=$('.slide-imgs>li');
let current=0;

slide();
function slide(){
    setInterval(function(){
        let prev=banner.eq(current);
        move(prev, 0, '-130%');
        current++;
        if(current==banner.size())current=0;
        let next=banner.eq(current);
        move(next, '130%', 0);
    },3000)
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end});
}
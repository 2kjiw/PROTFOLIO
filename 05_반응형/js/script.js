//h-top menu
$('.resv-menu').hide();
$('.resvBt').click(function(){
    let resvMenu=$('.resvBt').children('ul');
    $('.resv-menu').slideUp();
    if(resvMenu.is(':visible')){
        $('#icon1').attr('class','fas fa-angle-down');
        $('.resvBt').children('a').css({background:'none', borderBottom:'none',color:'#856f56',padding: '6px 15px'});
        resvMenu.slideUp();
    }else{
        $('#icon1').attr('class','fas fa-angle-up');
        $('.resvBt').children('a').css({background:'#bfaf9d', borderBottom:'1px solid #ac9d8d',color:'#fff',padding: '6px 15px 5px 15px'});
        resvMenu.slideDown();
    }
});

$('.lan-menu').hide();
$('.lanBt').click(function(){
    let lanMenu=$('.lanBt').children('ul');
    $('.lan-menu').slideUp();
    if(lanMenu.is(':visible')){
        $('#icon2').attr('class','fas fa-angle-down');
        $('.lanBt').children('a').css({background:'none', borderBottom:'none',color:'#856f56',padding: '6px 0 6px 15px'});
        lanMenu.slideUp();
    }else{
        $('#icon2').attr('class','fas fa-angle-up');
        $('.lanBt').children('a').css({background:'#bfaf9d', borderBottom:'1px solid #ac9d8d',color:'#fff',padding: '6px 0 5px 15px'});
        lanMenu.slideDown();
    }
});

//mainVisual slide
let mvSlide=$('.slides>li');
let next=$('.control-nextBt');
let prev=$('.control-prevBt');
let current=0;
let timer=null;

slide();
function slide(){
    timer=setInterval(function(){
        let prev=mvSlide.eq(current);
        move(prev, 0 ,'-100%')
        current++;

        if(current==mvSlide.size()){current=0}
        let next=mvSlide.eq(current)
        move(next, '100%', 0)
    },3000);
};

function move(tg, start, end){
    tg.css('left', start).stop().animate({left:end},500)
};

$('#mvSlide').hover(function(){
    clearInterval(timer);
},function(){
    slide();
});

next.click(function(){
    clearInterval(timer);
    
    let prev=mvSlide.eq(current);
    move(prev, 0 ,'-100%')
    current++;

    if(current==mvSlide.size()){current=0}
    let next=mvSlide.eq(current)
    move(next, '100%', 0)
});
prev.click(function(){
    clearInterval(timer);

    let prev=mvSlide.eq(current);
    move(prev, 0 ,'-100%')
    current--;

    if(current==-mvSlide.size()){current=0}
    let next=mvSlide.eq(current)
    move(next, '100%', 0)
});

//special-gallery-mobile
$('.special-gallery-list > li > a').click(function(){
    let path=$(this).attr('href');
    
    $('.special-gallery-list > li > a').removeClass('on');
    $(this).addClass('on');
    $('.special-gallery-mbigimg').find('img').attr({src:path});
    $('.special-gallery-mbigimg > a > img').css('opacity','0').stop().animate({opacity:1},1000);

    return false   
});

let list=$('.special-gallery-list')
let listA=list.find('a');
let m_num=0;
$('.cont-btn .perv-btn').click(function(){
    if(m_num<=0) return false;
    m_num--;
    list.css({left:-(154*m_num)+"px"});
});
$('.cont-btn .next-btn').click(function(){
    if(m_num>=listA.length-4) return false;
    m_num++;
    list.css({left:-(154*m_num)+"px"});
});
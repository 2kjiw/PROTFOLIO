//상단팝업
$('.corona_close>a').click(function(){
    $('#popup').hide()
});


//화면크기조절
let base=100;
let myBody=$('body');
let maginfyBt=$('.maginfy>dl>dd');

maginfyBt.click(function(){
    let zNum=maginfyBt.index(this);
    // console.log(zNum);
    if(zNum==0){
        base += 10
    }else{
        base -= 10
    }
    myBody.css('overflow-y','auto').css('transform','scale(' + base/100 + ')').css('transform-origin',"50% 0").css('zoom', base+ '%');
    return false;
});

//언어선택
let language=$('.language');
let languageList=$('.lang_list');

language.click(function(){
    language.toggleClass('active');
    if(language.is(':visible')){languageBtn.show();}else{languageBtn.hide();}           
});


//visual_group
let slide=$('.swiper>ul>li');
let prev=$('.slide_btn>.prev');
let next=$('.slide_btn>.next');
let playBtn=$('.slide_btn>.playbt');
let playIcon=$('.slide_btn>.playbt>.stop');
let timer=0;
let current=null;

slides();
function slides(){
    timer=setInterval(function(){
        let prev=slide.eq(current);
        move(prev, 0 ,'-100%');
        current++;
        
        if(current==slide.size()){current=0};
        let next=slide.eq(current);
        move(next, '100%', 0);

    },3000);
};

function move(tg, start, end){
    tg.css('left', start).stop().animate({left:end},500)
};

/* $('.swiper').hover(function(){
    clearInterval(timer);
}, function(){
    slides();
}); */

prev.click(function(){
    clearInterval(timer);

    let prev=slide.eq(current);
    move(prev, 0 ,'100%')
    current--;

    if(current==-slide.size()){current=0}
    let next=slide.eq(current)
    move(next, '-100%', 0)
});
next.click(function(){
    clearInterval(timer);
    let prev=slide.eq(current);
    move(prev, 0 ,'-100%');
    current++;
    
    if(current==slide.size()){current=0};
    let next=slide.eq(current);
    move(next, '100%', 0);
});

let a=true;
playBtn.click(function(){
    console.log('click')
    if(a==true){
        clearInterval(timer);
        playIcon.find('img').attr('src','./img/visual_slide_play.png');
   
        a=false;
    }else{
        slides();
        playIcon.find('img').attr('src','./img/visual_slide_stop.png');
        a=true;
    }
})


//right_quick
//weather_body
$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=84848ad5cf867cf26673fbbcbfb6b87f&units=metric',function(data){
    // alert(data.weather[0].icon)
    let icon=data.weather[0].icon;

    $('.weather_icon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');
});


//news_section
var $newsBt=$('.news_group dl dt');
var $newList=$('.news_list')

$newsBt.click(function(){
    $newsBt.removeClass('on');
    $(this).addClass('on');
    // let lineIdx=$(this).index();

    $newList.removeClass('on');
    $(this).next('.news_list').addClass('on');
})

$.ajax({
    url:"cn.php",
    dataType:"xml",
    success:function(data){
        let $item=$(data).find("item");
        if($item.length>0){
            $item=$item.slice(0,8);
            let $ulTag=$("<ul/>");
            $.each($item, function(i, o){
                let $title=$(o).find("title").text();
                let $link=$(o).find("link").text();
                let $pubDate=$(o).find("pubDate").text();

                let $aTag=$("<a/>").attr({"href":$link, "target":"_blank"});
                let $pTitle=$("<p/>").addClass('title').text($title);
                let $pDate=$("<p/>").addClass('date').text($pubDate);
                let $liTag=$("<li/>").append($aTag);
                $aTag.append($pTitle);
                $aTag.append($pDate);
                $ulTag.append($liTag)
            })
            $('.cn').append($ulTag);
        }
    }
});

$.ajax({
    url:"reinfo.php",
    dataType:"xml",
    success:function(data){
        let $item2=$(data).find("item");
        if($item2.length>0){
            $item2=$item2.slice(0,8);
            let $ulTag2=$("<ul/>");
            $.each($item2, function(i, o){
                let $title2=$(o).find("title").text();
                let $link2=$(o).find("link").text();
                let $pubDate2=$(o).find("pubDate").text();

                let $aTag2=$("<a/>").attr({"href":$link2, "target":"_blank"});
                let $pTitle2=$("<p/>").addClass('title').text($title2);
                let $pDate2=$("<p/>").addClass('date').text($pubDate2);
                let $liTag2=$("<li/>").append($aTag2);
                $aTag2.append($pTitle2);
                $aTag2.append($pDate2);
                $ulTag2.append($liTag2)
            })
            $('.reinfo').append($ulTag2);
        }
    }
});


//popup_group
let popSlide=$('.popupslides>ul>li');
let prevBtn=$('.popup_btn>.popprev');
let nextBtn=$('.popup_btn>.popnext');
let popPlay=$('.popup_btn>.popplay');
let popPlayBtn=$('.popup_btn>.popplay>.stop');
let time=0;
let current2=null;

popSlides();
function popSlides(){
    time=setInterval(function(){
        let prev=popSlide.eq(current2);
        move2(prev, 0 ,'-100%');
        current2++;

        if(current2==popSlide.size())current2=0;
        let next=popSlide.eq(current2);
        move2(next, '100%', 0)  
    },3000);
}

function move2(tg, start, end){
    tg. css('left', start).stop().animate({left:end},500);
}

$('.popupslides').hover(function(){
    clearInterval(time);
}, function(){
    popSlides();
})

/* $('.popup_btn').hover(function(){
    clearInterval(time);
}, function(){
    popSlides();
}) */

prevBtn.click(function(){
    clearInterval(time);

    let prev=popSlide.eq(current2);
    move2(prev, 0 ,'100%');
    current2--;

    if(current2==-popSlide.size())current2=0;
    let next=popSlide.eq(current2);
    move2(next, '-100%', 0)

});
nextBtn.click(function(){
    clearInterval(time);

    let prev=popSlide.eq(current2);
    move2(prev, 0 ,'-100%');
    current2++;

    if(current2==popSlide.size())current2=0;
    let next=popSlide.eq(current2);
    move2(next, '100%', 0)
});

let p=true;
popPlay.click(function(){
    if(p==true){
        clearInterval(time);
        popPlayBtn.find('img').attr('src','./img/popupzone_slide_play.png');
   
        p=false;
    }else{
        popSlides();
        popPlayBtn.find('img').attr('src','./img/popupzone_slide_stop.png');
        p=true;
    }
});


//business
var $botton=$('.busi_container dl dt');
var $alldd=$('.business_list');

$botton.click(function(){
    $botton.removeClass('on');
    $(this).addClass('on');
    let lineIdx=$(this).index();

    $alldd.removeClass('on');
    $(this).next(lineIdx).addClass('on');
});


//footer
let footerlist=$('.familysite_list> li > a');

$('.familysite_lists').hide();

footerlist.click(function(){
    let nextfamily=$(this).next();
    
    $('.familysite_lists').slideUp();
    if(nextfamily.is(':visible')){
        nextfamily.slideUp();
    }else{
        nextfamily.slideDown();
    }
});

$('.familysite_lists>button').click(function(){
    $('.familysite_lists').slideUp();
});
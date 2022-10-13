$(function(){
    //scroll event
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;

    let headerNav=$('#header');
    let section1He=$('#section1');
    let section2He=$('#section2').scrollTop();
    let section3He=$('#section3').scrollTop();
    let footerHe=$('#footer');
    let section1Height = section1He.outerHeight();
    let menu=$('.nav>.flex>ul>li');
    // console.log(section1Height);
    
    $(window).scroll(function(){
        didScroll = true;
    });

    setInterval(function() {
        if(didScroll) {
            hasScroll();
            didScroll = false;
        }
    }, 250);

    function hasScroll() {
        let st = $(this).scrollTop();
        // console.log(st);
        
        if(Math.abs(lastScrollTop - st) <= delta) return;
        
        if($(this).scrollTop()>=section1Height/2){
            headerNav.addClass('on');
            $('#topBtn').fadeIn();
            
            if($(this).scrollTop()>=section2He){
                menu.removeClass('on');
                menu.eq(menu.index()).addClass('on');

            }else if($(this).scrollTop()>=section3He){
                menu.removeClass('on');
                menu.eq(menu.index()).addClass('on');
                
            }else{
                menu.removeClass('on');
            }
            
        }else{
            headerNav.removeClass('on');
            $('#topBtn').fadeOut();
            menu.removeClass('on');
        }

        lastScrollTop = st;
    }

    //header nav 스크롤이동
    menu.find('a').click(function(e){
        // console.log(num);

        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top
        },500);
    });

    //header nav event
    menu.on('mouseover focus',function(){
        $(this).find('ul').stop().slideDown();
    });
    menu.on('mouseout blur',function(){
        $(this).find('ul').stop().slideUp();
    });
    menu.on('click focus',function(){
        // console.log('click')
        menu.removeClass('on');
        $(this).addClass('on');
    });
    menu.on('blur',function(){
        $(this).removeClass('on');
        menu.removeClass('on');
    });

    //header api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=84848ad5cf867cf26673fbbcbfb6b87f&units=metric',function(data){
        let icon=data.weather[0].icon;
    
        $('.weather-icon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');
    });
});
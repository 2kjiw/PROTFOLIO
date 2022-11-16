$(function(){
    //scroll event
    let headerNav=$('#header');
    let section1He=$('#section1');
    let section1Height = section1He.height();
    let $menu=$('.nav>.flex>ul>li');
    // console.log(section1Height);
    
    $(window).scroll(function(){
        navTop();
        menuOn();
    });

    function navTop(){
        var scrTop=$(window).scrollTop();

        if(scrTop >= section1Height/2){
            headerNav.addClass('on');
            $('#topBtn').fadeIn();
        }else{
            headerNav.removeClass('on');
            $('#topBtn').fadeOut();
            $menu.removeClass('on');
        }
    }

    function menuOn(){
        var scrTop=$(window).scrollTop();

        $menu.each(function(){
            var secId=$(this).children('a').attr('href');
            var secPos=$(secId).offset().top;

            if(secPos <= scrTop){
                $menu.removeClass('on');
                $(this).addClass('on');
            }else if(scrTop == $(document).height() - $(window).height()){
                $menu.removeClass('on');
                $menu.last().addClass('on');
            }
        });
    }

    //header api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=84848ad5cf867cf26673fbbcbfb6b87f&units=metric',function(data){
        let icon=data.weather[0].icon;
    
        $('.weather-icon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');
    });

    //header nav 스크롤이동
    $menu.find('a').click(function(e){
        // console.log(num);

        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top
        },500);
    });

    //header nav event
    $menu.on('mouseover focus',function(){
        $(this).find('ul').stop().slideDown();
    });
    $menu.on('mouseout blur',function(){
        $(this).find('ul').stop().slideUp();
    });
    $menu.on('click focus',function(){
        // console.log('click')
        $menu.removeClass('on');
        $(this).addClass('on');
    });
    $menu.on('blur',function(){
        $(this).removeClass('on');
        $menu.removeClass('on');
    });

});
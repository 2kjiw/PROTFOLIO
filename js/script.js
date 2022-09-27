$(function(){
    //header
    //header nav
    let headerNav=$('#header');
    let section1He=$('#section1');
    let section1HeOffset=section1He.innerHeight();
    let menu=$('.nav>.flex>ul>li');
    // console.log(section1HeOffset);

    $(window).scroll(function(){
        if($(this).scrollTop()>=section1HeOffset){
            headerNav.addClass('on');
            $('#topBtn').fadeIn();
            // console.log('헤더벗어남')
        }else{
            headerNav.removeClass('on');
            $('#topBtn').fadeOut();
            // console.log('헤더')
        }
    });

    //header api
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=84848ad5cf867cf26673fbbcbfb6b87f&units=metric',function(data){
        let icon=data.weather[0].icon;
    
        $('.weather-icon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');
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

    
    //skill-wrap
    //progress
    $('.num').each(function(){
        let progress=$(this),
            progressBar=progress.find('.num-bar'),
            progressText=progress.find('.num-progress'),
            progressnum=progressText.attr('data-num');
        // console.log(progressnum)

        progressBar.stop().animate({width:progressnum+'%'},2000);
        setInterval(textAni, 1000/10);
        function textAni(){
            let currentWidth=progressBar.width()/progress.width()*100;
            progressText.text(Math.ceil(currentWidth)+'%')
        
        }
    })

    
    //slideUpDown
    let webSkill=$('.web-skill>ul>li');
    let designSkill=$('.design-skill>ul>li');

    webSkill.click(function(e){
        e.preventDefault()
        webSkill.removeClass('on');
        $(this).addClass('on');
        webSkill.find('p').hide();
        $(this).find('p').slideDown();
    })
    
    designSkill.click(function(e){
        e.preventDefault()
        designSkill.removeClass('on');
        $(this).addClass('on');
        designSkill.find('p').hide();
        $(this).find('p').slideDown();
    })


    //project
    let project=$('.web-wrap>li');
    let current=0;
    let timer=null;
    let prev=$('.slidebtn>.prev');
    let next=$('.slidebtn>.next');

    slide();
    function slide(){
        timer=setInterval(function(){
            let prev=project.eq(current);
            move(prev, 0, '-100%');
            current++;
            if(current==project.size())current=0;
            let next=project.eq(current);
            move(next, '100%', 0);
        },3000)
    }

    function move(tg, strat, end){
        tg.css('left',strat).stop().animate({left:end})
    }

    $('.web-wrap').hover(function(){
        clearInterval(timer);
    },function(){
        slide();
    })

    next.click(function(){
        clearInterval(timer);
    
        let prev=project.eq(current);
        move(prev, 0 ,'-100%');
        current++;

        if(current==project.size()){current=0}
        let next=project.eq(current)
        move(next, '100%', 0);
    })
    prev.click(function(){
        clearInterval(timer);
    
        let prev=project.eq(current);
        move(prev, 0 , '100%');
        current--;

        if(current==-project.size()){current=0}
        let next=project.eq(current)
        move(next, '-100%', 0);
    });


    //design-wrap
    let design=$('.design-wrap>li');
    let bigde=$('.bigdeproject');
    let bigdeimg=$('.bigdeproject>.bigdeproject-wrap');
    let closeBtn=$('.btn');

    design.click(function(e){
        let tg=$(this);
        let i=tg.index()

        e.preventDefault();
        bigde.fadeIn();
        bigdeimg.removeClass('on');
        bigdeimg.eq(i).addClass('on');
    });
    closeBtn.click(function(e){
        e.preventDefault();
        bigde.fadeOut();
    });

    
    //topbtn
    $('#topBtn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop :0
        },500)
    })
});
$(function(){
    
    //skill-wrap
    //progress
    $('.num').each(function(){
        let progress=$(this),
            progressBar=progress.find('.num-bar'),
            progressText=progress.find('.num-progress'),
            progressnum=progressText.attr('data-num');
        // console.log(progressnum);

        progressBar.stop().animate({width:progressnum+'%'},2000);
        setInterval(textAni, 1000/10);
        function textAni(){
            let currentWidth=progressBar.width()/progress.width()*100;
            progressText.text(Math.ceil(currentWidth)+'%');
        
        }
    });
    
    //slideUpDown
    let webSkill=$('.web-skill>ul>li');
    let designSkill=$('.design-skill>ul>li');

    webSkill.click(function(e){
        e.preventDefault()
        webSkill.removeClass('on');
        $(this).addClass('on');
        webSkill.find('p').hide();
        $(this).find('p').slideDown();
    });
    
    designSkill.click(function(e){
        e.preventDefault()
        designSkill.removeClass('on');
        $(this).addClass('on');
        designSkill.find('p').hide();
        $(this).find('p').slideDown();
    });


    //project
    let project=$('.web-wrap'); //움직이려는 ul
    let projectList=$('.web-wrap>li');
    let projectListOn=$('.web-wrap>li.on'); //on되어 있는 li
    let current=0;
    let current1=1;
    let timer=null;
    let prev=$('.slidebtn>.prev');
    let next=$('.slidebtn>.next');

    /* 수정하려는 부분 */
    // slide();
    function slide(){
        timer=setInterval(function(){
            project.stop().animate({left: '+= -60%'},500, function(){
                $(this).children('li:first').insertAfter($(this).children('li:last'));
                
                /* projectList.removeClass('on').eq((current1++)).addClass('on');
                if(current===projectList.size()) current=0; */
                if(current===projectList.size()) current=0;
            })
        },3000)
    }

    /* $('.web-wrap').hover(function(){
        clearInterval(timer);
    },function(){
        // slide();
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
    }); */


    //design-wrap
    let design=$('.design-wrap>li');
    let bigde=$('.bigdeproject');
    let bigdeimg=$('.bigdeproject>.bigdeproject-wrap');
    let closeBtn=$('.btn');
    let closeBg=$('.bigdeproject');

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
    closeBg.click(function(e){
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
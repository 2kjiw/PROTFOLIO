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
    //swiper-slider
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: {
        disableOnInteraction: false
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        on: {
        activeIndexChange: function(){
            // console.log(this.realIndex)
            let bgColors=['#d8e22d','#3d435f','#c81b21','#3d435f','#f34689','#3d435f'];
            let bgColorIdx=bgColors[this.realIndex];
    
            $('.bg').css('background', bgColorIdx);
        }
        }
    });


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
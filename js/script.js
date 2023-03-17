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
        loop: false,
        centeredSlides: true,
        /* effect: 'coverflow', */
        autoplay: {
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange: function () {
                $('.web-wrap>li').removeClass('on');
                $('.web-wrap>li').eq(this.realIndex).addClass('on');
            }
        }
    });

    $(".mySwiper").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });


    //design-wrap
    let design=$('.design-wrap>li');
    let bigde=$('.bigdeproject');
    let bigdeimg=$('.bigdeproject>.bigdeproject-wrap');
    let closeBtn=$('.bigdeproject-wrap>.nonebg');
    design.click(function(e){
        let tg=$(this);
        let i=tg.index();

        e.preventDefault();
        bigde.fadeIn();
        bigdeimg.removeClass('on');
        bigdeimg.eq(i).addClass('on');
    });
    closeBtn.click(function(e){
        e.preventDefault();
        bigde.fadeOut();
    });


    //email send
    $('.email-send').click(function(){
        alert('연락 주셔서 감사합니다! 좋은 하루 되시기 바랍니다 :)');
    });

    
    //topbtn
    $('#topBtn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop :0
        },500)
    })
});
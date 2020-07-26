$(function () {
    /************************************************
      scroll
    *************************************************/
    //visual scroll
    var cTop = $("#container").stop().offset().top;
    $(".scroll_btn").click(function () {
        $("html,body").stop().animate({
            scrollTop: cTop
        }, 1000);
    });
    //click - sectionTop으로 이동
    var posY = new Array();
    for (i = 0; i < 5; i++) {
        posY[i] = $("#container>section").eq(i).offset().top;
    }
    $("#nav>li").click(function (e) {
        e.preventDefault();
        var qNum = $(this).index();
        $("html,body").stop().animate({
            scrollTop: posY[qNum]
        }, 1000);
    });
    var me = $("section");
    $(".menu>li").click(function (e) {
        e.preventDefault();
        var qNum = $(this).index();
        $("html,body").stop().animate({
            scrollTop: posY[qNum]
        }, 1000);
        $(".all_menu").animate({
            "right": "-100%"
        }, 1000);
    });
    //top
    $(".top").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 1000);
    });
    $(".logo").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /************************************************
      skill
    *************************************************/
    var sTop = $(".skill").stop().offset().top;
    var prog = $(".skill .chart>li");
    $(window).scroll(function () {
        if ($(this).scrollTop() > sTop) {
            prog.addClass("animate");
        }
    });

    /************************************************
      project
    *************************************************/
    //move
    var pNum = 0;
    var cBtn = $(".pro_list>li");
    var obj = $(".pro_banner>li").clone();
    $(".pro_banner").append(obj);
    cBtn.on("click", function (e) {
        e.preventDefault();
        pNum = $(this).index();
        moveProject();
        cBtn.eq(pNum).addClass("active").siblings().removeClass("active");
    });
    cBtn.click(function (e) {
        e.preventDefault();
        pNum = $(this).index();
        moveProject();

    });

    function moveProject() {
        $(".pro_banner").stop().animate({
            "margin-left": -pNum * 100 + "%"
        }, 1000);
        if (pNum == 4) {
            cBtn.eq(0).addClass("active").siblings().removeClass("active");
        }
        cBtn.eq(pNum).addClass("active").siblings().removeClass("active");
    }
    $(".pro_left").on("click", function (e) {
        e.preventDefault();
        if (pNum == 0) {
            pNum = 4;
            $(".pro_banner").css("margin-left", -pNum * 100 + "%");
        }
        pNum--;
        moveProject();
    });
    $(".pro_right").on("click", function (e) {
        e.preventDefault();
        if (pNum == 4) {
            pNum = 0;
            $(".pro_banner").css("margin-left", 0);
        }
        pNum++;
        moveProject();
    });
    var banner = setInterval(function () {
        $(".pro_right").trigger("click");
    }, 4000);
    $(".pro_banner").mouseenter(function () {
        clearInterval(banner);
    });
    $(".pro_banner").mouseleave(function () {
        banner = setInterval(function () {
            $(".pro_right").trigger("click");
        }, 4000);
    });
    //hover
    $(".pro_screen").hover(function () {
        $(".scr_hover").stop().animate({
            "display": "block"
        }, 4000);
    }, function () {
        $(".scr_hover").css("display", "none");
    });
    $(".pro_screen").mouseover(function () {
        $(this).children(".scr_hover").stop().fadeIn(400);
        $(this).children(".hover_text").stop().fadeIn(400);
    });
    $(".pro_screen").mouseout(function () {
        $(this).children(".scr_hover").stop().fadeOut(400);
        $(this).children(".hover_text").stop().fadeOut(400);
    });

    /************************************************
      moblie menu
    *************************************************/
    $(".menu_btn").on("click", function (e) {
        e.preventDefault();
        $(".all_menu").stop().animate({
            "right": -20 + "px"
        }, 600);
    });
    $(".menu_close").click(function (e) {
        e.preventDefault();
        $(".all_menu").animate({
            "right": "-100%"
        }, 600);
    });

    /************************************************
      moblie resize
    *************************************************/
    $(window).resize(function () {
        var posY = new Array();
        for (i = 0; i < 5; i++) {
            posY[i] = $("#container>section").eq(i).offset().top;
        }
        $(".menu>li").click(function (e) {
            e.preventDefault();
            var qNum = $(this).index();
            $("html,body").stop().animate({
                scrollTop: posY[qNum]
            }, 1000);
        });
        var cTop = $("#container").stop().offset().top;
        $(".scroll_btn").click(function () {
            $("html,body").stop().animate({
                scrollTop: cTop
            }, 1000);
        });
    });






});

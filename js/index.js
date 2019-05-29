$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000,
    });//初始化轮播图，定时2S自动滑动
    var startX, endX;//声明触摸的两个变量
    var offset = 30;//声明触摸距离的变量
    $('.carousel-inner').on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;//当触摸开始时的x坐标；
    });
    $('.carousel-inner').on('touchmove', function (e) {
        endX = e.originalEvent.touches[0].clientX;//当触摸离开时的x坐标；
    });
    $('.carousel-inner').on('touchend', function (e) {
        //当触摸完成时进行的事件；
        var distance = Math.abs(startX - endX);//不论正负，取值为正值；
        if (distance > offset) {
            if (startX > endX) {
                $('#myCarousel').carousel('next');//当开始的坐标大于结束的坐标时，滑动到下一附图
            } else {
                $('#myCarousel').carousel('prev');//当开始的坐标小于结束的坐标时，滑动到上一附图
            }
        }
    });
    $("#we").parent().find("img").hide();//二维码默认为隐藏
    $("#we").mouseenter(function () {
        $(this).parent().find("img").show()
    }).mouseleave(function () {
        $(this).parent().find("img").hide()
    });//鼠标进入微信图标的时候显示二维码，离开的时候隐藏二维码
    $(".top").hide();//返回顶部按钮默认隐藏
    $(window).scroll(function () {
        var scrollY=$(window).scrollTop();//卷曲出去的距离
        var height=$("header").height()+$(".banner").height();//头部加轮播图的高度
        if(scrollY>height){
            $(".top").show()//当卷曲的距离大于头部加轮播图高度时显示按钮
        }else{
            $(".top").hide()//当卷曲的距离小于头部加轮播图高度时显示按钮
        }
    });//给浏览器注册滚动事件，监听卷曲出去的距离
    $(".top").click(function () {
        $("html,body").stop().animate({scrollTop:0},500);
        // $(window).scrollTop(0);
    });//给按钮注册点击事件，点击按钮的时候卷曲的距离变为0，页面滚回顶部

});
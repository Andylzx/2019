$(document).ready(function () {
    //初始化轮播图，定时2S自动滑动
    $('.carousel').carousel({
        interval: 2000,
    });
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

    //鼠标进入微信图标的时候显示二维码，离开的时候隐藏二维码
    $("#we").parent().find("img").hide();//二维码默认为隐藏
    $("#we").mouseenter(function () {
        $(this).parent().find("img").show()
    }).mouseleave(function () {
        $(this).parent().find("img").hide()
    });
    $(".top").hide();//返回顶部按钮默认隐藏

    //给浏览器注册滚动事件，监听卷曲出去的距离
    $(window).scroll(function () {
        var scrollY=$(window).scrollTop();//卷曲出去的距离
        var height=$("header").height()+$(".banner").height();//头部加轮播图的高度
        if(scrollY>height){
            $(".top").show()//当卷曲的距离大于头部加轮播图高度时显示按钮
        }else{
            $(".top").hide()//当卷曲的距离小于头部加轮播图高度时显示按钮
        }
    });

    //给按钮注册点击事件，点击按钮的时候卷曲的距离变为0，页面滚回顶部
    $(".top").click(function () {
        $("html,body").stop().animate({scrollTop:0},500);
    });

    //给关闭按钮定义一个显示主页，隐藏大图的方法
    close=function () {
        $(".render").css("display","none").empty();
        $(".mask").css("display","none");
    };

    //点击关于人物的小图，从json文本里请求数据并渲染到页面中
   $("#people").find("a").click(function () {
        var id=$(this).index();//定义一个变量获取点击的a标签的索引值
       $(".mask").fadeIn(200);
       $(".render").fadeIn(200);//点击小图的时候遮罩和页面主体显示出来
       $.ajax({
           url:"js/per.json",//人物的数据
           data:"",
           dataType:"json",
           type:"get",
           success:function (data) {
               var img=template("template",{list:data,index:id});//将数据和索引值传入
               $(".render").prepend(img);//将渲染的数据添加到render中
           }
       });
       var index=0;//初始化索引值
       left=function () {
           var width=$(".render_li").width();//获取每张轮播图的宽度
           var length=parseInt($(".render_ul").width()/$(".render_li").width());//获取照片的张数
           if(index==0){//判断索引为0，则索引变为最后一个数字
               index=length;
           }
           index--;//减1索引值对应最后一张图片
           $(".render_ul").stop().animate({marginLeft:"-"+(width*index)+"px"},500);
       };//右滑动时marginleft为负数
       right=function () {
           var width=$(".render_li").width();//获取每张轮播图的宽度
           var length=parseInt($(".render_ul").width()/$(".render_li").width());//获取照片的张数
           if(index==length-1){//判断索引对应最后一张图片时，索引值设置为-1
               index=-1;
           }
           index++;
           // $(".render_ul").css({'transform':'translateX(-'+width+'px)'});
           $(".render_ul").stop().animate({marginLeft:"-"+(width*index)+"px"},500);
       }
   });

//点击关于旅游的小图，从json文本里请求数据并渲染到页面中
    $("#travel").find("a").click(function () {
        var id=$(this).index();
        $(".mask").fadeIn(200);
        $(".render").fadeIn(200);
        $.ajax({
            url:"js/travel.json",//旅行的数据
            data:"",
            dataType:"json",
            type:"get",
            success:function (data) {
                var img=template("template",{list:data,index:id});
                $(".render").prepend(img);
            }
        });
        var index=0;
        left=function () {
            var width=$(".render_li").width();
            var length=parseInt($(".render_ul").width()/$(".render_li").width());
            if(index==0){
                index=length;
            }
            index--;
            $(".render_ul").stop().animate({marginLeft:"-"+(width*index)+"px"},500);
        };
        right=function () {
            var width=$(".render_li").width();
            var length=parseInt($(".render_ul").width()/$(".render_li").width());
            if(index==length-1){
                index=-1;
            }
            index++;
            $(".render_ul").stop().animate({marginLeft:"-"+(width*index)+"px"},500);
        }
    });

//点击一风一景的小图，从json文本里请求数据并渲染到页面中
    $("#scenery").find("a").click(function () {
        var id=$(this).index();
        $(".mask").fadeIn(200);
        $(".render").fadeIn(200);
        $.ajax({
            url:"js/scenery.json",//风景的数据
            data:"",
            dataType:"json",
            type:"get",
            success:function (data) {
                var img=template("template-scenery",{list:data,index:id});
                $(".render").prepend(img);
            }
        });
    });
});
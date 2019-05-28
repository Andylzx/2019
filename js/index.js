$(document).ready(function () {
    $('.carousel').carousel({
        interval:2000,
    });//初始化轮播图，定时2S自动滑动
    var startX,endX;//声明触摸的两个变量
    var offset = 30;//声明触摸距离的变量
    $('.carousel-inner').on('touchstart',function (e) {
        startX= e.originalEvent.touches[0].clientX;//当触摸开始时的x坐标；
    });
    $('.carousel-inner').on('touchmove',function (e) {
        endX = e.originalEvent.touches[0].clientX;//当触摸离开时的x坐标；
    });
    $('.carousel-inner').on('touchend',function (e) {
        //当触摸完成时进行的事件；
        var distance = Math.abs(startX - endX);//不论正负，取值为正值；
        if (distance > offset){
            if(startX > endX){
                $('#myCarousel').carousel('next');//当开始的坐标大于结束的坐标时，滑动到下一附图
            }else{
                $('#myCarousel').carousel('prev');//当开始的坐标小于结束的坐标时，滑动到上一附图
            }
        }
    });
$("#we").mouseenter(function () {
    $(this).parent().find("img").removeClass("erweima")
}).mouseleave(function () {
    $(this).parent().find("img").addClass("erweima")
})
//鼠标进入显示二维码，离开隐藏二维码
    // $("#v3").click(function () {
    // var form = document.createElement('form');
    // form.action = 'https://qiniu-xpc0.xpccdn.com/5954a5e5a86c6.mp4';
    // form.target = '_blank';
    // form.method = 'POST';
    // document.body.appendChild(form);
    // form.submit();
        // setTimeout('window.open("https://qiniu-xpc0.xpccdn.com/5954a5e5a86c6.mp4");', 1000);
        // window.open('https://qiniu-xpc0.xpccdn.com/5954a5e5a86c6.mp4');
    // })

});
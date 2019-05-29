// JavaScript Document
//首页效果
$(function(){
	/*pro*/
	mswMove("pro01","proleft","proright","btn01",true,"left",true,1200,1000,4000,1)
    mswMove("pro02","proleft","proright","btn02",true,"left",true,1200,1000,4000,1)
    mswMove("pro03","proleft","proright","btn03",true,"left",true,1200,1000,4000,1)
    mswMove("pro04","proleft","proright","btn04",true,"left",true,1200,1000,4000,1)
	$(".pro .prolist").eq(0).show().siblings().hide();
		$(".pro .btn").eq(0).show().siblings().hide();
		$(".pro .menu li").hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".pro .prolist").eq($(this).index()).stop(true,true).fadeIn().siblings().hide();
			$(".pro .btn").eq($(this).index()).stop(true,true).fadeIn().siblings().hide();
			})
	//应用领域
	$(".lingyu li").hover(function(){
					$(this).find(".imgIcon").stop(true,true).animate({top:-50},500);
					$(this).find("a").stop(true,true).animate({height:400,opacity:0.9},500);
					$(this).find("em").stop(true,true).animate({marginTop:144},500,function(){
						$(this).css({"border-top":"2px solid #fff","border-bottom":"2px solid #fff"})
						});
					$(this).stop(true,true).find(".icon").slideDown(500)
					},function(){
						$(this).find("em").css({"border":"none"});
						$(this).find(".icon").stop().hide();
						$(this).find("em").stop().animate({marginTop:-15},500);
						
						$(this).find(".imgIcon").stop().animate({top:305},500);
						$(this).find("a").stop().animate({height:70,opacity:1},500);
		})

		/*首页视频*/

		$(".about .video_btn").click(function () {
		    $(".about .sphezi").fadeIn(300);
		})
		$(".about .sphezi .close").click(function () {
		    $(".about .sphezi").fadeOut(300);
		})

})


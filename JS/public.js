// JavaScript Document
$(function(){
//图片放大
	$(".fdt").hover(function(){
		$(this).find(".img").stop().animate({width:'110%',height:'110%',marginLeft:'-5%',marginTop:'-5%'},500)
		},function(){
			$(this).find(".img").stop().animate({width:'100%',height:'100%',marginLeft:'0',marginTop:'0'},500)
			})
	
//jiameng.html
	msw_jzt("dian","jm06_left","jm06_right","list","p",3000,3,60)

//product.html
	$(".pc-list li").hover(function(){
		$(this).find("i").stop(true,true).animate({backgroundPositionY:-9},500)
		},function(){
			$(this).find("i").stop().animate({backgroundPositionY:0},500)
			})
//contact.html
	$(".cbox03 a").hover(function(){
		$(this).find("img").stop(true,true).animate({top:-20},500)
		},function(){
			$(this).find("img").stop().animate({top:0},500)
			})

//lianxi.html
	$(".lx-box .lx-list").eq(0).show().siblings().hide();
	$(".lx-menu li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".lx-box .lx-list").eq($(this).index()).fadeIn().siblings().hide();
		})
//rencai.html
	$(".rc-box .rc-list .rc-name").click(function(){
		$(this).parent(".rc-list").toggleClass("cur").siblings(".rc-list").removeClass("cur");
		$(this).siblings(".rc-xq").slideToggle(500);
		$(this).parent(".rc-list").siblings(".rc-list").find(".rc-xq").slideUp(500)
		})
//about.html
	$(".about-box .alist").hover(function(){
		$(this).find("b").stop(true,true).animate({height:'100%'})
		$(this).find("img").stop(true,true).animate({marginTop:-50})
		},function(){
			$(this).find("b").stop(true,true).animate({height:'0'})
			$(this).find("img").stop(true,true).animate({marginTop:0})
			})
//course.html
	$(".lc-box").css({"height":2020});
	var lc = 0;
	var lc_Len    = Math.ceil($(".lc-box .lc-list").length/2);
	console.log(lc_Len)
	$(".lc-more").click(function(){
		
		if(lc<lc_Len-4){
			lc++;
			$(".lc-box").animate({height:2020+505*lc},500);
			if(lc == lc_Len-4){
				$(".lc-more").fadeOut(500);
				}
			}else{
				
				}
		
		})
	
//company.html
	mswMove("cp-jd","cp-btn01","cp-btn02","",true,"left",true,407,1000,4000,3)


//probase.html
	$(window).load(function(){
		$(".pd-box").height($(".pd-box .active img").height())
		})
	
	msw_jzt("pdbox","pd-btn01","pd-btn02","list","span",4000,3,44)


//pictrue.html
	mswMove("pt-tu","pt-btn01","pt-btn02","",true,"left",true,1200,1000,4000,1)
	msw_jzt("pt-hl","hl-btn01","hl-btn02","list","p",4000,3,57)














})
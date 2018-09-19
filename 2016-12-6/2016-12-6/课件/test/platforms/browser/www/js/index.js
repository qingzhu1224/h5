$(document).ready(function () {

	$('.nav_menu').slider();
	//点击查看同路人
	$('.left-bg').on('click', function () {
		$('.box-one').css('display','block');
		$('.box-one').animate({'width': '850'}, 3000, function () {
		  $('.box-two').animate({'top': '478', 'height': 0}, 500,function () {
		  });
		})
	});

	//go-back  nav_click  scroll
	//nav right
	$right = ($(window).width()-$('.bill_box').width())/2-70;
	$('#menu').css({
    	"right":$right+"px",
	});
	// $('.nav-btn1').click(function(){
	// 	$("html,body").animate({scrollTop:$(".header").offset().top},1000); 
	// });
	$(window).scroll(function(){
		var $grip = $('#menu')
		,$nav = $('#menu li')
		,$nav1 = $('.num1').parent('li')
		,$nav2 = $('.num2').parent('li')
		,$nav3 = $('.num3').parent('li')
		,$nav4 = $('.num4').parent('li')
		,$nav5 = $('.num5').parent('li')
		,$nav6 = $('.num6').parent('li')
		,$nav7 = $('.num7').parent('li')
		,$box1Top = $('.bill_all').offset().top
		,$box2Top = $('.bill_canteen').offset().top
		,$box3Top = $('.bill_supermarket').offset().top 
		,$box4Top = $('.bill_hospital').offset().top
		,$box5Top = $('.bill_water').offset().top
		,$box6Top = $('.bill_dormitory').offset().top
		,$box7Top = $('.bill_nearby').offset().top
		console.log($box1Top);
		//alert($box1Top);
        if($(document).scrollTop() >= $box1Top && $(document).scrollTop() < $box2Top){
			$nav.removeClass('active');
			$nav1.addClass('active');
		}else if($(document).scrollTop() >= $box2Top && $(document).scrollTop() < $box3Top) {
			$nav.removeClass('active');
			$nav2.addClass('active');
			$('.prompt_one').css('display','block');
			$('.prompt_one').animate({width: 434}, 2500);
		}else if($(document).scrollTop() >= $box3Top && $(document).scrollTop() < $box4Top){
			$nav.removeClass('active');
			$nav3.addClass('active');
			$('.prompt_two').css('display','block');
			$('.prompt_two').animate({width: 434}, 2000);
		}else if($(document).scrollTop() >= $box4Top && $(document).scrollTop() < $box5Top){
			$nav.removeClass('active');
			$nav4.addClass('active');
			$('.prompt_three').css('display','block');
			$('.prompt_three').animate({width: 344}, 2000);
		}else if($(document).scrollTop() >= $box5Top && $(document).scrollTop() < $box6Top){
			$nav.removeClass('active');
			$nav5.addClass('active');
			$('.prompt_four').css('display','block');
			$('.prompt_four').animate({width: 244}, 1500);
		}else if($(document).scrollTop() >= $box6Top && $(document).scrollTop() < $box7Top){
			$nav.removeClass('active');
			$nav6.addClass('active');
			$('.prompt_five').css('display','block');
			$('.prompt_five').animate({width: 244}, 1500);
		}else if($(document).scrollTop() >= $box7Top){
			$nav.removeClass('active');
			$nav7.addClass('active');
			$('.prompt_six').css('display','block');
			$('.prompt_six').animate({width: 434}, 2500);
		}

		if($(window).scrollTop()>=400){
            $grip.addClass('abs');
			
        } else {
        	$grip.removeClass('abs');
        	$grip.css({
			    "right":$right+"px",
			});
        }
		if($(document).scrollTop() > 500) {
			$('.go-back').show();
			
		} else{
			$('.go-back').hide();
		}
	
		$('.go-back').click(function(){
			$("html,body").stop().animate({"scrollTop":0},1000);
		});
	});
});

$.fn.slider=function(){
	var aBtn = $(this).find('ul li');
	var aBox = $('.content_list .currency_style')
	aBtn.click(function(){
		// aBtn.removeClass('active');
		// $(this).addClass('active')
		$("html,body").animate({scrollTop:aBox.eq($(this).index()).offset().top},1000); 
	});
}

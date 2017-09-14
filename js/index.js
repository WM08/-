$(function(){
	 var num=0;
     var timer=null;
	 $('.screen1').removeClass('divs');
	/*点击换屏*/
	$('ol li').click(function(event) {
			var index=$(this).index();
			num=index;
			$('section').stop().animate({'top':-100*index+'%'});
			$(this).addClass('current').siblings().removeClass('current');
			$('section>div').eq(num).removeClass('divs').siblings().addClass('divs');
	});


/*控制滑动换屏*/
     
	$(document).mousewheel(function(e,d){
	  clearTimeout(timer);
	  timer=setTimeout(function(){
          num=num-d;
		if(num>6){
			num=6;
		}
		if(num<0){
			num=0;
		}
		$('section').stop().animate({'top':-100*num+'%'},500);
        $('ol li').eq(num).addClass('current').siblings().removeClass('current');
        $('section>div').eq(num).removeClass('divs').siblings().addClass('divs');
	  },500);
	   });


/*控制音乐*/
	$('.right').click(function(event) {
		if($(this).hasClass('rights')){
         	$('audio')[0].pause();
         	$(this).removeClass('rights');
        }else{				
            $('audio')[0].currentTime=0;
            $('audio')[0].play();
            $(this).addClass('rights');
        }
	});


	/*导航栏背景颜色变化*/
	$('ul li').eq(0).hover(function() {
		$(this).css('background','skyblue');
	}, function() {
		$(this).css('background','none');
	});

	$('ul li').eq(1).hover(function() {
		$(this).css('background','#990000');
	}, function() {
		$(this).css('background','none');
	});

	$('ul li').eq(2).hover(function() {
		$(this).css('background','green');
	}, function() {
		$(this).css('background','none');
	});

	$('ul li').eq(3).hover(function() {
		$(this).css('background','purple');
	}, function() {
		$(this).css('background','none');
	});

	$('ul li').eq(4).hover(function() {
		$(this).css('background','yellow');
	}, function() {
		$(this).css('background','none');
	});

    /*气球飞*/
   $('.screen4 h4').hover(function() {
   	$(this).children().addClass('imgs');
   }, function() {
   	$(this).children().removeClass('imgs');
   });
  
	
	


})

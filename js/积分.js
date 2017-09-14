$(function(){
	$('header ul li').click(function(event) {
		$(this).addClass('aa').siblings('li').removeClass('aa');
		var i=$(this).index();
		$('.content>div').eq(i).css('display','block').siblings().css('display','none');
	});

	$('.banner').css('background','url("images/banner01.png") no-repeat')

	$('.content2 .three h4 ul li').click(function(event) {
		$(this).addClass('ff').siblings().removeClass('ff');
	});
   
	
	$


   var imgs=['images/banner01.png','images/banner02.png','images/banner03.jpg','images/banner04.jpg']
   var num=0;
   $('.left1').click(function(event) {
   		
   		aa();

   });
   $('.right1').click(function(event) {
   		num--;
   		if(num<0){
   			num=imgs.length-1;
   		}
   		$('.banner').css('background','url("'+imgs[num]+'") no-repeat')

   		
   });

   setInterval(function(){
   	aa();
   },2000)

   function aa(){
   			num++;
   			if(num>imgs.length-1){
   				num=0;
   			}
   			$('.banner').css('background','url("'+imgs[num]+'") no-repeat');
	}
})

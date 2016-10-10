$(document).ready(function(){

	var height=$(window).height();
	var width=height*10.67;
	$('.fullback').height(height);
	$('.fullback').width(width);

	$('.skyback').height(height);
	$('.skyback').width(width);

	$('.water1').height(height);
	$('.water1').width(width-30);

	var lengthFromTop=height/3.9;
	var lengthFromLeft=width/8.5;

	$('.windmillwings').css('left',lengthFromLeft);
	$('.windmillwings').css('top',lengthFromTop);

	
	var flag=1;

	setInterval(function () {
                    if (flag==1) {
                    	$('.waterdiv2').removeClass('invisible');
                        $('.waterdiv1').addClass('invisible');
                        
                        flag=2;
                    }
                    else
                    {
                    	$('.waterdiv1').removeClass('invisible');
                        $('.waterdiv2').addClass('invisible');
                        flag=1;
                    }
                    
    }, 500);

	$('body').animate( { scrollLeft: width }, 60000);


	setTimeout(function() {   //calls click event after a certain time
	   $('.back1').addClass("invisible");
	}, 10000);

	setTimeout(function() {   //calls click event after a certain time
	   $('.back2').addClass("invisible");
	}, 20000);

	setTimeout(function() {   //calls click event after a certain time
	   $('.back3').addClass("invisible");
	}, 30000);
	
	setTimeout(function() {   //calls click event after a certain time
	   $('.back4').addClass("invisible");
	}, 38000);


	setTimeout(function() {   //calls click event after a certain time
	   $('.train').animate({
	        left: 4000}
	    ,10000,'linear');
	}, 26000);

	setTimeout(function() {   //calls click event after a certain time
	   $('.water').animate({
	        left: 4000}
	    ,10000,'linear');
	}, 16000);


	
	/*cloudAnimate1(2000);
	cloudAnimate2(10000);
	cloudAnimate3(4000);
	cloudAnimate4(6000);
	cloudAnimate5(8000);*/

	
	var bezier_params1 = {
	    start: {
	      x: 50,
	      y: 320,
	      angle: 10
	    },
	    end: {
	      x:100,
	      y:310,
	      angle: 10,
	      length: 0.25
	    }
	  }

	var bezier_params2 = {
	    start: {
	      x: 100,
	      y: 310,
	      angle: -5
	    },
	    end: {
	      x:240,
	      y:330,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_params3 = {
	    start: {
	      x: 240,
	      y: 330,
	      angle: -10
	    },
	    end: {
	      x:380,
	      y:370,
	      angle: 0,
	      length: 0.25
	    }
	  }

	  var bezier_params4 = {
	    start: {
	      x: 380,
	      y: 370,
	      angle: 0
	    },
	    end: {
	      x:480,
	      y:385,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_params5 = {
	    start: {
	      x: 480,
	      y: 385,
	      angle: 0
	    },
	    end: {
	      x:700,
	      y:365,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_params6 = {
	    start: {
	      x: 380,
	      y: 370,
	      angle: 0
	    },
	    end: {
	      x:480,
	      y:385,
	      angle: 10,
	      length: 0.25
	    }
	  }


	step1();
  	function step1()
  	{
  		$('.deer1').animate({path : new $.path.bezier(bezier_params1)},1500,function(){step2()});
  	}
	
	function step2()
  	{
  		$('.deer1').animate({path : new $.path.bezier(bezier_params2)},4000,function(){step3()});
  	}

  	function step3()
  	{
  		$('.deer1').animate({path : new $.path.bezier(bezier_params3)},4000,function(){step4()});
  	}

  	function step4()
  	{
  		$('.deer1').animate({path : new $.path.bezier(bezier_params4)},4000,function(){step5()});
  	}

  	function step5()
  	{
  		$('.deer1').animate({path : new $.path.bezier(bezier_params5)},6000,function(){step6()});
  	}

  	function step6()
  	{
  	}




  	var bezier_bird_params1 = {
	    start: {
	      x: 380,
	      y: 370,
	      angle: 0
	    },
	    end: {
	      x:700,
	      y:85,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params2 = {
	    start: {
	      x: 700,
	      y: 85,
	      angle: 0
	    },
	    end: {
	      x:900,
	      y:135,
	      angle: 10,
	      length: 0.25
	    }
	  }


	   var bezier_bird_params3 = {
	    start: {
	     x:900,
	      y:135,
	      angle: 0
	    },
	    end: {
	      x:1100,
	      y:205,
	      angle: 10,
	      length: 0.25
	    }
	  }
	  


	movebird1step1();
  	function movebird1step1()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params1)},5500,function(){movebird1step2()});
  	}

  	function movebird1step2()
  	{
  		
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params2)},3500,function(){movebird1step3()});
  	}

  	function movebird1step3()
  	{
 
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params3)},3500,function(){movebird1step4()});
  	}
  	
  	function movebird1step4()
  	{
  		$('.bird1').addClass('invisible');
  	}
});



function cloudAnimate1(time)
{
	var time=
	$('.cloud1').animate({
	        left:-200 }
	    ,time,'linear');

	setTimeout(animateToEnd1,1);
}

function animateToEnd1()
{
	$('.cloud1').animate({
	        left:1400}
	    ,1,'linear');

	setTimeout(cloudAnimate1(10000),1);
}

function cloudAnimate2(time)
{
	$('.cloud2').animate({
	        left: -200}
	    ,time,'linear');

	setTimeout(animateToEnd2,1);
}

function animateToEnd2()
{
	$('.cloud2').animate({
	        left: 1400}
	    ,1,'linear');

	setTimeout(cloudAnimate2(10000),1);
}

function cloudAnimate3(time)
{
	$('.cloud3').animate({
	        left: -200}
	    ,time,'linear');

	setTimeout(animateToEnd3,1);
}

function animateToEnd3()
{
	$('.cloud3').animate({
	        left: 1400}
	    ,1,'linear');

	setTimeout(cloudAnimate3(10000),1);
}

function cloudAnimate4(time)
{
	$('.cloud4').animate({
	        left: -200}
	    ,time,'linear');

	setTimeout(animateToEnd4,1);
}

function animateToEnd4()
{
	$('.cloud4').animate({
	        left: 1400}
	    ,1,'linear');

	setTimeout(cloudAnimate4(10000),1);
}

function cloudAnimate5(time)
{
	$('.cloud5').animate({
	        left: -200}
	    ,time,'linear');

	setTimeout(animateToEnd5,1);
}

function animateToEnd5()
{
	$('.cloud5').animate({
	        left: 1400}
	    ,1,'linear');

	setTimeout(cloudAnimate5(10000),1);
}
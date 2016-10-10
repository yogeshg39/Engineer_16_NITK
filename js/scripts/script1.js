$(document).ready(function(){

	var height=$(window).height();
	var width=height*10.67;

	console.log(height);
	console.log(width);
	$('.background').height(height);
	$('.background').width(width);

	$('.train_img').height(height);
	var disFromLeftTrain=width/2.3800;
	$('.train_img').css('left',disFromLeftTrain);
	
	var disFromLeftTrainFinal=width/1.47246;

	$('.fullback').height(height);
	$('.fullback').width(width);

	$('.skyback').height(height);
	$('.skyback').width(width);

	$('.water1').height(height);
	$('.water1').width(width-60);

	var lengthFromTop=height/3.9;
	var lengthFromLeft=width/8.5;

	$('.windmillwings').css('left',lengthFromLeft);
	$('.windmillwings').css('top',lengthFromTop);

	var lengthFromLeftWindow1=width/2.35496;
	var lengthFromTopWindow1=height/1.7131;

	$('.station_light1').css('left',lengthFromLeftWindow1);
	$('.station_light1').css('top',lengthFromTopWindow1);

	var lengthFromLeftWindow2=width/2.290;
	var lengthFromTopWindow2=height/1.7131;

	$('.station_light2').css('left',lengthFromLeftWindow2);
	$('.station_light2').css('top',lengthFromTopWindow2);

	var lengthFromLeftRocket=width/1.065;
	var lengthFromTopRocket=height/4.03797;

	$('.rocket').css('left',lengthFromLeftRocket);
	$('.rocket').css('top',lengthFromTopRocket);

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

	

	$('body').animate( { scrollLeft: width },60000);//60000


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
	   $('.train_img').animate({
	        left: disFromLeftTrainFinal}
	    ,10000,'linear');
	}, 26000);

	setTimeout(function() {   //calls click event after a certain time
	   $('.train_fire_gif').animate({
	        left: disFromLeftTrainFinal}
	    ,10000,'linear');
	}, 26000);


	setTimeout(function() {   //calls click event after a certain time
	   $('.water').animate({
	        left: 4000}
	    ,10000,'linear');
	}, 16000);

	var deerX1=width/315.52;
	var deerY1=height/1.701;
	
	var deerX2=width/66.2607;
	var deerY2=height/1.735;

	var bezier_params1 = {
	    start: {
	      x: deerX1,
	      y: deerY1,
	      angle:0
	    },
	    end: {
	      x:deerX2,
	      y:deerY2,
	      angle: 10,
	      length: 0.25
	    }
	  }


	var deerX3=width/26.50;
	var deerY3=height/1.62;

	var bezier_params2 = {
	    start: {
	      x: deerX2,
	      y: deerY2,
	      angle: -5
	    },
	    end: {
	      x:deerX3,
	      y:deerY3,
	      angle: 0,
	      length: 0.25
	    }
	  }

	var deerX4=width/15.4814;
	var deerY4=height/1.4509;

	  var bezier_params3 = {
	    start: {
	      x: deerX3,
	      y: deerY3,
	      angle: 5
	    },
	    end: {
	      x:deerX4,
	      y:deerY4,
	      angle: 0,
	      length: 0.25
	    }
	  }

	 var deerX5=width/13.7902;
	 var deerY5=height/1.434;

	  var bezier_params4 = {
	    start: {
	      x: deerX4,
	      y: deerY4,
	      angle: 0
	    },
	    end: {
	      x:deerX5,
	      y:deerY5,
	      angle: 10,
	      length: 0.25
	    }
	  }

	 var deerX6=width/11.46;
	 var deerY6=height/1.383;

	  var bezier_params5 = {
	    start: {
	      x: deerX5,
	      y: deerY5,
	      angle: 0
	    },
	    end: {
	      x:deerX6,
	      y:deerY6,
	      angle: 10,
	      length: 0.25
	    }
	  }

	 var deerX7=width/8.8465;
	 var deerY7=height/1.4683;

	  var bezier_params6 = {
	    start: {
	      x: deerX6,
	      y: deerY6,
	      angle: 0
	    },
	    end: {
	      x:deerX7,
	      y:deerY7,
	      angle: 10,
	      length: 0.25
	    }
	  }

	 var deerX8=width/7.1943;
	 var deerY8=height/1.6171;

	  var bezier_params7 = {
	    start: {
	      x:deerX7,
	      y:deerY7,
	      angle: -5
	    },
	    end: {
	      x:deerX8,
	      y:deerY8,
	      angle: -1,
	      length: 0.25
	    }
	  }

	 var deerX9=width/5.7517;
	 var deerY9=height/1.8211;

	  var bezier_params8 = {
	    start: {
	      x:deerX8,
	      y:deerY8,
	      angle: 10
	    },
	    end: {
	      x:deerX9,
	      y:deerY9,
	      angle: -10,
	      length: 0.25
	    }
	  }


	step1();
  	function step1()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params1)},500,function(){step2()});
  	}
	
	function step2()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params2)},2000,function(){step3()});
  	}
 
  	function step3()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params3)},2000,function(){step4()});
  	}

  	function step4()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params4)},1000,function(){step5()});
  	}

  	function step5()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params5)},1000,function(){step6()});
  	}

  	function step6()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params6)},3000,function(){step7()});
  	}

  	function step7()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params7)},3000,function(){step8()});
  	}

  	function step8()
  	{
  		$('.deer').animate({path : new $.path.bezier(bezier_params8)},3000,function(){});
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
	  
	   var bezier_bird_params4 = {
	    start: {
	     x:1100,
	      y:205,
	      angle: 0
	    },
	    end: {
	      x:1400,
	      y:105,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params5 = {
	    start: {
	     x:1400,
	      y:105,
	      angle: 0
	    },
	    end: {
	      x:1700,
	      y:235,
	      angle: 10,
	      length: 0.25
	    }
	  }

	   var bezier_bird_params6 = {
	    start: {
	     x:1700,
	      y:235,
	      angle: 0
	    },
	    end: {
	      x:2100,
	      y:120,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params7 = {
	    start: {
	     x:2100,
	      y:120,
	      angle: 0
	    },
	    end: {
	      x:2500,
	      y:260,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params8 = {
	    start: {
	     x:2500,
	      y:260,
	      angle: 0
	    },
	    end: {
	      x:3000,
	      y:50,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params9 = {
	    start: {
	     x:3000,
	      y:50,
	      angle: 0
	    },
	    end: {
	      x:3500,
	      y:300,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params10 = {
	    start: {
	      x: 3500,
	      y: 300,
	      angle: 0
	    },
	    end: {
	      x:3900,
	      y:85,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params11 = {
	    start: {
	      x: 3900,
	      y: 85,
	      angle: 0
	    },
	    end: {
	      x:4100,
	      y:135,
	      angle: 10,
	      length: 0.25
	    }
	  }


	   var bezier_bird_params12 = {
	    start: {
	     x:4100,
	      y:135,
	      angle: 0
	    },
	    end: {
	      x:4500,
	      y:205,
	      angle: 10,
	      length: 0.25
	    }
	  }
	  
	   var bezier_bird_params13 = {
	    start: {
	     x:4500,
	      y:205,
	      angle: 0
	    },
	    end: {
	      x:4800,
	      y:105,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var bezier_bird_params14 = {
	    start: {
	     x:4800,
	      y:105,
	      angle: 0
	    },
	    end: {
	      x:5100,
	      y:235,
	      angle: 10,
	      length: 0.25
	    }
	  }

	   var bezier_bird_params15 = {
	    start: {
	     x:5100,
	      y:235,
	      angle: 0
	    },
	    end: {
	      x:5500,
	      y:120,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  var finalXBird=width/1.1905;
	  var finalYBird=height/2.2152777;
	  var bezier_bird_params16 = {
	    start: {
	     x:5500,
	      y:120,
	      angle: 0
	    },
	    end: {
	      x:finalXBird,
	      y:finalYBird,
	      angle: 10,
	      length: 0.25
	    }
	  }

	  

	movebird1step1();
  	function movebird1step1()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params1)},2000,function(){movebird1step2()});
  	}

  	function movebird1step2()
  	{
  		
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params2)},1500,function(){movebird1step3()});
  	}

  	function movebird1step3()
  	{
 
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params3)},2500,function(){movebird1step4()});
  	}
  	
  	function movebird1step4()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params4)},3500,function(){movebird1step5()});
  	}
  	function movebird1step5()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params5)},4000,function(){movebird1step6()});
  	}
  	function movebird1step6()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params6)},4000,function(){movebird1step7()});
  	}
  	function movebird1step7()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params7)},3000,function(){movebird1step8()});
  	}
  	function movebird1step8()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params8)},2500,function(){movebird1step9()});
  	}
  	function movebird1step9()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params9)},2500,function(){movebird1step10()});
  	}

  	function movebird1step10()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params10)},2000,function(){movebird1step11()});
  	}

  	function movebird1step11()
  	{
  		
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params11)},1500,function(){movebird1step12()});
  	}

  	function movebird1step12()
  	{
 
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params12)},2000,function(){movebird1step13()});
  	}
  	
  	function movebird1step13()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params13)},2500,function(){movebird1step14()});
  	}
  	function movebird1step14()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params14)},2500,function(){movebird1step15()});
  	}
  	function movebird1step15()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params15)},2500,function(){movebird1step16()});
  	}
  	function movebird1step16()
  	{
  		$('.bird1').animate({path : new $.path.bezier(bezier_bird_params16)},2500,function(){});
  	}
  	


  	var lengthFromLeftBlink=width/3.7743;
	var lengthFromTopBlink=height/2.19452;

	$('.blink1').css('left',lengthFromLeftBlink);
	$('.blink1').css('top',lengthFromTopBlink);


	var blinkX1=lengthFromLeftBlink;
	var blinkY1=lengthFromTopBlink;

	var blinkX2=width/3.2141;
	var blinkY2=blinkY1;

	var bezier_blink_params1 = {
	    start: {
	     x:blinkX1,
	      y:blinkY1,
	      angle: 0
	    },
	    end: {
	      x:blinkX2,
	      y:blinkY1,
	      angle: 0,
	      length: 0.25
	    }
	  }

	var blinkX3=width/2.8837;
	var blinkY3=height/2.4444;

	var bezier_blink_params2 = {
	    start: {
	     x:blinkX2,
	      y:blinkY2,
	      angle: 0
	    },
	    end: {
	      x:blinkX3,
	      y:blinkY3,
	      angle: 0,
	      length: 0
	    }
	  }

	var blinkX4=width/2.6045;
	var blinkY4=height/2.063;

	var bezier_blink_params3 = {
	    start: {
	     x:blinkX3,
	      y:blinkY3,
	      angle: 0
	    },
	    end: {
	      x:blinkX4,
	      y:blinkY4,
	      angle: 0,
	      length: 0
	    }
	  }

	var blinkX5=width/2.414;
	var blinkY5=height/1.9903;

	var bezier_blink_params4 = {
	    start: {
	     x:blinkX4,
	      y:blinkY4,
	      angle: 0
	    },
	    end: {
	      x:blinkX5,
	      y:blinkY5,
	      angle: 0,
	      length: 0
	    }
	  }
	
	setTimeout(function() {   //calls click event after a certain time
	  $('.blink1').animate({path : new $.path.bezier(bezier_blink_params1)},3000,function(){blink1()});
	}, 14000);


	function blink1()
  	{
  		$('.blink1').animate({path : new $.path.bezier(bezier_blink_params2)},3000,function(){blink2()});
  	}


  	function blink2()
  	{
  		$('.blink1').animate({path : new $.path.bezier(bezier_blink_params3)},3000,function(){blink3()});
  	}

  	function blink3()
  	{
  		$('.blink1').animate({path : new $.path.bezier(bezier_blink_params4)},3000,function(){});
  	}

  	setTimeout(function() {   //calls click event after a certain time
	  $('.light1').removeClass('invisible');
      $('.light2').removeClass('invisible');
	}, 26000);



});




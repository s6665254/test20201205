	//刷新網頁時
		
		//Load淡出
		$( window ).on( "load", function() {
        	$("#loading").fadeOut(1000);
    	});
		
		//goTop
		$('html,body').animate({ scrollTop: 0 }, 'slow');
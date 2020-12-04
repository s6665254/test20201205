        $(function () {
			
			var headerHeight = 55; //#header高度
			var navHeight=55; //#myNav高度
			var myContainerPaddingTop=10;//#myContainer的上部padding
			
			//注意loading區域會成重整時滾動滑鼠軸跑位，可嘗試把下列這行註解，觀察得知
			$("#loading").css({"position": "fixed","height":"100%","width":"100%", "z-index": "999999","background":"#bbb" , "line-height":"200px" ,"text-align":"center","font-size":"40px"});

            $("#header").css({"height":headerHeight});

			$("#myContainer").css({"overflow":"hidden","padding":"10px"});
			
			$("#myNav").css({"width": "100%" });
			
            $(window).scroll(function () {
                var  scrollTop = $(window).scrollTop();
                if (scrollTop > headerHeight) {
                    $("#myNav").css({ "position": "fixed", "top": "0", "z-index": "100" });//.hide().slideDown(500);
                    $("#myContainer").css({"padding-top": myContainerPaddingTop +navHeight });//加入nav fixed後加入在畫面上的高
                } else {
                    $("#myNav").css("position", "static").slideDown();
                    $("#myContainer").css({"padding-top": myContainerPaddingTop });
                }
            });
        });
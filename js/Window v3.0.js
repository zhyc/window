define(['jquery'], function(){
	function Window(){
		this.cfg = {
			width : 500,
			height : 300,
			title : "系统消息",
			content : "",
			handle : null,
			hasCloseBtn: false
			
		};
		
	}
	Window.prototype = {
		alert : function(cfg){
				var CFG = $.extend(this.cfg, cfg);
				var boundingBox = $('<div class = "boundingBox">' + 
									'<div class="boundingHeader">' + CFG.title + '</div>' +
									'<div class="boundingContent">' + CFG.content + '</div>' +
									'<div class="boundingFooter"> <input type="button" value = "确定"> </div>' +
								'</div>'
								);
				boundingBox.appendTo('body');
				var boundingBtn = boundingBox.find(".boundingFooter input")
				boundingBtn.on('click', function(){
					CFG.handle && CFG.handle();   //判断是否传入 handle，传入就执行下，没传入就什么都不做
					boundingBox.remove();
				}) ;
	//			$.extend(this.cfg, cfg);  //合并属性
				
				var left = $(window).width()/2  - this.cfg.width/2
				var top  = $(window).height()/2 - this.cfg.height/2
				boundingBox.css({
					width  : CFG.width + 'px',
					height : CFG.height + 'px',
					left   : left + 'px',
					top    : top + 'px'
					
				})
				if(CFG.hasCloseBtn){
					var closeBtn = $('<div class="closeBtn">X</div>');
					closeBtn.appendTo(boundingBox);
					closeBtn.on('click', function(){
						boundingBox.remove();
					})
				}
		},
		confirm : function(){
			
		},
		prompt : function(){
			
		}
		
	}
	
	return {
		Window : Window
	}
	
})
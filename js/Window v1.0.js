define(['jquery'], function(){
	function Window(){
		this.cfg = {
			width : 500,
			height: 300
		};
		
	}
	Window.prototype = {
		alert: function(content ,handle, cfg){
			var boundingBox = $('<div class = "boundingBox"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(content);
			var boundingBtn = $("<input type = 'button' value = '确定' class ='boundingBtn' />");
			boundingBtn.appendTo(boundingBox);
			boundingBtn.on('click', function(){
				handle && handle();   //判断是否传入 handle，传入就执行下，没传入就什么都不做
				boundingBox.remove();
			}) ;
			$.extend(this.cfg, cfg);  //合并属性
			
			var left = $(window).width()/2  - this.cfg.width/2
			var top  = $(window).height()/2 - this.cfg.height/2
			boundingBox.css({
				width  : this.cfg.width + 'px',
				height : this.cfg.height + 'px',
				left   : left + 'px',
				top    : top + 'px'
				
			})
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
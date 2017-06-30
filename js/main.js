require.config({
	paths : {
		jquery : 'jquery-1.11.0'
	}
})


require(['jquery','Window'] , function($, w){
	$("#a").on("click", function(){
//		new w.Window().alert("welcome",function(){
//			console.log('btn click')
//		},{
//			width:300,
//			heigth:200
//		});
		new w.Window().alert({
			content :"welcome",
			handle : function(){
				alert("welcome")
			},
			width: 300,
			height: 200,
			btnTitle:"试一试",
			skinClassName: "skin_b",
			hasCloseBtn: true
		})

	})
})

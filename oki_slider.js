oki_slider=function(e){
  
  var imgs=$(e).find("img");
  var picbox=$("<div class='picbox'></div>");	
  var btnbox=$("<div class='btnbox'></div>");
  for(var i=0;i<imgs.length;i++){
	picbox.append( $(e).find("img").eq(i).clone() );
	btnbox.append( $(e).find("img").eq(i).clone() );
  }
  picbox.css("width","100%").css("height","100%").css("position","relative");
  picbox.find("img").css("width","100%").css("height","100%").css("position","absolute").css("opacity",0);
  picbox.find("img").eq(0).css("opacity",1);
  
  btnbox.css("position","relative").css("margin-top","-8%")
  btnbox.find("img").css("width","8%").css("height","8%").css("border","1px #ffffff solid").css("margin-left","2%").css("border-radius","3px").css("cursor","pointer");
  btnbox.find("img").on("click",function(){
	 $(this).parents(".oki_slider").find(".picbox img").css("opacity",0);
	 $(this).parents(".oki_slider").find(".picbox img[src='"+$(this).attr("src")+"']").css("opacity",1); 
  })
   
  $(e).html("");
  $(e).append( picbox );
  $(e).append(btnbox);
  
}



$(function(){
  $(".oki_slider").each(function(){  
     oki_slider($(this));  
  });	
  
  function oki_slider_style(){
	  /*
	  [style]
	    <style>
		  .oki_slider img{
			 transition: all .8s;
			 -webkit-transition: all .8s; 
		  }
		
	    </style>
	  [style]
	  */
	  
  }
  
  var style=oki_slider_style.toString().split("[style]");
  $("body").append(  $(style[1]) );
  
})
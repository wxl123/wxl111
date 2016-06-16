window.onload=function(){
	document.onkeydown=function(e){
		var Img=document.getElementById("img1");
		e=e||event;
		switch(e.keyCode){
			case 38:
				Img.src='img/top.png';
				var str=getMystyle(Img,"top").replace("px","");			
				Img.style.top=parseInt(str)-5+"px";
				if(parseInt(Img.style.top)<=0){
					Img.style.top=0;
				}
			break;
			case 40:
				Img.src='img/down.png';
				var str=getMystyle(Img,"top").replace("px","");			
				Img.style.top=parseInt(str)+5+"px";
				var cHeight=getClientHeight()-32;				
				if(parseInt(Img.style.top)>=cHeight){
					Img.style.top=cHeight+"px";
				}
			break;
			case 37:
				Img.src='img/left.png';
				var str=getMystyle(Img,"left").replace("px","");			
				Img.style.left=parseInt(str)-5+"px";
				if(parseInt(Img.style.left)<=0){
					Img.style.left=0;
				}
			break;
			case 39:
				Img.src='img/right.png';
				var str=getMystyle(Img,"left").replace("px","");
				//需将px替换成空，目的是将px去掉，但是去掉后还是字符类型加5直接相连了
				//并没有相加所以需要将其转换成整型再与5相加就可以相加了。				
				Img.style.left=parseInt(str)+5+"px";
				var cWidth=getClientWidth()-32;	
				if(parseInt(Img.style.left)>=cWidth){
					Img.style.left=cWidth+"px";
				}				
			break;
		}
	}			

	
	
	

}
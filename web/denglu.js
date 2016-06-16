window.onload=function(){
	var loginBtn=document.getElementById("loginbtn");
	loginBtn.onclick=function(){
		var cover=document.getElementById("cover");
		cover.style.display="block";
		cover.style.height=getClientHeight()+"px";
		var login=document.getElementById("login");
		login.style.display="block";

		if(getCookie("LX")==""&&getCookie("LY")==""){
			login.style.left=(getClientWidth()-login.offsetWidth)/2+"px";
			login.style.top=(getClientHeight()-login.offsetHeight)/2+"px";
		}
		else{
			login.style.left=getCookie("LX")+"px";
			login.style.top=getCookie("LY")+"px";
			
		}
		

		var Close=document.getElementById("close");
		Close.onclick=function(){
			login.style.display="none";
			cover.style.display="none";
		}
		var bt=document.getElementById("login-head");
		bt.onmousedown=function(e){
			e=e||event;											
			if(e.button==0||e.button==1){
				//myPreventDefault(e);
				if(e.preventDefault){
					e.preventDefault();
				}
				else{
					e.returnValue=false;
				}
				this.style.cursor="move";	
				var dx=e.clientX-login.offsetLeft;
				var dy=e.clientY-login.offsetTop;
				var x=login.offsetLeft;
				var y=login.offsetTop;

				document.onmousemove=function(e){					
					e=e||event;
					x=e.clientX-dx;
					y=e.clientY-dy;
					if(x<=0){
						x=0;
					}
					if(y<=0){
						y=0;
					}
					if(x>=getClientWidth()-login.offsetWidth){
						x=getClientWidth()-login.offsetWidth;
					}
					if(y>=getClientHeight()-login.offsetHeight){
						y=getClientHeight()-login.offsetHeight;
					}
					login.style.left=x+"px";
					login.style.top=y+"px";
				}
				document.onmouseup=function(){
					bt.style.cursor="auto";
					document.onmousemove=null;
					var date=new Date();
					date.setDate(date.getDate()+3)
					setCookie("LX",x,date);
					setCookie("LY",y,date);

				}
			}
		}

		var Df=getMyClassName(login,"login-form");
		var img=Df[0].children[0];
		img.onmousedown=function(e){
			e=e||event;
			myPreventDefault(e);

		}

		
	}	


}
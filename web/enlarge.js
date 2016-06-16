(function(){
	function Enlarge(d,url){
		this.target=d;
		this.width=580;
		this.height=360;
		this.scale=2;
		this.url=url

	}
	Enlarge.prototype={
		init:function(){
			this.createHTML();
			this.Hover();

		},
		createHTML:function(){
			//创建LeftDiv
			this.div = document.createElement("div");
			this.div.style.cssText="width:"+this.width+"px;height:"+this.height+"px;border:1px solid #eee;position:relative";
			this.img = document.createElement("img");
			this.img.style.cssText="width:"+this.width+"px;height:"+this.height+"px;"
			this.img.src=this.url;
			this.img.setAttribute("class","ft");
			this.div.appendChild(this.img);
			this.target.appendChild(this.div);
			//创建滤镜
			this.lay=document.createElement("span");
			this.lay.style.cssText="display:block;width:"+(this.width/this.scale)+"px;height:"+(this.height/this.scale)+"px;position:absolute;background:#fff;opacity:0.5;filter:alpha(opacity=50);top:0;border:1px solid #eee;display:none";
			this.div.appendChild(this.lay);
			//创建RightDiv
			this.Rdiv=document.createElement("div");
			this.Rdiv.style.cssText="width:"+this.width+"px;height:"+this.height+"px;position:absolute;left:"+(this.target.offsetLeft+this.width+10)+"px;top:"+this.target.offsetTop+"px;overflow:hidden";
			this.bigImg=document.createElement("img");
			this.bigImg.src=this.url;
			this.bigImg.style.cssText="width:"+(this.img.offsetWidth*this.scale)+"px;height:"+(this.img.offsetHeight*this.scale)+"px;display:none";
			this.Rdiv.appendChild(this.bigImg);
			this.target.appendChild(this.Rdiv);


		},
		Hover:function(){
			var that=this;
			this.div.onmousemove=function(e){
				e=e||event;
				that.lay.style.display="block";
				that.bigImg.style.display="block";
				var lx=e.clientX-this.offsetLeft-that.lay.offsetWidth/2;
				var ly=e.clientY-this.offsetTop-that.lay.offsetHeight/2
				if(lx<=0){
					lx=0;
				}
				if(lx>=this.offsetWidth-that.lay.offsetWidth){
					lx=this.offsetWidth-that.lay.offsetWidth;
				}
				if(ly<=0){
					ly=0;
				}
				if(ly>=this.offsetHeight-that.lay.offsetHeight){
					ly=this.offsetHeight-that.lay.offsetHeight;
				}

				that.lay.style.left=lx+"px";
				that.lay.style.top=ly+"px";
				that.bigImg.style.marginLeft=-1*that.scale*lx+"px";
				that.bigImg.style.marginTop=-1*that.scale*ly+"px";



			}
			this.div.onmouseout=function(){
				that.lay.style.display="none";
				that.bigImg.style.display="none";
			}


		}
	}

	
	window.fangDa=function(d,url){
		var d=document.getElementById(d);
		return new Enlarge(d,url)

	}
})();
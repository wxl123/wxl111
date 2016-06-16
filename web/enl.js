(function(){
	function Enlarge(d,url){
		this.width=300;
		this.height=300;
		this.url=url;
		this.scale=4;
		this.target=document.getElementById(d);
	}
	Enlarge.prototype={
		init:function(){
			this.createHTML();
			this.Hover();

		},
		createHTML:function(){
			//创建LeftDiv
			this.div=document.createElement("div");
			this.div.style.cssText= "width:"+this.width+"px;height:"+this.height+"px;"
								  + "border:1px solid #eee;position:relative";
			//创建缩略图
			this.smallImg=document.createElement("img");
			this.smallImg.src=this.url;
			this.smallImg.style.cssText="width:"+this.width+"px;height:"+this.height+"px;";
		
			//创建滤镜
			this.lay=document.createElement("span");
			this.lay.style.cssText= "display:block;width:"+(this.width/this.scale)+"px;"
								  + "height:"+(this.height/this.scale)+"px;"
								  + "position:absolute;left:0;top:0;background:#fff;"
								  + "opacity:0.5;filter:alpha(opacity=50);border:1px solid #eee;display:none";
			//创建rightDiv
			this.rightDiv=document.createElement("div");
			this.rightDiv.style.cssText= "width:"+this.width+"px;height:"+this.height+"px;"
									   + "position:absolute;left:"+(this.target.offsetLeft+this.width+10)+"px;"
									   + "border:1px solid #eee;top:"+this.target.offsetTop+"px;overflow:hidden;display:none";
			//创建大图
			this.bigImg=document.createElement("img");
			this.bigImg.src=this.url;
			this.bigImg.style.cssText="width:"+(this.width*this.scale)+"px;height:"+(this.height*this.scale)+"px;";
			this.div.appendChild(this.smallImg);
			this.div.appendChild(this.lay);
			this.rightDiv.appendChild(this.bigImg);
			this.target.appendChild(this.div);
			this.target.appendChild(this.rightDiv);

		},
		Hover:function(){
			var that=this;
			this.div.onmousemove=function(e){
				that.lay.style.display="block";
				that.rightDiv.style.display="block";
				e=e||event;
				var lx=e.clientX-that.target.offsetLeft-that.lay.offsetWidth/2;
				var ly=e.clientY-that.target.offsetTop-that.lay.offsetHeight/2;
				if(lx<=0){
					lx=0;
				}
				if(ly<=0){
					ly=0;
				}
				if(lx>=this.offsetWidth-that.lay.offsetWidth){
					lx=this.offsetWidth-that.lay.offsetWidth;

				}
				if(ly>=this.offsetHeight-that.lay.offsetHeight){
					ly=this.offsetHeight-that.lay.offsetHeight;
				}

				that.lay.style.left=lx+"px";
				that.lay.style.top=ly+"px";
				that.bigImg.style.marginLeft=that.scale*lx*-1+"px";
				that.bigImg.style.marginTop=that.scale*ly*-1+"px";


			}
			this.div.onmouseout=function(){
				that.lay.style.display="none";
				that.rightDiv.style.display="none";

			}

		}
	}
	window.$=function(d,url){
		return new Enlarge(d,url);
	}
})();
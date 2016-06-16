function getStyle(obj,attrName){
	if(obj.currentStyle){
		return obj.currentStyle[attrName]=="auto"?0:obj.currentStyle[attrName];
	}
	else{
		return window.getComputedStyle(obj,null)[attrName]=="auto"?0:window.getComputedStyle(obj,null)[attrName];
	}
}
function startMove(obj,attrJSON,callback){
	clearInterval(obj.timer); 
	obj.timer = setInterval(function(){
		var targetCount = 0;
		var jsonCount = 0;
		for(var attrName in attrJSON){
			jsonCount++;
			var curValue;
			if(attrName == "opacity"){
				curValue = Math.round(getStyle(obj,attrName)*100);
			}
			else{
				curValue = parseInt(getStyle(obj,attrName));
			}
			var speed = (attrJSON[attrName] - curValue) / 8;
			
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(curValue == attrJSON[attrName]){
				targetCount++;
			}
			else{
				if(attrName == "opacity"){
					obj.style.opacity = (curValue + speed) / 100;
					obj.style.filter = "alpha(opacity:"+(curValue + speed)+")";
				}
				else{
					obj.style[attrName] = curValue + speed + "px";
				}
			}
		}
		if (targetCount == jsonCount) {
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
	},20);
}
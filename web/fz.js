function toFormat(dateobj,splitstr){
	if(splitstr==undefined){
		splitstr="";
	}
	var year=dateobj.getFullYear();
	var month=dateobj.getMonth()+1;
	if(month<10){
		month="0"+month;
	}
	var day=dateobj.getDate();
	if(day<10){
		day="0"+day;
	}
	var hour=dateobj.getHours();
	if(hour<10){
		hour="0"+hour;
	}
	var minute=dateobj.getMinutes();
	if(minute<10){
		minute="0"+minute;
	}

	var second=dateobj.getSeconds();
	if(second<10){
		second="0"+second;
	}
	return year+splitstr+month+splitstr+day+" "+hour+":"+minute+":"+second
}
function isLeapYear(year){
	var result;
	if(year%4==0&&year%100!=0||year%400==0){
		result=true;
	}
	else{
		result=false;
	}
	return result;
}
function getMonthlength(month){
	var dobj=new Date();
	dobj.setMonth(month);
	dobj.setDate(0);
	return dobj.getDate();
}
function addDays(day){
 	var dobj=new Date();
 	var s=dobj.getTime();
 	var ds=day*24*60*60*1000;
 	var dbs=new Date(ds+s);
 	return toFormat(dbs,"-");
 }
function getdiff(starttime,endtime){
 	var stime=new Date(starttime);
 	var etime=new Date(endtime);
 	var diff=Math.abs(stime.getTime()-etime.getTime());

 	var result="";
 	if(diff<1000*60){
 		result="刚刚";
 	}
 	else if(diff>=60*1000&&diff<60*60*1000){
 		result=Math.floor(diff/(60*1000))+"分钟前";
 	}
 	
 	else if(diff>=60*60*1000&&diff<24*60*60*1000){
 		result=	Math.floor(diff/(60*60*1000))+"小时前";
 	}
 	else{
 		result=Math.floor(diff/(24*60*60*1000))+"天前";
 	}
 	return result;
 }
 function getClientHeight(){
 	var result=0;
 	if(window.innerHeight){
 		result=window.innerHeight;
 	}
 	else{
 		if(document.compatMode=="CSS1Compat"){
 			result=document.documentElement.clientHeight;
 		}
 		else{
 			result=document.body.clientHeight;
 		}
 	}
 	return result;
 }
function getMychildNode(element){
	var s=element.childNodes;
	var arr=[];
	for(var i=0;i<s.length;i++){
		if(s[i].nodeType==1){
			arr.push(s[i]);
		}
	}			
	return arr;
}
function getMyFirstChild(element){
var d=element.childNodes;
var f=null;
for(var i=0;i<d.length;i++){
	if(d[i].nodeType==1){
		f=d[i]
		break;
	}
}
return f;
}

function getMyLastChild(element){
var d=element.childNodes;
var f=null;
for(var i=d.length-1;i>=0;i--){
	if(d[i].nodeType==1){
		f=d[i]
		break;
	}
}
return f;
}		
function preSibling(element){
	var e=element.previousSibling;
	while(e!=null&&e.nodeType!=1){//当前一个节点不等于null并且找到的还不是一个元素标签
		e=e.previousSibling;//将这个标签的前一个继续赋值给e进行循环判断直至找不到为null或找
	}                    //或找到元素标签结束循环
	return e;//返回
}
function getNextSibling(element){
	var e=element.nextSibling;
	while(e!=null&&e.nodeType!=1){//当前一个节点不等于null并且找到的还不是一个元素标签
		e=e.nextSibling;//将这个标签的下一个继续赋值给e进行循环判断直至找不到为null或找
	}                    //或找到元素标签结束循环
	return e;//返回
}
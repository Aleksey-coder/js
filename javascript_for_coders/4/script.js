window.onscroll=del;

window.onload=function() {
document.getElementById("pic").onclick=look;
document.getElementById("nz").onclick=nz;
document.getElementById("vp").onclick=vp;
document.getElementById("photo").onclick=del;
document.getElementById("cl").onclick=del;
};

let mas=["0", "1", "2", "3", "4", "5", "6", "7", "8"];

function look(event) {
let sc=window.pageYOffset; 
document.getElementById("bas").style.top=sc+"px";
}

function look(event) {
if(event.target.tagName=="IMG"){
var sc=window.pageYOffset;

document.getElementById("bas").style.top=sc+"px"; 
document.getElementById("view").style.top=sc+"px"; 
document.getElementById("photo").src=event.target.src; 
document.getElementById("vp").style.visibility="visible"; 
document.getElementById("nz").style.visibility="visible";

  var posi=document.getElementById("photo").src;
	for(var i=0; i<mas.length; i++) {
		if(posi.indexOf("city/"+mas[i]+".jpg")>=0) {
			if(i==0) {
				document.getElementById("nz").style.visibility="hidden";
	}

		if(i==(mas.length-1)) {
				document.getElementById("vp").style.visibility="hidden";
		}
	}
}		
	
document.getElementById("bas").style.visibility="visible";
document.getElementById("view").style.visibility="visible";
}

return false;
}
	
function nz() {
	document.getElementById("vp").style.visibility="visible";
	var posi=document.getElementById("photo").src;
	for(var i=0; i<mas.length; i++) {
	if(posi.indexOf("city/"+mas[i]+".jpg")>=0) {
		i--;
		document.getElementById("photo").src="city/"+mas[i]+".jpg";
		if(i==0) {
		document.getElementById("nz").style.visibility="hidden";
		}
		 break;
     		 }
  	 }
	return false;
		}		

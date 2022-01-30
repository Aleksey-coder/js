window.onload=function()
{
document.getElementById("pic").onclick=look;
document.getElementById("view").onclick=del;
};

function look(event) {
if(event.target.tagName=="IMG"){
document.getElementById("photo").src=event.target.src;
document.getElementById("view").style.visibility="visible";
document.getElementById("bas").style.visibility="visible";
}
return false;
}
 

function del()
{
document.getElementById("view").style.visibility="hidden"; 
document.getElementById("bas").style.visibility="hidden"; 
document.getElementById("photo").src="point.jpg"; return false;
}

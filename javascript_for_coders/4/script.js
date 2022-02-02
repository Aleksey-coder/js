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

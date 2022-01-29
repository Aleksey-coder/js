window.onload=function()
{
document.getElementById("lin").onclick=look;
document.getElementById("view").onclick=del;
};

function look()
{
document.getElementById("view").style.visibility="visible"; 
document.getElementById("bas").style.visibility="visible"; return false;
}

function del()
{
document.getElementById("view").style.visibility="hidden"; 
document.getElementById("bas").style.visibility="hidden";
}

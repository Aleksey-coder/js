function clock(){
 var date = new Date(),
 hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
 minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
 seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
 console.log(hours + ':' + minutes + ':' + seconds);
}
setInterval(clock, 1000);
clock();

//<div id="clock"></div>

//function clock(){
 //var date = new Date(),
 //hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
 //minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
 //seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
// document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
//}
//setInterval(clock, 1000);
//clock();


//let fixtime = document.getElementById("fix-time");
//function time() {
//	let clock = new Date().toLocaleString();
//	fixtime.textContent = clock;
//}
//setInterval(time,150);




//<span id="time">00:00:00</span>

//<script type="text/javascript">  
//setInterval(function () {  
//date = new Date(),  
//h = date.getHours(),  
//m = date.getMinutes(),  
//s = date.getSeconds(),  
//h = (h < 10) ? '0' + h : h,  
//m = (m < 10) ? '0' + m : m,  
//s = (s < 10) ? '0' + s : s,  
//document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
//}, 1000);  
//</script>
window.onload=cycle;

let t=2;
let d=0;

function cycle() {
var ph="p"+d;
if(d<8) {
   if(t<=0) {
      d++;
      t=2;
      cycle();
      } else {
      document.getElementById(ph).style.opacity=t;
      t=t-0.01;
      window.setTimeout(cycle, 20);
      }
   } else {
   document.getElementById("p0").style.zIndex=6;
   document.getElementById("p0").style.opacity=2;
   if(t<=0) {
      document.getElementById("p0").style.zIndex=15;
      document.getElementById("p0").style.opacity=2;
      document.getElementById("p1").style.opacity=2;
      document.getElementById("p2").style.opacity=2;
      document.getElementById("p3").style.opacity=2;
      document.getElementById("p4").style.opacity=2;
      document.getElementById("p5").style.opacity=2;
      document.getElementById("p6").style.opacity=2;
      document.getElementById("p7").style.opacity=2;
      document.getElementById("p8").style.opacity=2;
      d=0;
      ph="p0";
      t=2;
      cycle();
      } else {
      document.getElementById(ph).style.opacity=t;
      t=t-0.01;
      window.setTimeout(cycle, 20);
      }
   }
}

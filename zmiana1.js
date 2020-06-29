var numer= Math.floor(Math.random()*3)+1;

function schowaj(){
$("#container1c").fadeOut(500);
}
function zmienslajd(){
if(numer>2){
numer=1;
}else{
numer++;
}
var plik="<img src=\"img/slajd"+numer+".png\"/>";
document.getElementById("container1c").innerHTML= plik;
$("#container1c").fadeIn(500);

setTimeout("zmienslajd()", 5000);
setTimeout("schowaj()", 4500);
}
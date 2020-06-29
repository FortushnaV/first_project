function s(){
$("#container2b").fadeOut(500);
}
function z(){

var a="<img src=\"img/reklama.png\"/>";;
document.getElementById("container2b").innerHTML= a;
$("#container2b").fadeIn(500);

setTimeout("z()", 3000);
setTimeout("s()", 2500);
}
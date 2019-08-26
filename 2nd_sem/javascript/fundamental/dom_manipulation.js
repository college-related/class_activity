// interface between js and html+css =DOM

var h = document.getElementsByTagName("h1");
h.style.color = "red";

var b = document.getElementById("box");
b.style.border = "2px solid";
b.style.height = "200px";

var bx = document.getElementsByClassName("boxes");
bx.style.border = "1px solid";
bx.style.height = "100px";

document.querySelectorAll(".new_boxes").style.height = "100px";
document.querySelectorAll(".new_boxes").style.border= "1px solid";
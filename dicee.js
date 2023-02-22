// alert("working");   
var m = Math.floor(Math.random()*6) + 1;
var n = Math.floor(Math.random()*6) + 1;
var a = document.querySelector(".img1");
var b = document.querySelector(".img2");
var link1 = "images/dice" + m + ".png";
var link2 = "images/dice" + n + ".png";
a.setAttribute("src", link1);
b.setAttribute("src", link2);
// a = "images/dice3.png";

document.querySelector("h1").style.color = "green";
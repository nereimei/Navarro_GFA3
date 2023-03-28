var num1, num2, num3

num1 = Math.ceil(Math.random()*20);
num2 = Math.ceil(Math.random()*20);
num3 = Math.ceil(Math.random()*20);

var max = Math.max(num1, num2, num3);
var names = [
    "Acelar",
    "Barcenas",
    "Coquilla",
    "Daradar",
    "Eduque",
    "Figuracion",
    "Galendez",
    "Hathaway",
    "Irving",
    "Jayme",
    "Kuizon",
    "Lademora",
    "Maceda",
    "Nasayao",
    "Orcelino",
    "Pedral",
    "Quilao",
    "Rosalejos",
    "Tagimacruz",
    "Seblos-Sorongon",
    "Uganda"
]

var armin = num2*num3;
var meens = armin%60;
var ahrs = Math.floor(armin/60);
var rname = names[num1-1];

document.getElementById("num1").innerHTML += num1;
document.getElementById("num2").innerHTML += num2;
document.getElementById("num3").innerHTML += num3;

document.getElementById("a").innerHTML += "They must survive the Barren land for " + max + " days.";
document.getElementById("b").innerHTML += "This year's reaper is: " + rname;
document.getElementById("c").innerHTML += "Total survival time: " + ahrs + " hours and " + meens + " minutes." ;
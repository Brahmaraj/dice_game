var min = 1;
var max = 24;
function roll_the_dice(dice){
    var x = getRandom(max,min);
    var y = getRandom(max,min)
    document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    console.log("button works")
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
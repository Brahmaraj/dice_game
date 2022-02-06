let min = 1;
let max = 24;
let first_player = true;
let second_player = false;
// var dice_roll_button = document.getElementsByClassName()
function roll_the_dice(dice){
    var x = getRandom(max,min);
    var y = getRandom(max,min);
    document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    console.log(x);
    console.log(y);
    if(first_player){
        document.getElementById("left-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)';
        document.getElementById("right-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        first_player = false;
        second_player = true;
    }
    else if(second_player){
        document.getElementById("left-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        document.getElementById("right-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)';
        first_player = true;
        second_player = false;
    }
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
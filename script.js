let first_player = true;
let second_player = false;
let horizontal_dice = [1,3,6,4]
let vertical_dice = [1,2,6,5]

function roll_the_dice1(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(first_player){
        document.getElementById("left-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)';
        document.getElementById("right-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        first_player = false;
        second_player = true;
    }
}

function roll_the_dice2(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(second_player){
        document.getElementById("left-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        document.getElementById("right-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)';
        document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        first_player = true;
        second_player = false;
    }
}

function getRandom() {
  return (Math.floor(Math.random() * 40)) * 90;
}

let first_player = true;
let second_player = false;
console.log(Math.floor(Math.random()*10));
// $("#button1").click(function() {
    
// });
function roll_the_dice1(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(first_player){
        let dice_number = mathRandom();
        setTimeout(() => {
        $([document.documentElement, document.body]).animate({
                scrollTop: $(".scorecard2").offset().top
            }, 1000);
        document.getElementById("left-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)';
        document.getElementById("right-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)'; 
        first_player = false;
        second_player = true;
        document.getElementById("score1").textContent = Number(document.getElementById("score1").textContent) + dice_number;
        }, 3000);
        document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        
    }
}

function roll_the_dice2(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(second_player){
        setTimeout(() => {
        $([document.documentElement, document.body]).animate({
                scrollTop: $(".scorecard1").offset().top
            }, 1000);
        document.getElementById("left-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        document.getElementById("right-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)'; 
        first_player = true;
        second_player = false;
        }, 3000);
        document.getElementById(dice).style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        
    }
}

function getRandom() {
  return (Math.floor(Math.random() * 40)) * 90;
}

function mathRandom(){
    let num = Math.floor(Math.random()*10);
    if(num<=6 && num>0)
        return num;
    else 
       return mathRandom();
}

console.log(mathRandom())
let first_player = true;
let second_player = false;
let last_num = 1;
let horizontal_number = [0,[360,360],[270,360],[360,270],[360,90],[90,360],[180,360]]
console.log(Math.floor(Math.random()*10));

let roll_the_dice1 = throttle(roll_the_dice11,3010);
let roll_the_dice2 = throttle(roll_the_dice22,3010);

function roll_the_dice11(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(first_player){
        let dice_number = mathRandom();
        document.getElementById(dice).style.transform = `rotateX(${horizontal_number[dice_number][0]+(mathRandom()*360)}deg) rotateY(${horizontal_number[dice_number][1]+(mathRandom()*360)}deg)`;
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
    }
}

function roll_the_dice22(dice){
    var x = getRandom();
    var y = getRandom();
    console.log(x);
    console.log(y);
    if(second_player){
         let dice_number = mathRandom();
        document.getElementById(dice).style.transform = `rotateX(${horizontal_number[dice_number][0]+(mathRandom()*360)}deg) rotateY(${horizontal_number[dice_number][1]+(mathRandom()*360)}deg)`;
        setTimeout(() => {  
        $([document.documentElement, document.body]).animate({
                scrollTop: $(".scorecard1").offset().top
            }, 1000);
        document.getElementById("left-half").style.backgroundColor = 'hsla(0, 4%, 23%, 0.8)';
        document.getElementById("right-half").style.backgroundColor = 'rgba(54, 236, 63,0.1)'; 
        first_player = true;
        second_player = false;
        document.getElementById("score2").textContent = Number(document.getElementById("score2").textContent) + dice_number;
        }, 3000);   
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
//throttle function for dice to not spin once started
function throttle(func,limit){
    let flag = true;
    return function (){
        let context = this;
        let args = arguments;
        if(flag){
            func.apply(context,args);
            flag = false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
    }
}
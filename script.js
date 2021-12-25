var count1=0;
var count2=0;
var turn=1;
$('#roll1').click(function(){
    if(turn==1){
    $("#box1").addClass('on');
    //$('#play_again').style.display = 'none';
    $("#box1").one('animationend',function(){
        $('#box1').removeClass('on');
        var number1 = randomNumber();
        count1 += number1;
        document.getElementById('box1').innerHTML= count1,2000;
    finishGame(count1,turn);
    $('#roll1').css('background-color','#A3423C');
    $('#roll2').css('background-color','#146356');
    if(number1==1){
        turn=1;
        $('#roll1').css('background-color','#146356');
        $('#roll2').css('background-color','#A3423C');
    }
    else{
        turn=2;
    }
    
    }); 
}
});

$('#roll2').click(function(){
    if(turn==2){
    $("#box2").addClass('on');
    var number2 = randomNumber();
    count2 += number2;
    //$('play_again').style.display = 'none';
    $("#box2").one('animationend',function(){
        $('#box2').removeClass('on');
        document.getElementById('box2').innerHTML=count2,2000;
    finishGame(count2,turn);
    $('#roll2').css('background-color','#A3423C');
    $('#roll1').css('background-color','#146356');
    if(number2==1){
        turn=2;
        $('#roll2').css('background-color','#146356');
        $('#roll1').css('background-color','#A3423C');
    }
    else{
        turn=1;
    }
    });
    
}
});
function randomNumber(){
    var num = Math.random()*10;
    console.log(num);
    num = Math.round(num);
    console.log(num);
    if(num>6){
        return Math.round(num/2);
    }
    else if(num==0){
        return 1;
    }
    else{
        return Math.round(num);
    }
}
function finishGame(tot,winner){
    if(tot>=20){
        if(winner==1){
            document.getElementById('modal-div').innerHTML = "Player 1 Wins";
            document.getElementById('modal-div').style.display = "grid";
            setTimeout(reloadIt,5000);
        }
        else if(winner==2){
            document.getElementById('modal-div').innerHTML = "Player 2 Wins";
            document.getElementById('modal-div').style.display = "grid";
            setTimeout(reloadIt,5000);
        }
    }
   // setTimeout(location.reload(),5000);
}
function reloadIt(){
    location.reload();
}
$('#rule').mouseenter(function(){
    $(this).html("Player 1 will play first <br> IF anyone scores 1 point he'll replay <br> First to 20 wins <br> Player with Green Roll Plays")
});
$('#rule').mouseleave(function(){
    $(this).html("Rules")
})
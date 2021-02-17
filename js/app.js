var currentScore,gameScore,activePlayer;

init();


var finalScore = prompt('Enter the Game score');



document.querySelector('#hhh').addEventListener('click',function() {


    //roll the dice
    var dice = Math.floor(Math.random()*6+1)
    console.log(dice);
    // display the img

    var imgDOM = document.querySelector('.img');
    imgDOM.style.display = 'inline';
    imgDOM.src = 'img/' + dice + '.png';

     //var aDOM = document.querySelector('.imgL');
        //aDOM.style.display = 'inline';
        //aDOM.src = 'img/' + turn +'A.png';

    if (dice !== 1){
        currentScore +=dice;
        document.querySelector('#score-' + activePlayer ).textContent =currentScore;
    }
    else{
       nextPlayer();
    }
})

document.querySelector('#iii').addEventListener('click',function(){
    gameScore[activePlayer] += currentScore;

    
    document.querySelector('#current-' + activePlayer).textContent = gameScore[activePlayer];

    if (gameScore[activePlayer] >= finalScore){
        document.querySelector('#p'+ activePlayer).textContent = 'Winner!!!';
        disable()
    }
    nextPlayer();






})

document.querySelector('#kkk').addEventListener('click',init);

function init(){

activePlayer = 0;
gameScore = [0,0]; 
currentScore=0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.img').style.display ='none';
document.querySelector('.imgR').style.display ='none';


document.getElementById("hhh").disabled = false;
document.getElementById("iii").disabled = false;
document.getElementById('p0').textContent = 'Player 1'
document.getElementById('p1').textContent = 'Player 2'
document.querySelector('.imgL').style.display ='inline';


}


function nextPlayer(){
    document.querySelector('#score-' + activePlayer ).textContent = 0;
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    //console.log(activePlayer);
    currentScore = 0
    if (activePlayer==0){
        document.querySelector('.imgR').style.display ='none';
        document.querySelector('.imgL').style.display ='inline';

    }
    else{
        document.querySelector('.imgL').style.display ='none';
        document.querySelector('.imgR').style.display ='inline';
    }
    //ducument.querySelector('.imgL').src = 'img/' + turn +'A.png';
    //document.querySelector('.imgL').classList.remove('L')
    
}


function disable(){
    document.getElementById('iii').disabled = true;
    document.getElementById("hhh").disabled = true;
    //document.getElementById("myBtn").disabled = true;
}



//console.log(dice)


//document.querySelector('#score-' + score1).innerHTML =  '<h1>' + dice + '</h1>';

//var x = document.querySelector('#global-' + score1).textContent;


//console.log(x)
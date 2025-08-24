'use strict';
// Base game values ------------------------------------------------
let number = Math.trunc(Math.random()*20)+1;
let score = 8;
let highScore = 0;
// Base game funcation --------------------------------------------
const displayMessage = function (message) {
     document.querySelector('.message').textContent=message
    };

///////////////////////////////////////////////////////////////////
///////////////////////// Game Start //////////////////////////////
document.querySelector('.check').addEventListener
('click',function(){
//-----------------------------------------------------------------
// When guess is right --------------------------------------------
    const guess =Number(document.querySelector('.guess').value);
    if (guess == number)
     {
        displayMessage('You did it 🎉🎉');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = "rgba(9, 139, 31, 1)";
        document.querySelector(".number").style.width = '40rem';
        // HighScore chercker ***
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
     }
//-----------------------------------------------------------------
// When guess is ronge --------------------------------------------
else if (guess !== number) {
    if (score > 0) {
        displayMessage(guess>number?'Too High 📈': 'Too low 📉');
        score--;
        document.querySelector(".score").textContent=score; 
    }   
        } 
//---------------------------------------------------------------
// When GAME OVER -----------------------------------------------
    if (score <=0 ) {
        document.querySelector('body').style.backgroundColor = "rgba(110, 4, 4, 1)";
        displayMessage('GAME OVER ...⏰💀⏰💀⏰💀')
    }      
//-----------------------------------------------------------------
// When user didn't input a number --------------------------------  
    if (!guess) {
        displayMessage('you have to Enter a Number ☝🤓');
    }
});
//------------------------------------------------------------------
// Try agine button ------------------------------------------------
document.querySelector('.again').addEventListener
('click',function(){
    document.querySelector('body').style.backgroundColor = "rgba(36, 34, 34, 1)";
    score = 8;
   document.querySelector('.score').textContent=score;
   displayMessage('Start guessing...');
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value="";
    document.querySelector(".number").style.width = '30rem';
});
////////////////////////////////////////////////////////////////////
////////////////////////// Game End ////////////////////////////////
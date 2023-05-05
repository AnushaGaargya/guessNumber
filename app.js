"use strict";
let score = 20;
let sysNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when there's no input
    if(!guess) {
        console.log(document.querySelector('.message').textContent = '❌ No number!');
    }

    else if(guess>20 || guess<0){
        document.querySelector('.message').textContent = 'Select a number between 1 to 20';
    }

    // when player wins
    else if(guess===sysNum){
    
        document.querySelector('.message').textContent = 'Yayy, correct guess!🎉';
        score++;
        document.querySelector('.number').textContent = sysNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.score').textContent = score;  
        document.querySelector('.number').style.width = '30rem';
        
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }


    // when guess is higher
    else if(guess>sysNum){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'Oops, game over.';
            document.querySelector('.score').textContent = 0;
        }

        
    }

    // when guess is lower
    else if(guess<sysNum){
        if (score>1) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'Oops, game over.';
        }
       
    }
}
);

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    sysNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';


})

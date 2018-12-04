/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, ativePlayer, gamePlaying, previousScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var secondDice = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        var diceDOM1 = document.querySelector('.dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + secondDice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1

        //        if (previousScore === 6 && dice === 6) {
        //            scores[activePlayer] == 0;
        //            document.querySelector('#score-' + activePlayer).textContent = 0;
        //            nextPlayer();
        //        } else if (dice !== 1) {
        //            //add score
        //            roundScore += dice ;
        //            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //        } else {
        //            //next player
        //            nextPlayer();
        //        }
        //    }
        //    previousScore = dice;
        //});

        if (dice !== 1 && secondDice !== 1) {
            //add score
            roundScore += dice + secondDice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var inputWinScore = document.querySelector('.winDice').value;
        var winningScore;

        if (inputWinScore) {
            winningScore = inputWinScore;
        } else {
            winningScore = 100;
        }

        //check if player won the game

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;

        } else {
            //next player
            nextPlayer();
        }

    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.dice-1').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('acvite');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('acvite');
}

// 3 challanges

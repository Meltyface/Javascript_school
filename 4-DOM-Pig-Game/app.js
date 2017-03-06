/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var roundScore, scores, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

/*function btn() {
 // code...
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn)
// documentation can be found on Mozilla Developer Network
// btn here is a callback function. A fn passed into another fn as an argument
*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('content-0').textContent = '0';
document.getElementById('content-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    

    
    // 3. Update round score if die result was NOT 1.
})
// an anonymous function is used here. It cannot be used in another context, because it has no name.


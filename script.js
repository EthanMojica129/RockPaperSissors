const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');
let playerLives = 5;
let computerLives = 5;
let round = 0;

function countRounds() {
  round += 1;
  rounds.innerText = `Round: ${round}`;
  return round;
}



const getComputerChoice =()=>{
    let random = Math.floor(Math.random() *3)
    let option = ''
    switch(random){
        case 0: option = 'rock';
                break;
        case 1: option = 'paper';
                break;
        case 2: option = 'scissors';
                break;
        default: option = 'rock';
                break;
    }
   
    return option;
}


const selections = document.getElementsByClassName("selection");

const playGame =(e) => {
countRounds(); 
const computerSelection = getComputerChoice()
let playerSelection = ''
  if(!e.target.id){
   playerSelection = e.target.parentNode.id;
  } else {
    playerSelection = e.target.id
  }
  
  switch(true){
    case (playerSelection === computerSelection):  combatText.innerText = `Hmm.. Two ${playerSelection}s means a draw, so no lives were lost. Let's try again.`;
    break;
    case (playerSelection === 'rock' && computerSelection === 'paper'):
    case (playerSelection === 'scissor' && computerSelection === 'rock'):
    case(playerSelection === 'paper' && computerSelection === 'scissor'):
    combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
    playerLives -=1;
    break;
    default:
    combatText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
    computerLives -=1;
    break;
  }
  const lives = document.querySelector('.lives');
  lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
  if(playerLives === 0 || computerLives ===0){
    const gameEndText = document.querySelector('.game-end-text');
    if (playerLives > computerLives) {
        combatText.innerText = 'Hehe, poor enemy has no lives left.. He barely holds himself in one piece.';
        gameEndText.textContent = 'You Won This Battle!';
        gameEndText.style.color = '#62b49c';
      } else {
        combatText.innerText = 'Ouch.. No lives left for you. Enjoy the mocking laughter of the enemy.';
        gameEndText.textContent = 'You Lost This Battle!';
        gameEndText.style.color = '#b96b78';
      }
      buttonPlayAgain.style.visibility = 'visible';
    for(let selection of selections){
        selection.removeEventListener('click', playGame);
    }
  }
}
    buttonPlayAgain.addEventListener('click', () => {
    window.location.reload()
  })

for (let selection of selections) {
  selection.addEventListener("click", playGame);
}
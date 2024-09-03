import './style.css';

const symbols: string[] = ['🏀', '🏀', '🎮', '🎮', '🧩', '🧩', '🀄', '🀄', '🎯', '🎯', '🥊', '🥊', '🎱', '🎱', '🎳', '🎳','🦍','🦍'];
//const sym = ['a', 'a', 'b', 'b'];
let moves = 0;
const counter = document.querySelector('#movesCounter') as HTMLElement;
const cardGrid = document.querySelector('.cardGrid') as HTMLElement;
const winStatement = document.querySelector('.winStatement') as HTMLElement;
//const bestScore = document.querySelector('#topScoreCounter') as HTMLElement;
//const resetButton = document.querySelector('#reset_button') as HTMLButtonElement;

if (!counter || !cardGrid || !winStatement) {
  throw new Error("Some component was not detected");
}

function fisherYatesShuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledSymbols: string[] = fisherYatesShuffle(symbols);

const main = (shuffledSymbols: string[]) => {
  for (let i = 0; i < shuffledSymbols.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffledSymbols[i];
    cardGrid.appendChild(box);
    
    box.onclick = function () {
      box.classList.add('boxOpen');
      setTimeout(function(){
        if (document.querySelectorAll('.boxOpen').length > 1) {
          if (document.querySelectorAll('.boxOpen')[0].textContent == document.querySelectorAll('.boxOpen')[1].textContent) {
            document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
          }
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
          moves++;
          counter.innerText = String(moves);
        }
        allCardsMatched();
      },1500)
    }
  }
}

const allCardsMatched = () => {
  if (document.querySelectorAll('.boxMatch').length == shuffledSymbols.length) {
    winStatement.style.display = 'block';
    winStatement.innerText = '♛  Congratulations... You have won!  ♛';
    // if (moves < Number(bestScore.innerText)) {
    //   bestScore.innerText = String(moves)
    // }
  }
}

// resetButton.onclick = () => {
//   winStatement.style.display = 'none';
//   moves = 0;
//   counter.innerText = String(moves);
//   newGame();
// }

main(shuffledSymbols);


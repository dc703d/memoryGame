import './style.css';

const symbols: string[] = ['🏀', '🏀', '🎮', '🎮', '🧩', '🧩', '🀄', '🀄', '🎯', '🎯', '🥊', '🥊', '🎱', '🎱', '🎳', '🎳','🦍','🦍'];

function fisherYatesShuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledSymbols: string[] = fisherYatesShuffle(symbols);
let moves = 0;
let counter = document.querySelector('#movesCounter') as HTMLElement;
if (!counter) {
  throw new Error("Counter was not detected");
}

for (let i = 0; i < shuffledSymbols.length; i++){
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffledSymbols[i];
  document.querySelector('.cardGrid')?.appendChild(box);
  
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
      if (document.querySelectorAll('.boxMatch').length == shuffledSymbols.length) {
        alert('You win!')
      }
    },500)
  }
}



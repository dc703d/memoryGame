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
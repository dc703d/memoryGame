import "./style.css";

const symbols: string[] = [
    "🏀",
    "🏀",
    "🎮",
    "🎮",
    "🧩",
    "🧩",
    "🀄",
    "🀄",
    "🎯",
    "🎯",
    "🥊",
    "🥊",
    "🎱",
    "🎱",
    "🎳",
    "🎳",
    "🦍",
    "🦍",
];
const sym = ["a", "a", "b", "b"];
let moves = 0;
const counter = document.querySelector(".topBar__Counter") as HTMLElement;
const cardGrid = document.createElement("div");
cardGrid.className = "cardGrid";
const gameContainer = document.querySelector("#gameContainer") as HTMLElement;
const winStatement = document.querySelector(
    ".winContainer__winStatement"
) as HTMLElement;
const fewestMoves = document.querySelector(
    ".topBar__topScoreCounter"
) as HTMLElement;
const resetButton = document.querySelector(
    ".winContainer__buttons--reset"
) as HTMLButtonElement;
const returnButton = document.querySelector(
    ".winContainer__buttons--return"
) as HTMLButtonElement;
const startButton = document.querySelector(
    ".startUp__button"
) as HTMLButtonElement;
const movesHeading = document.querySelector(
    ".topBar__movesHeading"
) as HTMLElement;
const startUpCard = document.querySelector(".startUp") as HTMLElement;
const mainHeading = document.querySelector(".topBar__heading") as HTMLElement;
const timerHeading = document.querySelector(
    ".topBar__timerHeading"
) as HTMLElement;
const winContainer = document.querySelector(".winContainer") as HTMLElement;
const quickestTime = document.querySelector(
    ".topBar__quickestTime"
) as HTMLElement;
const topScoreContainer = document.querySelector(
    ".topBar__topScoreContainer"
) as HTMLElement;

if (
    !counter ||
    !cardGrid ||
    !winStatement ||
    !gameContainer ||
    !movesHeading ||
    !timerHeading ||
    !winContainer
) {
    throw new Error("Some component was not detected");
}

function fisherYatesShuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const shuffledSymbols: string[] = fisherYatesShuffle(sym);

const populateGrid = (shuffledSymbols: string[]) => {
    gameContainer.appendChild(cardGrid);
    for (let i = 0; i < shuffledSymbols.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuffledSymbols[i];
        cardGrid.appendChild(box);

        box.onclick = function () {
            box.classList.add("boxOpen");
            setTimeout(function () {
                if (document.querySelectorAll(".boxOpen").length > 1) {
                    if (
                        document.querySelectorAll(".boxOpen")[0].textContent ==
                        document.querySelectorAll(".boxOpen")[1].textContent
                    ) {
                        document
                            .querySelectorAll(".boxOpen")[0]
                            .classList.add("boxMatch");
                        document
                            .querySelectorAll(".boxOpen")[1]
                            .classList.add("boxMatch");
                    }
                    document
                        .querySelectorAll(".boxOpen")[1]
                        .classList.remove("boxOpen");
                    document
                        .querySelectorAll(".boxOpen")[0]
                        .classList.remove("boxOpen");
                    moves++;
                    counter.innerText = String(moves);
                }
                allCardsMatched();
            }, 1500);
        };
    }
};

const allCardsMatched = () => {
    if (
        document.querySelectorAll(".boxMatch").length == shuffledSymbols.length
    ) {
        winContainer.style.display = "flex";
        winStatement.style.display = "block";
        resetButton.style.display = "block";
        returnButton.style.display = "block";
        winStatement.innerText = "♛  Congratulations... You have won!  ♛";
        if (moves < Number(fewestMoves.innerText)) {
            fewestMoves.innerText = String(moves);
        }
    }
};

startButton.onclick = () => {
    for (let i = 0; i < shuffledSymbols.length; i++) {
        cardGrid.innerHTML = "";
    }
    startButton.style.display = "none";
    movesHeading.style.display = "block";
    startUpCard.style.display = "none";
    populateGrid(shuffledSymbols);
    mainHeading.style.display = "block";
    timerHeading.style.display = "block";
    topScoreContainer.style.display = "block";
};

resetButton.onclick = () => {
    for (let i = 0; i < shuffledSymbols.length; i++) {
        cardGrid.innerHTML = "";
    }
    populateGrid(shuffledSymbols);
    moves = 0;
    counter.innerText = String(moves);
    winContainer.style.display = "none";
    winStatement.style.display = "none";
    resetButton.style.display = "none";
    returnButton.style.display = "none";
    winStatement.innerText = "none";
};

returnButton.onclick = () => {
    for (let i = 0; i < shuffledSymbols.length; i++) {
        cardGrid.innerHTML = "";
    }
    moves = 0;
    counter.innerText = String(moves);
    startButton.style.display = "block";
    movesHeading.style.display = "none";
    startUpCard.style.display = "flex";
    mainHeading.style.display = "none";
    timerHeading.style.display = "none";
    winContainer.style.display = "none";
    winStatement.style.display = "none";
    resetButton.style.display = "none";
    returnButton.style.display = "none";
    winStatement.innerText = "none";
};

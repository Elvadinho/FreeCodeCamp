let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always returns the number 5

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  hasBlackJack = false;
  isAlive = false;
  message = "";
  messageEl = document.getElementById("message-el");
  sumEl = document.getElementById("sum-el");
  cardsEl = document.getElementById("cards-el");
  renderGame();
}

function renderGame() {
  isAlive = true;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let num = Math.ceil(Math.random() * 13);
  if (num === 1) {
    return 11;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}

const btnStart = document.querySelector(".start");
const btnNew = document.querySelector(".new");

btnStart.addEventListener("click", () => {
  startGame();
});

btnNew.addEventListener("click", () => {
  newCard();
});

'use strict';

const questionMarkBtn = document.querySelector('.question-mark');
const homeBtn = document.querySelector('.home-img');
const playBtn = document.querySelector('.play-btn');
const startView = document.querySelector('.start-view');
const gameView = document.querySelector('.game-view');
const youWin = document.querySelector('.you-win');
const youLost = document.querySelector('.you-lost');
const rulesBox = document.querySelector('.rules-box');

const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const item0El = document.getElementById('item--0');
const item1El = document.getElementById('item--1');

const btn0El = document.getElementById('btn--0');
const btn1El = document.getElementById('btn--1');
const btn2El = document.getElementById('btn--2');
const btnNewGame = document.querySelector('.new-game-btn');

const winFinalScore = document.querySelector('.you-win-text-js');
const lostFinalScore = document.querySelector('.you-lost-text-js');

score0El.textContent = 0;
score1El.textContent = 0;

let currentScore0El = 0;
let currentScore1El = 0;
let randomNum;
let playerChoice = [1, 2, 3];

const randomImg = function () {
	randomNum = Math.trunc(Math.random() * 3) + 1;
	item1El.src = `./img/item-${randomNum}.png`;
};

const winCon = function () {
	if (currentScore0El === 5) {
		youWin.classList.remove('hidden');
		winFinalScore.textContent = `${currentScore0El}:${currentScore1El}`;
	} else if (currentScore1El === 5) {
		youLost.classList.remove('hidden');
		lostFinalScore.textContent = `${currentScore0El}:${currentScore1El}`;
	}
};

const newGame = function () {
	currentScore0El = 0;
	currentScore1El = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;
	item0El.classList.add('hidden');
	item1El.classList.add('hidden');
	youWin.classList.add('hidden');
	youLost.classList.add('hidden');
};

// Play button
playBtn.addEventListener('click', function () {
	gameView.classList.remove('hidden');
	startView.classList.add('hidden');
	homeBtn.classList.remove('hidden');
	questionMarkBtn.classList.remove('hidden');
});

homeBtn.addEventListener('click', function () {
	newGame();
	gameView.classList.add('hidden');
	startView.classList.remove('hidden');
	homeBtn.classList.add('hidden');
	questionMarkBtn.classList.add('hidden');
});

btnNewGame.addEventListener('click', newGame);

btn0El.addEventListener('click', function () {
	item0El.classList.remove('hidden');
	item1El.classList.remove('hidden');
	item0El.src = `./img/item-${playerChoice[0]}.png`;
	randomImg();
	if (randomNum === 2) {
		currentScore1El += 1;
		score1El.textContent = currentScore1El;
	} else if (randomNum === 3) {
		currentScore0El += 1;
		score0El.textContent = currentScore0El;
	}
	winCon();
});
btn1El.addEventListener('click', function () {
	item0El.classList.remove('hidden');
	item1El.classList.remove('hidden');
	item0El.src = `./img/item-${playerChoice[1]}.png`;
	randomImg();
	if (randomNum === 1) {
		currentScore0El += 1;
		score0El.textContent = currentScore0El;
	} else if (randomNum === 3) {
		currentScore1El += 1;
		score1El.textContent = currentScore1El;
	}
	winCon();
});
btn2El.addEventListener('click', function () {
	item0El.classList.remove('hidden');
	item1El.classList.remove('hidden');
	item0El.src = `./img/item-${playerChoice[2]}.png`;
	randomImg();
	if (randomNum === 1) {
		currentScore1El += 1;
		score1El.textContent = currentScore1El;
	} else if (randomNum === 2) {
		currentScore0El += 1;
		score0El.textContent = currentScore0El;
	}
	winCon();
});

youWin.addEventListener('click', newGame);
youLost.addEventListener('click', newGame);
questionMarkBtn.addEventListener('click', function () {
	rulesBox.classList.remove('hidden');
});
rulesBox.addEventListener('click', function () {
	rulesBox.classList.add('hidden');
});

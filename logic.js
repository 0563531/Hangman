var worldList = ['Audi', 'Ferrari', 'Tesla'];

var chosenword = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter= 0;
var lossCounter = 0;
var numGuesses = 9;








function startGame() {

	numGuesses = 9;

	chosenword = worldList[Math.floor(Math.random() = worldList.length)];

	lettersInChosenWord = chosenword.split("");

	numBlanks = lettersInChosenWord.length;

	console.log(chosenword)

	blanksAndSuccesses = [];

	wrongGuesses = [];

	for (var 1 =0; i< numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses);

	document.getElementById('guesses-left').innerHTML = numGuesses;

	document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join(" ");

	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
}


function checkLetters(Letter) {
	for (var i = 0; i< numBlanks; i++) {
		if (chosenword[i] === letter) {
			letterInWord = true;
		}
	}

	if (letterInWord) {
		for (var j = 0; j < numBlanks; j++) {
			if (chosenword[j] === letter) {
				blanksAndSuccesses[j] = letter;
			}
		}
		console.log(blanksAndSuccesses);
	}

	else {
		wrongGuesses.push(letter);
		numGuesses--;
	}
}

function roundComplete() {
	console.log("Win count: " + winCounter + " | Loss count: " + lossCounter + " | numGuesses: " + numGuesses);

	document.getElementById('guesses-left').innerHTML = numGuesses;

	document.getElementById('word-blanks').innerHTML = blanksAndSuccesses.join(" ");

	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You win!");

		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();
	}

	else if (numGuesses === 0) {
		lossCounter++;
		alert("You lost")

		document.getElementById("loss-counter").innerHTML = lossCounter;

		startGame();
	}
}

startGame();


document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
}

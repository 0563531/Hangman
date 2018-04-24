//Array of words (all lowercase)
var worldList = ['Audi', 'Ferrari', 'Tesla'];

//computer selected solution will be here
var chosenWord = '';

//will break the solution into individual letters to be storred in array
var lettersInChosenWord= [];

//number of blanks we show depending on the solution
var numBlanks = 0;

//holds a mix of blanks and solved letters
var blanksAndSuccesses = [];

//holds the wrong letters guessed
var wrongGuesses = [];

//holds the letters guessed correctly
var letterGuessed = '';

//Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


//how we'll start and restart the game
function startGame() {

	//reset the guesses back to 0
	numGuesses = 9;

	//solution chosen randomly from wordlist
	chosenWord = worldList[Math.floor(Math.random() * worldList.length)];

	//breaks the word into individual letters
	lettersInChosenWord = chosenWord.split("");

	//counts the number of letters in the word
	numBlanks = lettersInChosenWord.length;

	//here we print the solution in the console (for testing purposes)
	console.log(chosenWord);

	//Here we reset the guess and success array at each round
	blanksAndSuccesses = [];

	//here we reset the wrong guesses from the previous round
	wrongGuesses = [];

	/*here we fill up the blanksAndSuccesses list with the appropriate number of blanks which is based on the number of letters in the solution*/

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	//print the initial blanks in the console
	console.log(blanksAndSuccesses);

	//Reprint the guesses left to 9
	document.getElementById("guesses-left").innerHTML = numGuesses;

	//Print the blanks at the beggining of each round in the HTML
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

	//
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

//Here is where we'll be do all of the comparisons for matches
function checkLetters(letter) {
	// a boolean which will be toggled based pn wether or not a user is found amywhere in the word
	var letterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		if (chosenWord[i] === letter) {
			//if a letter exist then change this to true
			//it will be used in the next step
			letterInWord = true;
		}
	}

	//If the letter exist somewhere in the world, then figure out exactly where (what index)
	if (letterInWord) {
		//Loop throughout the word
		for (var j=0; j < numBlanks; j++) {
			//populate the blanksAndSuccesses with every instance of the letter
			if (chosenWord[j] === letter) {
				//set specific blank spaces to equal the correct letter when there is a match
				blanksAndSuccesses[j] = letter;
			}
		}
		//log for testing purposes
		console.log(blanksAndSuccesses);
	} 

	//If the letter doesn't exist at all...
	else {
		//then we add the letter of the list of wrong answers
		wrongGuesses.push(letter);
		//we also substract one of the guesses left
		numGuesses--;
	}
}

//Here is the code that needs to be run after each guess is made
function roundComplete() {

	//initial status update in the cnsole telling us the wins, losses, and guesses left
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + 
		" | NumGuesses: " + numGuesses);

	//HTML UPDATES

	//Update the html to reflect the new number of guesses
	document.getElementById("guesses-left").innerHTML = numGuesses;
	//will print the array of guesses and blanks on the page
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	//will print the wrong guesses onto the page
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	//if we guessed all the letters right, the
	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You win!");

		//update the win counter in the HTML
		document.getElementById("win-counter").innerHTML = winCounter;

		//Restart the game
		startGame();
	}

	//if we run out of guesses
	else if (numGuesses === 0) {
		lossCounter++;
		alert("You lose");

		//updates the loss counter in HTML
		document.getElementById("loss-counter").innerHTML = lossCounter;

		//restart game
		startGame();
	}
}

//MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)

//start game
startGame();	

//initiates the function for capturing key clicks
document.onkeyup = function(event) {

	//converts all key clicks to lowercase letters
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	//runs the code to check for correct guesses
	checkLetters(letterGuessed);

	//runs the code that ends each round
	roundComplete();
};

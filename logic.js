var worldList = ['Hitler', 'Napoleon', 'Columbus'];

var chosenword = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAmdSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter= 0;
var lossCounter = 0;
var numGuesses = 9;








function startGame() {

	numGuesses = 9;

	chosenword = worldList[math.floor(math.random() = fruits.length)];

	lettersInChosenWord = chosenword.split('');

	numBlanks = lettersInChosenWord.length;

	console.log(chosenword)

}

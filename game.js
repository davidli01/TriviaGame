
var questions = [];
function QuestionNum(question, choices, answer) {
	this.question = question;
	this.choices = choices;
	this.answer = answer;
}

var questionOne = new QuestionNum("In 'The Little Mermaid,' who is NOT one of Triton's daughters?", 
									["Andrina", "Adora", "Arrina", "Alana"],
									"Adora");

var questionTwo = new QuestionNum('Which phrase does the Evil Queen in "Snow White" actually say?',
									["Mirror, mirror, on the wall - who is the fairest of them all?",
									"Magic mirror, on the wall - who is the fairest one of all?",
									"Mirror, mirror, on the wall - who is the fairest one of all?",
									"Magic mirror, on the wall - who is the fairest of them all?"],
									"Magic mirror, on the wall - who is the fairest one of all?");
var questionThree = new QuestionNum("In the movie 'Tangled,' Flynn Rider is wanted dead or alive according to his wanted poster because he's a...",
									["Bandit", "Thief", "Treason", "Robber"],
									"Thief");
var questionFour = new QuestionNum("Which glass slipper did Cinderella leave behind at the ball?",
									["Left", "Right"],
									"Left");
var questionFive = new QuestionNum('In "Sleeping Beauty," what is the name of Maleficent’s pet raven?',
									["Diablo", "Malum", "Mauvais", "Diable"],
									"Diablo");
var questionSix = new QuestionNum('Finish the lyrics: "Wouldn\'t you think I\'m the girl, the girl who has everything? Look at this trove, treasures untold…"',
									["It's full of gizmos and gadgets galore.", 
									"Wonders from all over the world.", 
									"There so much to be known.", 
									"How many wonders can one cavern hold?"],
									"How many wonders can one carven hold?");
var questionSeven = new QuestionNum('In "Pocahontas," what did Pocahontas see in her dream that made her believe that a change was coming?',
									["A spinning arrow", 
									"A strange cloud formation", 
									"A hawk circling her village", 
									"A burning blue fire"],
									"A spinning arrow");
var questionEight = new QuestionNum("In 'The Lion King,' what side of Scar's face is his scar on?",
									["Left", "Right"],
									"Left");
var questionNine = new QuestionNum('In "Frozen," how many brothers does Hans have?',
									["7", "9", "12", "15"],
									"12");
var questionTen = new QuestionNum('Finish the lyrics: “My soul is spiraling in frozen fractals all around…”',
									["That wraps my heart in a cold and distant past.",
									"And one thought crystallizes like an icy blast.",
									"Somehow I've now been given a new chance.",
									"And all my problems are far gone in the past."],
									"And one thought crystallizes like an icy blast.");

//console.log(questionTen);
questions.push(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen);
console.log(questions);

var box = document.querySelector('.questionBox');
//starting number
var number = 120;
//function to decrement
//this function decrements number
//creates span
//appends apan to wrapper
//places the number into span
function decrement(){
	number--;
	//created a span to contain the number counter
	var div = document.createElement("SPAN");
	//append the span to the wrapper
	document.querySelector(".wrapper").appendChild(div);
	//select the span 
	var span = document.querySelector("span");
	console.log(span);
	//place number into span
	span.innerHTML = '<h2>' + number + '</h2>';
	//currently this function only decrements once,
	//unless you call the function multiple times
}
//count function will create an interval
function count(){
	//setinterval is a method that passes a function to be executed
	//in this case the decrement function
	//also passes a interval in milliseconds that will determine how often to execute the code
	counter = setInterval(decrement, 1000);
}

//count();


/*
function start() {

	function counting(){
		counter = 120;
		var c = counter--;
		var div = document.createElement()
	}
	console.log(counting);
	timer = setInterval(start.counting, 1000);
	//create span
	var span = document.createElement("SPAN");
	//put 
	//create <p>
	var para = document.createElement("P");
	//create text node
	var t = document.createTextNode("Timer: " + counting + " seconds");
	//append the text to <p>
	para.appendChild(t);
	//append <p> to wrapper
	document.querySelector(".wrapper").appendChild(para);

}

document.querySelector(".submit").onclick = start;
*/
//var question = 
/*
var box = document.querySelector('.questionBox');
//start object
var start = {
	correct: 0,
	incorrect: 0,
	counter: 100,
	begin: function(){
		timer = setInterval(game.countdown, 1000);

		document.querySelector('.wapper').appendChild('<p>Remaining Time: <span class="countNum">120</span> Seconds</p>');
		document.querySelector('.submit').remove();

		for (var i = 0; i < question.length; i++){
			box.appendChild('<p>' + questions
		}
	}
	count: function(){
		this.counter--;
		document.
	}
}
*/

/*
function result(){
	if ()
}

var start = {
	correct: 0,
	incorrect: 0
	counter: 120
	countdown: function(){
		game.counter--;
	}
}
*/
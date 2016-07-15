
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
var box = document.querySelector(".questionBox");

//create object that will begin the game as you click start
var begin = {
	correct: 0,
	incorrect: 0,
	time: 120,
	//function to count down
	counter: function(){
		begin.time--;
		//created a span to contain the number counter
		var div = document.createElement("SPAN");
		//append the span to the wrapper
		document.querySelector(".wrapper").appendChild(div);
		//select the span 
		var span = document.querySelector("span");
		//console.log(span);
		//create the span mentioned in the counter function
		span.innerHTML = '<h2>Time Remaining: ' + begin.time + ' Seconds</h2>';
			
	//if statement to stop the timer and indicate times up
		if (begin.time === 0){
			console.log('Times up');
			//done function will be defined later
			begin.done();
		}
	},
	//start function, this happens when start button is clicked
	start: function(){
		//create a timer for the questions
		//the function that is called is decrementing
		//by 1000 milliseconds
		timer = setInterval(begin.counter, 1000);
		//remove start button
		//make start button hidden/ disappear
		document.querySelector(".submit").style.visibility = "hidden";

		//display all the question
		//loop through questions
		for (var i = 0; i < questions.length; i++) {
			//during the loops display questions into question box
			box.innerHTML = questions[i];
			console.log(box);

		}
	},
};

document.querySelector(".submit").onclick = begin.start;
//begin.start();




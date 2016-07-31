
var questions = 
[
	{
		question: "True or False: Topgepi appears in the first series of Pokemon.",
		choices:["false", "true"],
		answer: "True"
	},{
		question: "What is the first Legendary bird Pokemon Ash sees?",
		choices: ["Moltes", "Articuno", "Zapdos", "Lugia", "Ho-oh"],
		answer: "Ho-oh"
	},{
		question: "Which Pokemon game was the first to make Pokemon sprites seem to move?",
		choices: ["Diamond", "Crystal", "Red", "Emerald"],
		answer: "Crystal"
	},{
		question: "In which Pokemon game can you obtain all the Kanto/Indigo starters?",
		choices: ["Blue", "Green", "Yellow", "Red"],
		answer: "Yellow"
	},{
		question: "How any total Pokemon are there in first generation?",
		choices: ["237", "150", "151", "649", "469"],
		answer: "151"
	},{
		question: "What was the first Pokemon Ash captured?",
		choices: ["Squirtle", "Pidgeotto", "Pikachu" ,"Caterpie"],
		answer: "Caterpie"
	},{
		question: "Which Pokemon is involved in a theory that expresses why Cubone wears a skull on its head?"
		choices: ["Chansey", "Kangaskan", "Rhydon", "Marowak"],
		answer: "Kangaskan"
	},{
		question: "This Pokemon was said to have been born from a another Pokemon in the video game. However, in a movie, it is said to be the first Pokemon to be created by humans. Who's that Pokemon?"
		choices: ["Jirachu", "Rhydon", "Mewtwo", "Deoxys"],
		answer: "Mewtwo"
	},{
		question: "How does an Eevee evolve into an Espeon or Umbreon?"
		choice: ["By obtaining a certain level of happiness",
				"By using a certain stone",
				"By leveling up",
				"by fighting in battles"],
		answer: "By obtaining a certain level of happiness"
	}

];

var correct = 0;
var wrong = 0;
var unanswered = 0;
//console.log(questionTen);
//questions.push(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen);
//console.log(questions);
var box = document.querySelector(".questionBox");

function click(event){
	var ans = event.target.nodeName;
	console.log(ans);
}
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
		//select the created span 
		var span = document.querySelector("span");
		//console.log(span);
		//create the span mentioned in the counter function
		span.innerHTML = '<h2>Time Remaining: ' + begin.time + ' Seconds</h2>';
		//create another timer in the time div
		var time = document.querySelector('.time');
		time.innerHTML = '<h2>Time Remaining: ' + begin.time + ' Seconds</h2>';
			
	//if statement to stop the timer and indicate times up
		if (begin.time === 0){
			console.log('Times up');
			//done function will be defined later
			begin.done();
		}
	},
	//start function, this happens when start button is clicked
	start: function(event){
		//create a timer for the questions
		//the function that is called is decrementing
		//by 1000 milliseconds
		timer = setInterval(begin.counter, 1000);
		//remove start button
		//make start button hidden/ disappear
		document.querySelector(".submit").style.visibility = "hidden";

		for(var i = 0; i < questions.length; i++){
			//retrieve the whole question object

			console.log(questions[i]);
			//need to retrieve question, choices, answers in one loop
			//template to display all ques, choices, ans
			//after push everything to array
			//if possible push before appending to the dom
			//then use another loop out side of the first loop
			//to create buttons etc
			//this format to use multiple loops without
			//placing loop within a loop
		}












		//display all the question
		//loop through questions
		//loop questions to apply code to each, within each question
		//loop through choices and apply code to those choices
		for (var i = 0; i < questions.length; i++) {
			//during the loops display questions into question box
			//create div to hold question, this will be part of the loop
			//creating div for every question, part of loop
			var div = document.createElement('DIV');
			//place question in textnode
			var text = document.createTextNode(questions[i].question);
			//create a break
			var bre = document.createElement('BR');
			//append text node to div
			div.appendChild(text);
			div.appendChild(bre);
			//append div to box
			//box.appendChild(div);
			console.log(box);
				//within the loop create another loop
				//to display choices
				//loop through the choices to display each individually
				for (var c = 0; c < questions[i].choices.length; c++) {
					//select choices and start from the object
					var textC = questions[i].choices[c];
					//console.log(textC);
					//create element in document to manipulate
					//var divC = document.createElement('DIV');
					//create input tag and textnode 
					//input tag for the textnode to be responsive
					var input = document.createElement('BUTTON');
				
					var textNode = document.createTextNode(textC);
					//append text into input tag
					input.appendChild(textNode);
					div.appendChild(input);
					
				}
			//grab all buttons to use with loop
			var but = document.querySelectorAll('button');

			//create embedded answer to the question
			//acquire answer for question
			var a = questions[i].answer
			var ansBox = document.createElement("P");
			var ansText = document.createTextNode(a);
			ansBox.appendChild(ansText);
			div.appendChild(ansBox);

			//append choices and question into div
			box.appendChild(div);

			//console.log(a);
			//loop through all buttons
			for (var b = 0; b < but.length; b++){

				//button[b] clicked execute this function
				but[b].onclick = function(){

					//console.log the buttons content(innerHTML)
					console.log(this.innerHTML);
					var o = this.innerHTML;
					console.log(this.parentNode.lastChild.innerHTML);
					var p = this.parentNode.lastChild.innerHTML;

					if (o === p) {
						correct++
						console.log("Correct: " + correct);
						//disableBut();
						var dis = this.parentNode.querySelectorAll('button');
						console.log(dis);
						for(var on = 0; on < dis.length; on++){
							dis[on].setAttribute('disabled', 'disabled');
						}
					} else {
						wrong++
						console.log("Wrong: " + wrong);
						var dis = this.parentNode.querySelectorAll('button');
						console.log(dis);
						for(var on = 0; on < dis.length; on++){
							dis[on].setAttribute('disabled', 'disabled');
						}
					}
				}
			}
		}
	},
};

document.querySelector(".submit").onclick = begin.start;
//begin.start();




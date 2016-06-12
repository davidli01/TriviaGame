
function QuestionNum(question, choices, answer) {
	this.question = question;
	this.choices = choices;
	this.answer = answer;
};

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
var questionSix = new QuestionNum('Finish the lyrics: “Wouldn't you think I'm the girl, the girl who has everything? Look at this trove, treasures untold…”',
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

console.log(QuestionNum);

function result(){
	if ()
}
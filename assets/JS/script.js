//create array of game questions and answers
var questions =[
    {
    q: "Which Company developed JavaScript?",
    c: ["1. Bell Labs", "2. Netscape", "3. Sun Microsystems", "4. IBM"],
    a: "2.Netscape"  
    }
]
// create reference 
var startQuizButton = document.querySelector("#start-quiz")
var divQuestion = document.querySelector("#question")

// quiz variables
// score= time remaining 
// 

// Quiz game logic
// take q. from questions and insert into div#question
//take c. from questions and list each option as a list item 
// listen for click if option=answer display correct! then next question, if option!= answer then display incorrect and subtract 10 seconds
// if timer reaches zero end game 
// if all questions answered end game
// at end game display score which is time remaining. allow users to save high score
function startQuiz(){
divQuestion.innerHTML = "";
 
}




// event listeners
document.querySelector("#start-quiz").addEventListener("click", startQuiz);


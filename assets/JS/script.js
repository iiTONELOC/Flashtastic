//create array of game questions and answers
var taskIdCounter=0
var questions =[
    {question: 'Which Company developed JavaScript?',
    choices: ["1. Bell Labs", "2. Netscape", "3. Sun Microsystems",  "4. IBM",],
    a: 2
    }
    
        
    
];




// create reference 
var startQuizButton = document.querySelector("#start-quiz")
var divQuestion = document.querySelector("#question")
var quizAnswerContainer = document.querySelector("#quiz-answers")



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

document.getElementById('h1').remove();
for(var i=0; i<questions.length; i++){
    // removes submit button
    document.querySelector("#quiz-answers").removeChild(document.querySelector("#quiz-answers").lastElementChild);

    //creates the h2 element for the question to display 
    var h2=document.createElement('h2');
    h2.setAttribute('class','h1');
    h2.textContent=questions[i].question;
    divQuestion.appendChild(h2);
    //create ul
    var ul=document.createElement('ul');
    ul.setAttribute('class', 'list');
    ul.setAttribute
    //loop to generate answers from array
    var choice= questions[i].choices;
console.log(choice.length)
    
    for (var j=0; j<choice.length; j++){
        var li = document.createElement('li');
        li.textContent=choice[j];
        console.log("🚀 ~ file: script.js ~ line 57 ~ startQuiz ~ choice[j]", choice[j])
    
        li.setAttribute('class','list-item');
        li.setAttribute('id','list-item')
        li.setAttribute('data-task-id', taskIdCounter)
        taskIdCounter++;
        ul.appendChild(li);
        
    }
    //add ul to page
    quizAnswerContainer.appendChild(ul);
    
    var data = li.value
    console.log(data);
    //check answer
    var checkAnswer = function(event) {
        console.log(event.target.value);
        //if(event.target.matches)
    
    
    

        }
        document.querySelector("#quiz-answers").addEventListener("click", checkAnswer);
}
}







// event listeners


document.querySelector("#start-quiz").addEventListener("click", startQuiz);


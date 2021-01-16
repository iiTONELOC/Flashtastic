//create array of game questions and answers
var questions =[
    {
    question: 'Which Company developed JavaScript?',
    
    
    a: '2.Netscape' 
    }
    
        
    
];

var options= [ 
    '1. Bell Labs',
    '2. Netscape',
    '3. Sun Microsystems',
    '4. IBM',
]
console.log(options)



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
    document.querySelector("#quiz-answers").removeChild(document.querySelector("#quiz-answers").lastElementChild);

    var h2=document.createElement('h2');
    h2.setAttribute('class','h1');
    h2.textContent=questions[i].question;
    divQuestion.appendChild(h2);
    //create ul
    var ul=document.createElement('ul');
    ul.setAttribute('class', 'list');
    //loop to generate answers from array
   
    for(var i=0; i<options.length; i++){
        var li = document.createElement('li');
        li.textContent=options[i];
        li.setAttribute('class','list-item');
        ul.appendChild(li);
    }
    //add ul to page
    quizAnswerContainer.appendChild(ul);


    
        


}

}






// event listeners
document.querySelector("#start-quiz").addEventListener("click", startQuiz);


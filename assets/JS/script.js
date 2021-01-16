//create array of game questions and answers
var taskIdCounter=0
var questions =[
    {question: 'Which Company developed JavaScript?',
    choices: ["1. Bell Labs", "2. Netscape", "3. Sun Microsystems",  "4. IBM",],
    a: 1
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
function countdown() {
    var timeLeft = 90;
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
    
      // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        document.querySelector('#timer').textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
        } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        document.querySelector('#timer').textContent = timeLeft;
        timeLeft--;
        } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        document.querySelector('#timer').textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        }
    }, 1000);
    }
function startQuiz(){
    countdown();

document.getElementById('h1').remove();
for(var i=0; i<questions.length; i++){
    //correct answers value
    var correctAnswer=(questions[i].a)
    console.log(correctAnswer);
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
    ul.setAttribute('id', 'list-item')
    //loop to generate answers from array
    var choice= questions[i].choices;
    console.log(choice)
    
    for (var j=0; j<choice.length; j++){
        var li = document.createElement('li');
        li.textContent=choice[j];
        li.setAttribute('class','list-item');
        li.setAttribute('id','list-item')
        li.setAttribute('value', taskIdCounter)
        taskIdCounter++;
        ul.appendChild(li);
        
    }
    //add ul to page
    quizAnswerContainer.appendChild(ul);
    
    
    //check answer
    var checkAnswer= function(event){
        if(event.target.value === correctAnswer){
            console.log("Correct");
        }
        else if(event.target.value === 'null'){
            
        }
        else{
            console.log("Incorrect, try again!")
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    

        
       
}
}







// event listeners


document.querySelector("#start-quiz").addEventListener("click", startQuiz,countdown) //removeButton);


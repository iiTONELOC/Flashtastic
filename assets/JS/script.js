//create array of game question1 and answers
var timeLeft = 90;
var taskIdCounter=0;

var question1 =[
    {question: 'Which Company developed JavaScript?',
    choices: ["1. Bell Labs", "2. Netscape", "3. Sun Microsystems",  "4. IBM",],
    a: 1
    },
];
var q2=[
    {question: 'Which of the following is not a JavaScript Data Type?',
    choices: ['1. Undefined', '2. Number','3. Boolean','4. Float'],
    a: 7    
    }
];
var q3=[
    {question: ' The _______ method of an Array object adds and/or removes elements from an array.',
    choices: ['1. Reverse', '2. Shift','3. Slice','4. Splice'],
    a: 11    
    }
];
var q4=[
    {question: ' Which method receives the return value of setInterval() to cancel future invocations?',
    choices: ['1. clearInvocation()', '2. cancelInvocation()','3. clearInterval()', '4.clear()'],
    a: 14    
    }
];
var q5=[
    {question: ' What was the original name of JavaScript?',
    choices: ['1. LiveScript', '2. EScript','3. Mocha', '4.Java'],
    a: 18   
    }
];
// create reference 
var startQuizButton = document.querySelector("#start-quiz")
var divQuestion = document.querySelector("#question")
var quizAnswerContainer = document.querySelector("#quiz-answers")
var timer=document.querySelector('#timer')
var quizWrapper=document.querySelector('#quiz-wrapper')










// quiz variables
// score= time remaining 
// 

// Quiz game logic
// take q. from question1 and insert into div#question
//take c. from question1 and list each option as a list item 
// listen for click if option=answer display correct! then next question, if option!= answer then display incorrect and subtract 10 seconds
// if timer reaches zero end game 
// if all question1 answered end game
// at end game display score which is time remaining. allow users to save high score


function countdown() {
// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var timeInterval = setInterval(function() {
// As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
    // Set the `textContent` of `timer` to show the remaining seconds
    timer.textContent = timeLeft;
    // Decrement `timeLeft` by 1
    timeLeft--;
    } else if (timeLeft === 1) {
    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timer.textContent = timeLeft;
    timeLeft--;
    } else {
    // Once `timeLeft` gets to 0, set `timer` to an empty string
    timer.textContent = '';
    // Use `clearInterval()` to stop the timer
    
    clearInterval(timeInterval);
        }
    }, 1000);
    //if(endGame){
        //clearInterval(timeInterval);
        
    //}
    }

function startQuiz(){
countdown();
// removes submit button
quizAnswerContainer.removeChild(document.querySelector("#quiz-answers").lastElementChild);
//clears landing page
document.getElementById('h1').remove();



for(var i=0; i<question1.length; i++){
    //correct answers value
    var correctAnswer=(question1[i].a)
    console.log(correctAnswer);
    
    //creates the h2 element for the question to display 
    var h2=document.createElement('h2');
    h2.setAttribute('class','h1');
    h2.textContent=question1[0].question;
    divQuestion.appendChild(h2);
    //create ul
    var ul=document.createElement('ul');
    ul.setAttribute('class', 'list');
    ul.setAttribute('id', 'list-item')
    //loop to generate answers from array
    var choice= question1[i].choices;
    console.log(choice)
    
    for(var j=0; j<choice.length; j++){
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
        var status=document.querySelector('#incorrect')
        var divElStatus=document.createElement('div');
        status.appendChild(divElStatus);
    
        //function to start the quiz
        if(event.target.value === correctAnswer){
            console.log("Correct");
            var status=document.querySelector('#incorrect')
            var correct =document.createElement('h2');
            correct.textContent="Incorrect! Please try again.";
            correct.setAttribute('id','incorrect');
            status.appendChild(correct);
            question2();

        }
        else if(event.target.value === 'null'){
        
        }
        else{
            
            console.log("Incorrect, try again!")            
            var incorrect =document.createElement('h2');
            incorrect.textContent="Incorrect! Please try again.";
            incorrect.setAttribute('id','incorrect');
            status.appendChild(incorrect);
            

            document.querySelector('#timer').textContent=(timeLeft-=15);
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    



    }
} 
function question2 (){
    //check time
    console.log(timeLeft);
    //if time left is over 0 continue

    if(timeLeft>0){
    //reset page
    divQuestion.removeChild(divQuestion.lastElementChild);
    quizAnswerContainer.removeChild(quizAnswerContainer.lastElementChild);
    document.getElementById('incorrect').remove();
    

    
    

    
    

        for(var i=0; i<q2.length; i++){
            var cA=(q2[i].a)
            console.log(cA);
            var h2=document.createElement('h2');
            h2.setAttribute('class','h1');
            h2.textContent=q2[0].question;
            divQuestion.appendChild(h2);
            //create ul
            var ul=document.createElement('ul');
            ul.setAttribute('class', 'list');
            ul.setAttribute('id', 'list-item')
            //loop to generate answers from array
            var choice= q2[i].choices;
            console.log(choice)
            
        }
        for(var j=0; j<choice.length; j++){
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
        var section=document.createElement('section');
        section.setAttribute('id','incorrect');
        quizWrapper.appendChild(section);
        var status=document.querySelector('#incorrect')
        var divElStatus=document.createElement('div');
        status.appendChild(divElStatus);
    
        //function to start the quiz
        if(event.target.value === cA){
            console.log("Correct");
            var status=document.querySelector('#incorrect')
            var correct =document.createElement('h2');
            correct.textContent="Incorrect! Please try again.";
            correct.setAttribute('id','incorrect');
            status.appendChild(correct);
            question3();

        }
        else if(event.target.value === 'null'){
        
        }
        else{
            
            console.log("Incorrect, try again!")            
            var incorrect =document.createElement('h2');
            incorrect.textContent="Incorrect! Please try again.";
            incorrect.setAttribute('id','incorrect');
            status.appendChild(incorrect);
            

            document.querySelector('#timer').textContent=(timeLeft-=15);
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    } 
}

function question3 (){
    //check time
    console.log(timeLeft);
    //if time left is over 0 continue

    if(timeLeft>0){
    //reset page
    divQuestion.removeChild(divQuestion.lastElementChild);
    quizAnswerContainer.removeChild(quizAnswerContainer.lastElementChild);
    document.getElementById('incorrect').remove();

    
    

    
    

        for(var i=0; i<q2.length; i++){
            var tA=(q3[i].a)
            console.log(tA);
            var h2=document.createElement('h2');
            h2.setAttribute('class','h1');
            h2.textContent=q3[0].question;
            divQuestion.appendChild(h2);
            //create ul
            var ul=document.createElement('ul');
            ul.setAttribute('class', 'list');
            ul.setAttribute('id', 'list-item')
            //loop to generate answers from array
            var choice= q3[i].choices;
            console.log(choice)
            
        }
        for(var j=0; j<choice.length; j++){
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
        var section=document.createElement('section');
        section.setAttribute('id','incorrect');
        quizWrapper.appendChild(section);
        var status=document.querySelector('#incorrect')
        var divElStatus=document.createElement('div');
        status.appendChild(divElStatus);
    
        //function to start the quiz
        if(event.target.value === tA){
            console.log("Correct");
            var status=document.querySelector('#incorrect')
            var correct =document.createElement('h2');
            correct.textContent="Incorrect! Please try again.";
            correct.setAttribute('id','incorrect');
            status.appendChild(correct);
            question4();

        }
        else if(event.target.value === 'null'){
        
        }
        else{
            
            console.log("Incorrect, try again!")            
            var incorrect =document.createElement('h2');
            incorrect.textContent="Incorrect! Please try again.";
            incorrect.setAttribute('id','incorrect');
            status.appendChild(incorrect);
            

            document.querySelector('#timer').textContent=(timeLeft-=15);
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    } 
}

function question4 (){
    //check time
    console.log(timeLeft);
    //if time left is over 0 continue

    if(timeLeft>0){
    //reset page
    divQuestion.removeChild(divQuestion.lastElementChild);
    quizAnswerContainer.removeChild(quizAnswerContainer.lastElementChild);
    document.getElementById('incorrect').remove();


    
    

    
    

        for(var i=0; i<q2.length; i++){
            var cA=(q4[i].a)
            console.log(cA);
            var h2=document.createElement('h2');
            h2.setAttribute('class','h1');
            h2.textContent=q4[0].question;
            divQuestion.appendChild(h2);
            //create ul
            var ul=document.createElement('ul');
            ul.setAttribute('class', 'list');
            ul.setAttribute('id', 'list-item')
            //loop to generate answers from array
            var choice= q4[i].choices;
            console.log(choice)
            
        }
        for(var j=0; j<choice.length; j++){
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
        var section=document.createElement('section');
        section.setAttribute('id','incorrect');
        quizWrapper.appendChild(section);
        var status=document.querySelector('#incorrect')
        var divElStatus=document.createElement('div');
        status.appendChild(divElStatus);
    
        //function to start the quiz
        if(event.target.value === cA){
            console.log("Correct");
            var status=document.querySelector('#incorrect')
            var correct =document.createElement('h2');
            correct.textContent="Incorrect! Please try again.";
            correct.setAttribute('id','incorrect');
            status.appendChild(correct);
            question5();

        }
        else if(event.target.value === 'null'){
        
        }
        else{
            
            console.log("Incorrect, try again!")            
            var incorrect =document.createElement('h2');
            incorrect.textContent="Incorrect! Please try again.";
            incorrect.setAttribute('id','incorrect');
            status.appendChild(incorrect);
            

            document.querySelector('#timer').textContent=(timeLeft-=15);
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    } 
}

function question5 (){
    //check time
    console.log(timeLeft);
    //if time left is over 0 continue

    if(timeLeft>0){
    //reset page
    divQuestion.removeChild(divQuestion.lastElementChild);
    quizAnswerContainer.removeChild(quizAnswerContainer.lastElementChild);
    document.getElementById('incorrect').remove();


    
    

    
    

        for(var i=0; i<q2.length; i++){
            var cA=(q5[i].a)
            console.log(cA);
            var h2=document.createElement('h2');
            h2.setAttribute('class','h1');
            h2.textContent=q5[0].question;
            divQuestion.appendChild(h2);
            //create ul
            var ul=document.createElement('ul');
            ul.setAttribute('class', 'list');
            ul.setAttribute('id', 'list-item')
            //loop to generate answers from array
            var choice= q5[i].choices;
            console.log(choice)
            
        }
        for(var j=0; j<choice.length; j++){
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
        var section=document.createElement('section');
        section.setAttribute('id','incorrect');
        quizWrapper.appendChild(section);
        var status=document.querySelector('#incorrect')
        var divElStatus=document.createElement('div');
        status.appendChild(divElStatus);
    
        //function to start the quiz
        if(event.target.value === cA){
            console.log("Correct");
            var status=document.querySelector('#incorrect')
            var correct =document.createElement('h2');
            correct.textContent="Incorrect! Please try again.";
            correct.setAttribute('id','incorrect');
            status.appendChild(correct);
            endGame();

        }
        else if(event.target.value === 'null'){
        
        }
        else{
            
            console.log("Incorrect, try again!")            
            var incorrect =document.createElement('h2');
            incorrect.textContent="Incorrect! Please try again.";
            incorrect.setAttribute('id','incorrect');
            status.appendChild(incorrect);
            

            document.querySelector('#timer').textContent=(timeLeft-=15);
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    } 
}

//endGame function
var endGame= function endGame(){
    var score=timeLeft;
    console.log(score);
    if(score<0){
    alert('Your score is 0');
    clearInterval(timeInterval);
    return;}
    else{
        alert('Your score is '+  score);
        clearInterval(timeInterval);
        console.log(score)
        return;
    }

}









// event listeners


document.querySelector("#start-quiz").addEventListener("click", startQuiz,countdown) //removeButton);


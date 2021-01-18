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
var btnWrapper=document.querySelector('#buttons')
var btnContainer=document.querySelector('#btn-container')
var scoreWrapper=document.querySelector('#scoreWrapper')

var viewHighScore=function(event){
    //clear content
    clearInterval(timeInterval);
    quizWrapper.remove();
    btnWrapper.remove();
    timer.textContent='';
    var ul=document.createElement('ul');
    ul.setAttribute('class', 'list');
    ul.setAttribute('id', 'list-item')
    scoreWrapper.appendChild(ul);

var highScores = JSON.parse(localStorage.getItem('userNameArray'))
console.log((highScores))

while(highScores !== null){


    for (let i = 0; i< highScores.length; i++ ){  

    var li = document.createElement('li');
    li.textContent='Player Name: '+ highScores[i][0] + '\nScore: ' + highScores[i][1];
    li.setAttribute('class','list-item');
    li.setAttribute('id','list-item')
    ul.appendChild(li);
    }
    
}


var buttonWrap=document.createElement('div');
buttonWrap.setAttribute('id', 'buttons');
buttonWrap.setAttribute('class','button')
scoreWrapper.appendChild(buttonWrap);
//create play again button and clear high score button
var playAgain=document.createElement('button');
playAgain.setAttribute('id','play')
playAgain.setAttribute('value',taskIdCounter);
playAgain.textContent= 'Play Again?';
taskIdCounter++;

var clearScores=document.createElement('button');
clearScores.setAttribute('id', 'clear');
clearScores.setAttribute('value', taskIdCounter);
clearScores.textContent= 'Clear High Scores';
taskIdCounter++;

buttonWrap.appendChild(playAgain);
buttonWrap.appendChild(clearScores);
var btnClick =function(event){
if(event.target.id === 'play'){
window.location.reload()  
}
else if(event.target.id ==='clear'){
localStorage.clear(userNameArray);
quizAnswerContainer.remove();
}
}  
scoreWrapper.addEventListener('click',btnClick)



}
document.getElementById("view-scores").addEventListener('click',viewHighScore)
//endGame function
var endGame= function endGame(){
    let score=timeLeft;
    console.log(score);
    
    

    timeLeft-=89
    //reset page
    divQuestion.removeChild(divQuestion.lastElementChild);
    quizAnswerContainer.removeChild(quizAnswerContainer.lastElementChild);
    document.getElementById('incorrect').remove();
    var user= prompt('Congratulations! Your score is ' + score ,'\nEnter your initials to save your score.')
    console.log('user name is ' + user);
    let userNameArray=localStorage.getItem('userNameArray')
    ? JSON.parse(localStorage.getItem('userNameArray'))
    : []
    var userName = [
        
            uName=user,
            scores= score,
        
    ]
    console.log(userName)
    userNameArray.push(userName)
    console.log(userNameArray)

    localStorage.setItem('userNameArray', JSON.stringify(userNameArray))//save to local storage
    var displayScore=document.createElement('h2');
    displayScore.setAttribute('id','question');
    displayScore.textContent='Congratulations ' + user +' !' +'\nYour score is ' + score;
    divQuestion.appendChild(displayScore);
    var displayScore=document.createElement('h2');
    displayScore.setAttribute('id','question');
    displayScore.textContent='High Scores: ';
    divQuestion.appendChild(displayScore);
    

    var ul=document.createElement('ul');
            ul.setAttribute('class', 'list');
            ul.setAttribute('id', 'list-item')
            quizAnswerContainer.appendChild(ul);

    var highScores = JSON.parse(localStorage.getItem('userNameArray'))
    console.log((highScores))
    for (let i = 0; i< highScores.length; i++ ){  
    
    var li = document.createElement('li');
        li.textContent='Player Name: '+ highScores[i][0] + '\nScore: ' + highScores[i][1];
        li.setAttribute('class','list-item');
        li.setAttribute('id','list-item')
        ul.appendChild(li);
}

   
  //create play again button and clear high score button
var playAgain=document.createElement('button');
playAgain.setAttribute('id','play')
playAgain.setAttribute('value',taskIdCounter);
playAgain.textContent= 'Play Again?';
taskIdCounter++;

var clearScores=document.createElement('button');
clearScores.setAttribute('id', 'clear');
clearScores.setAttribute('value', taskIdCounter);
clearScores.textContent= 'Clear High Scores';
taskIdCounter++;

btnContainer.appendChild(playAgain);
btnContainer.appendChild(clearScores);
var btnClick =function(event){
    if(event.target.id === 'play'){
      window.location.reload()  
    }
    else if(event.target.id ==='clear'){
        localStorage.clear(userNameArray);
        quizAnswerContainer.remove();
    }
}  
btnWrapper.addEventListener('click',btnClick)
}

//document.getElementById('play').addEventListener('click',)
//document.getElementById('clear').addEventListener('click')



function countdown() {
// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var timeInterval = setInterval(function() {
// As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
    // Set the `textContent` of `timer` to show the remaining seconds
    timer.textContent = timeLeft;
    // Decrement `timeLeft` by 1
    timeLeft--;
    } else if (timeLeft === 0) {
    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timer.textContent = timeLeft;
    timeLeft;
    endGame();
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
            correct.textContent="Correct!";
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
            
            

            if (timeLeft>0){
                document.querySelector('#timer').textContent=(timeLeft-=15);
                if(timeLeft<0){
                    timeLeft=0
                }
            }else{
                timeAtEnd=timeLeft;
                console.log(timeAtEnd);
                let score=timeAtEnd;
                console.log(score);
                timeLeft.textContent="0";
                endGame();
                
            }
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
            correct.textContent="Correct!";
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
            if (timeLeft>0){
                document.querySelector('#timer').textContent=(timeLeft-=15);
                if(timeLeft<0){
                    timeLeft=0
                }
            }else{
                timeAtEnd=timeLeft;
                console.log(timeAtEnd);
                let score=timeAtEnd;
                console.log(score);
                timeLeft.textContent="0";
                endGame();
                
            }
            

           
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    }
    else{endGame();} 
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
            correct.textContent="Correct!";
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
            if (timeLeft>0){
                document.querySelector('#timer').textContent=(timeLeft-=15);
                if(timeLeft<0){
                    timeLeft=0
                }
            }else{
                timeAtEnd=timeLeft;
                console.log(timeAtEnd);
                let score=timeAtEnd;
                console.log(score);
                timeLeft.textContent="0";
                endGame();
                
            }
            

            
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    }
    else{endGame();} 
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
            correct.textContent="Correct!";
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

            if (timeLeft>0){
                document.querySelector('#timer').textContent=(timeLeft-=15);
                if(timeLeft<0){
                    timeLeft=0
                }
            }else{
                timeAtEnd=timeLeft;
                console.log(timeAtEnd);
                let score=timeAtEnd;
                console.log(score);
                timeLeft.textContent="0";
                endGame();
                
            }
            

            
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    }
    else{endGame();}
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
            correct.textContent="Correct!";
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
            if (timeLeft>0){
                document.querySelector('#timer').textContent=(timeLeft-=15);
                if(timeLeft<0){
                    timeLeft=0
                }
            }else{
                timeAtEnd=timeLeft;
                console.log(timeAtEnd);
                let score=timeAtEnd;
                console.log(score);
                timeLeft.textContent="0";
                endGame();
                
            }
            

            
        }
        
    }
    
    document.getElementById('list-item').addEventListener("click", checkAnswer);
    
    
    }
    else{endGame();}
}



    
       
    


    


    











// event listeners


document.querySelector("#start-quiz").addEventListener("click", startQuiz,countdown) //removeButton);


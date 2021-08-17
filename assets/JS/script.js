let startTime = 90;
let penPoints = 0;
let currentQuestion = 0;
let currentTime;
let t;
let finalScore;
const gameQuestions = [
    {
        question: 'Which Company developed JavaScript?',
        choices: ["1. Bell Labs", "2. Netscape", "3. Sun Microsystems", "4. IBM",],
        a: "2. Netscape"
    },
    {
        question: 'Which of the following is not a JavaScript Data Type?',
        choices: ['1. Undefined', '2. Number', '3. Boolean', '4. Float'],
        a: '4. Float'
    },
    {
        question: ' The _______ method of an Array object adds and/or removes elements from an array.',
        choices: ['1. Reverse', '2. Shift', '3. Slice', '4. Splice'],
        a: '4. Splice'
    },
    {
        question: ' Which method receives the return value of setInterval() to cancel future invocations?',
        choices: ['1. clearInvocation()', '2. cancelInvocation()', '3. clearInterval()', '4.clear()'],
        a: '3. clearInterval()'
    },
    {
        question: ' What was the original name of JavaScript?',
        choices: ['1. LiveScript', '2. EScript', '3. Mocha', '4.Java'],
        a: '3. Mocha'
    }
];
// game timer
function timer() {
    currentTime = startTime;
    t = setInterval(() => {
        currentTime--
        const actualTime = currentTime - penPoints
        if (actualTime > 0) {
            $('#timer').text(() => (`${actualTime}`))
        } else {
            endGame()
        }
    }, 1000);

};
function stopTimer() {
    clearInterval(t)
    $('#timer').text(() => (`${startTime}`))
}
// hide opening
function hideIntro() {
    $('#intro').hide();
}
// show opening
function showIntro() {
    $('#intro').show();
}
// Questions and Answers
function displayQuestion(question) {
    $(`<h2 id='currentQuestion' class='h1'>${question}</h2>`).appendTo('#question')
};
function displayChoices(choices) {
    $(`<ul id='list-item' class='list'>${choices.map(choice => (
        `<li class='list-item'>${choice}</li>`
    )).join('')}<ul>`).appendTo('#quiz-answers');
};
function handleResponse(response) {
    $(`<p class='incorrect'>${response}</p>`).appendTo("#response");
    setTimeout(() => { removeResponse() }, 750)
};
function removeResponse() {
    $('.incorrect').remove()
}
// Answer and next question handler
function handleAnswer(a) {
    $("li").click((e) => {
        removeResponse()
        const userAnswer = e.target.innerText;
        if (userAnswer === a) {
            handleResponse(`Correct!`);
            handleNext();
        } else {
            penPoints += 15;
            handleResponse(`Incorrect!`);
            handleNext();
        }
    });
};
function handleNext() {
    currentQuestion++;
    const nextQuestion = currentQuestion;
    $("h2").remove();
    $("ul").remove();
    if (nextQuestion === gameQuestions.length) {
        endGame()
    } else {
        quizQuestions(nextQuestion);
    }
};
// game function
function quizQuestions(currentQuestion) {
    const { question, choices, a } = gameQuestions[currentQuestion];
    displayQuestion(question);
    displayChoices(choices);
    handleAnswer(a);
};
// end game handler
function endGame() {
    finalScore = currentTime - penPoints
    stopTimer()
    $('#quiz-wrapper').hide();
    $('#scoreWrapper').show();
    highScore(finalScore);
}
function highScore(finalScore) {
    $(`<h2 id='highScoreMessage'>Congratulations! Your score is ${finalScore}!</h2>`).appendTo('#scoreContainer');
    $(`<p id='saveHighScore'>Would you like to save your high score?</p>`).appendTo('#scoreContainer');
    renderHighScoreButtons()
}
function renderHighScoreButtons() {
    const buttons = [
        { name: 'yes' },
        { name: 'no' }
    ]
    $(`<div id='buttonContainer'>${buttons.map(button => (
        `<button id="${button.name}-btn" class="button">${button.name}</button>`
    )).join('')}</div>`).appendTo('#scoreWrapper')
    $('#yes-btn').click(() => {
        enterHighScore()
    })
    $('#no-btn').click(() => {
        removeHighScoreUI()
        delYesNoButtons()
        reset()
    })
}
function removeHighScoreUI() {
    $('#highScoreMessage').remove()
    $('#saveHighScore').remove()
}
function delYesNoButtons() {
    $('#yes-btn').remove()
    $('#no-btn').remove()
}
function reset() {
    $('#form').remove()
    $('#intro').show();
    $('#scoreWrapper').hide()
    currentQuestion = 0
    currentTime = 0
    penPoints = 0
}
function enterHighScore() {
    delYesNoButtons()
    $('#saveHighScore').text(() => `Enter your name or initials!`)
    $(`<div id='form'>
<input type='text' class='form-input' name='name' required minlength='2' maxlength='30'> <button id='submitBtn' class='button'>Submit</button>
</div>`).appendTo('#buttonContainer')
    submitHighScore();
}
function submitHighScore() {
    $('#submitBtn').click(() => {
        const name = $('.form-input').val();
        saveHighScore(name)
    })
}
function saveHighScore(name) {
    const user = {
        name: name,
        score: finalScore
    }
    const userScores = localStorage.getItem('userScores') ?
        JSON.parse(localStorage.getItem('userScores')) : []
    userScores.push(user);
    localStorage.setItem('userScores', JSON.stringify(userScores))
    removeHighScoreUI()
    reset()
}
// view high scores
function viewHighScore() {
    $('#view-scores').click(() => {
        if ($('#view-scores')[0].innerText === 'View High Scores') {
            reset()
            $('#currentQuestion').remove()
            $('main').hide()
            $('#view-scores').text(() => (`Go Back`))
            const highScores = JSON.parse(localStorage.getItem('userScores'))
            if (highScores !== undefined && highScores !== null) {
                $(`<ul id='list-item' class='list'>${highScores.map(score => (
                    `<li class='list-item'><span class='score'><p class='scoreP'>${score.name}</p>  <p class='scoreP'>${score.score}</p></span></li>`
                )).join('')}<ul>`).appendTo('#highScoreContainer');
            }
        } else {
            removeHighScoreUI()
            delYesNoButtons()
            $('ul').remove()
            $('#view-scores').text(() => ('View High Scores'))
            $('main').show()
            showIntro()
        }
    })
}
// quiz start
$('#start-quiz').click(() => {
    // start timer
    timer();
    // hide the intro div
    hideIntro()
    $("#quiz-wrapper").show()
    // run the quiz
    quizQuestions(0);
});
viewHighScore()
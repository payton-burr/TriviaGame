// Globals
let countdown = 30;
let answerCorrect = 0;
let answerIncorrect = 0;
let unAnswered = 0;

let answers = {
    q1: '2015-Q1',
    q2: '2008-Q2',
    q3: '2009-Q3',
    q4: 'half-life',
    q5: 'entertainment'
}

// Functions

function start() {
    countdown = 30;
    answerCorrect = 0;
    answerIncorrect = 0;
    unAnswered = 0;

    $('#screen-start').show();
    $('#screen-main').hide();
    $('#screen-result').hide();

    $('#button-start').on("click", function() {
        $('#screen-start').hide();
        $('#screen-main').show();
        timer();
    })
}

start();

function timer() {
    setInterval(function() {
        countdown--;
        if (countdown >= 0) {
            $('#timer').text(countdown);
        }
        if (countdown === 0) {
            alert("Out of time");
            clearInterval(countdown);
            returnResult();
        }
    }, 1000);
}

function returnResult() {
    $('#screen-main').hide();
    $('#screen-result').show();

    // It's dry code, I'm trying to figure out how to make it efficient

    if($("input[name='Q1']:checked").val() === answers.q1) {
        answerCorrect++;
    } else if ($("input[name='Q1']:checked").val() === undefined) {
        unAnswered++
    } else if ($("input[name='Q1']:checked").val() !== answers.q1) {
        answerIncorrect++;
    }

    if($("input[name='Q2']:checked").val() === answers.q2) {
        answerCorrect++;
    } else if ($("input[name='Q2']:checked").val() === undefined) {
        unAnswered++
    } else if ($("input[name='Q2']:checked").val() !== answers.q2) {
        answerIncorrect++;
    }

    if($("input[name='Q3']:checked").val() === answers.q3) {
        answerCorrect++;
    } else if ($("input[name='Q3']:checked").val() === undefined) {
        unAnswered++
    } else if ($("input[name='Q3']:checked").val() !== answers.q3) {
        answerIncorrect++;
    }

    if($("input[name='Q4']:checked").val() === answers.q4) {
        answerCorrect++;
    } else if ($("input[name='Q4']:checked").val() === undefined) {
        unAnswered++
    } else if ($("input[name='Q4']:checked").val() !== answers.q4) {
        answerIncorrect++;
    }

    if($("input[name='Q5']:checked").val() === answers.q5) {
        answerCorrect++;
    } else if ($("input[name='Q5']:checked").val() === undefined) {
        unAnswered++
    } else if ($("input[name='Q5']:checked").val() !== answers.q5) {
        answerIncorrect++;
    }

    $('#answers-correct').text(answerCorrect);
    $('#answers-incorrect').text(answerIncorrect);
    $('#answers-unanswered').text(unAnswered);
}
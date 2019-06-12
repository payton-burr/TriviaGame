// Globals

let score = 0;
let countdown = 30;
let answerCorrect = 0;
let answerIncorrect = 0;
let unAnswered = 0;

// Functions

function start() {
    score = 0;
    countdown = 30;
    answerCorrect = 0;
    answerIncorrect = 0;
    unAnswered = 0;

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
        }
    }, 1000);
}


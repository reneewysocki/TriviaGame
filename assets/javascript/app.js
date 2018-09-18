$(document).ready(function () {

    var timeRemaining = 20;

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    var questions = [
        {
            question: "Which of these terms means to cook food in its own juices with a small amount of fat over low heat, just until softened?",
            choices: ["Sweating", "Sauteeing", "Stewing", "Simmering"],
            correctAnswer: "Sweating"
        },
        {
            question: "What is the difference between a convection and a conduction oven?",
            choices: ["Heat", "Fans", "Broiler", "Simmering"],
            correctAnswer: "Fans",
        },

    ];

    function startGame() {
        $('#start').on('click', function () {
            renderQuestions();
            timer();
            $('#start').hide();
        });

        $('#submit').on('click', function () {
            onSubmit();
        });




    };


    function renderQuestions() {
        for (var i = 0; i < questions.length; i++) {
            var question_el = $('<p class="question">').html(questions[i].question);

            var choices_el = $('<div class="choices">');

            questions[i].choices.forEach(function (choice) {
                choices_el.append(
                    $('<label>')
                        .prepend($('<input class="choice" type="radio" name="q' + i + '" value="' + choice + '"/>'))
                        .append(choice)
                )
            });

            $('#quiz').append(
                $('<div class="questionContainer">')
                    .append(question_el)
                    .append(choices_el)
            );
        }


    };

    function timer() {
        $('#timer').html("Time: " + timeRemaining + " seconds");

        if (timeRemaining <= 0) {
            onSubmit();
        } else {
            timeRemaining--;
            counter = setTimeout(timer, 1000);
        }
    }

    function onSubmit() {
        clearTimeout(counter);
        $('#quiz').hide();

        for (var i = 0; i < questions.length; i++) {
            console.log("Question " + questions.indexOf(questions[i]) + " Answer: " + questions[i].correctAnswer);
            var userInput = $('[name=q' + i + ']:checked').val();
            console.log("Your Answer: " + userInput);
            if (userInput === undefined) {
                console.log("EMPTY")
                unanswered++
            }
            else if (questions[i].correctAnswer == userInput) {
                console.log("CORRECT")
                correctAnswers++
            }
            else {
                console.log("INCORRECT")
                wrongAnswers++
            }
        }
        $("#results").append("<div id='correctAnswers'> Correct Answers: " + correctAnswers + "</div>");
        $("#results").append("<div id='wrongAnswers'> Wrong Answers: " + wrongAnswers + "</div>");
        $("#results").append("<div id='unanswered'> Unanswered Questions: " + unanswered + "</div>");
    }



    startGame();
});
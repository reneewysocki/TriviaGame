$(document).ready(function () {

    var timeRemaining = 60;

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    var questions = [
        {
            question: "According to Jerry, how old was he when Gayle took his virginity?",
            choices: ["30", "20", "24", "34"],
            correctAnswer: "24"
        },
        {
            question: "According to Ron, what is NOT one of the three most important people in a man's life?",
            choices: ["Butcher", "Barber", "Lover", "Mother"],
            correctAnswer: "Mother",
        },
        {
            question: "After Gunderson's death, who was appointed interim mayor of the town?",
            choices: ["Jerry", "Joan", "Donna", "John Ralphio"],
            correctAnswer: "Jerry",
        },
        {
            question: "How much did Craig pay Andy to perform at a children's party?",
            choices: ["$200", "$150", "$250", "$100"],
            correctAnswer: "$150",
        },
        {
            question: "How many personal days does Ron say he has accumulated when he goes on the run from Tammy?",
            choices: ["228", "187", "246", "193"],
            correctAnswer: "228",
        },
        {
            question: "In what language does Chris train Champion while he's dog sitting?",
            choices: ["Dutch", "Swedish", "German", "Chinese"],
            correctAnswer: "German",
        },
        {
            question: "Ron is devastated when he find out his favorite steak house has _______________",
            choices: ["A New Manager", "Moved to a New Location", "Turned into an Arby's", "Been Closed by the Health Department"],
            correctAnswer: "Been Closed by the Health Department",
        },
        {
            question: "What does Ben ultimately buy for Leslie to cheer her up when she is recalled? ",
            choices: ["A Trip to Paris", "JJ's Diner's Waffle Iron", "One Hour with Jen Barkley", "Embroidered Pillow"],
            correctAnswer: "One Hour with Jen Barkley",
        },
        {
            question: "What is the top spot on the Ron Swanson Pyramid of Greatness?",
            choices: ["Honor", "America", "Woodworking", "Greatness Itself"],
            correctAnswer: "Honor",
        },
        {
            question: "What is NOT a name of one of Tom's businesses?",
            choices: ["Entertainment 720", "The Clubmarine", "Rent-A-Swag", "Tom's Bistro"],
            correctAnswer: "The Clubmarine",
        },

    ];

    function startGame() {
        $('#start').on('click', function () {
            renderQuestions();
            timer();
            $('#start').hide();
            $('#instructions').hide();
            $('#submit').show();
        });
    };


    function renderQuestions() {
        for (var i = 0; i < questions.length; i++) {
            var question_el = $('<p class="question">').html((questions.indexOf(questions[i])+ 1) + ". " + questions[i].question);

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
            $("#results").append("<br> Question " + (questions.indexOf(questions[i])+ 1) + "<br>" + questions[i].question + "<br> Answer: " + questions[i].correctAnswer + "<br>" );
            var userInput = $('[name=q' + i + ']:checked').val();
            $("#results").append("Your Answer: " + userInput + "</br>");
            if (userInput === undefined) {
                $("#results").append("EMPTY<br>")
                unanswered++
            }
            else if (questions[i].correctAnswer == userInput) {
                $("#results").append("CORRECT<br>")
                correctAnswers++
            }
            else {
                $("#results").append("INCORRECT<br>")
                wrongAnswers++
            }
        }
        $("#results").prepend("<div id='correctAnswers'> Correct Answers: " + correctAnswers + "</div>");
        $("#results").prepend("<div id='wrongAnswers'> Wrong Answers: " + wrongAnswers + "</div>");
        $("#results").prepend("<div id='unanswered'> Unanswered Questions: " + unanswered + "</div>");
    }

    $('#submit').on('click', function () {
        onSubmit();
        $("#submit").hide();
   })

    startGame();
    $('#submit').hide();
});
$(document).ready(function () {

    var timeRemaining = 60; 

    var questions = [
        {
            question: "Which of these terms means to cook food in its own juices with a small amount of fat over low heat, just until softened?",
            choices: ["Sweating", "Sauteeing", "Stewing", "Simmering"],
            correctAnswer: 0
        },
        {
            question: "What is the difference between a convection and a conduction oven?",
            choices: ["Heat", "Fans", "Broiler", "Simmering"],
            correctAnswer: 1
        },

    ];

    function startGame () {
        $('#startBtn').on('click', function () {
            renderQuestions();
            timer();
            $('#startBtn').hide();
		});
    };


    function renderQuestions() {
       for (var i=0; i< questions.length; i++) {
        var question_el = $('<p>').html(questions[i].question);

        var choices_el = $('<div>');

        questions[i].choices.forEach(function (choice) {
            choices_el.append(
                $('<label class="choice">')
                    .append($('<input type="radio" name="q' + i + '" value="' + choice + '"/>'))
                    .append(choice)
            )
        });

        $('#quiz').append(
            $('<div class="question">')
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
    }
    
    startGame();
});
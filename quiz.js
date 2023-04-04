
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 

$(document).ready(function() {

	var questions = [
		"Question 1: What is the capital of Kazakhstan?",
		"Question 2: What language is not used for web programming?",
		"Question 3: What is the biggest major in SEDS?",
        "Question 4: What command is used for cloning a repository?",
        "Question 5: What does CSS function for?"
	];

	var answers = [
		"Astana",
		"Pascal",
		"computer science",
          "git clone",
          "style"


	];

	var choice_options = [
		["Paris", "Almaty", "Berlin", "Astana"],
		["Java", "JavaScript", "Css", "Pascal"],
		["computer science", "chemical engineering", "aerospace&mechanical engineering", "biomedical engineering"],
          ["git push", "git add", "git clone", "git commit"],
          ["structure", "style", "interaction", "responsive design"]
	];


		
		var score_container = $('#score-box');
	
		for (var i = 0; i < questions.length; i++) {
			var question = $('#quiz-box').append ("<div>").addClass('question');
			question.append ("<p>" + questions[i] + "</p>")

			question.append ("<label><input type='radio' name=q" + i + ">" + choice_options[i][0] + "</label>")
			question.append ("<label><input type='radio' name=q" + i + ">" + choice_options[i][1] + "</label>")
			question.append ("<label><input type='radio' name=q" + i + ">" + choice_options[i][2] + "</label>")
			question.append ("<label><input type='radio' name=q" + i + ">" + choice_options[i][3] + "</label>")

		
	
			
		}

	
	countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
		for (var i = 0 ; i<questions.length ; i++)
         $("input[name=q" + i + "]").each (function (index){
                choice = $(this).parent().text(); 
                console.log (choice);
				if ($( this ).prop("checked") == true && answers [i] == choice){
                     countCorrect += 1;
                }
		
			});
			$("#quiz-box").append ("<p> the result of the quiz is" + countCorrect + "</p>");
			

			
});
});
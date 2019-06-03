let questionNumber = 1;
let score = 0;

function hideSubmitButton(){
  $(".userSubmit").hide();
}

function showSubmitButton(){
  $(".userSubmit").show();
}

function incrementScore () {
    score++;
    $('.scoreCount').text(score);
  }

  function hideTrivia(){
    $( ".trivia" ).hide();
    $( ".nextQuestion" ).hide();
  }

  function showTrivia(){
    $( ".trivia" ).show();
    $( ".nextQuestion" ).show();
  }

  function setQuestionNumber(){
    $('.questionNumber').text(questionNumber);
  }
  function incrementQuestionNumber () {
    questionNumber++;
   setQuestionNumber();
  }

  function createQuestionImage() {
  
    if (questionNumber < STORE.length) {
    $(".questionImage").attr("src", STORE[questionNumber].icon);
    $(".questionImage").attr("alt", STORE[questionNumber].alt);
    }
  }

  function createQuestion(){
    
    if (questionNumber < STORE.length) {
    return `
    <section class = 'info'>
      <ul>
          <li class= "count">Question<span class="questionNumber"> &nbsp;${questionNumber}&nbsp; </span>out of 5</li>
          <li class= "score">Score  <span class= "scoreCount"> &nbsp;${score}&nbsp;</span> : 5 </li>
      </ul>
    </section>
                        
    <hr>

    <form class="questionForm"  method ="post">
      <fieldset>
        <legend class="question">${STORE[questionNumber].question} </legend>
          <div class ="inputBorder answer1">
              <input type="radio" name="answers" id="ans-great-1" required value="${STORE[questionNumber].answers[0]}">
              <label for="ans-great-1">${STORE[questionNumber].answers[0]}</label>
          </div>
              <br>
          <div class ="inputBorder answer2">
              <input type="radio" name="answers" id="ans-great-2" required value="${STORE[questionNumber].answers[1]}">
              <label for="ans-great-2">${STORE[questionNumber].answers[1]}</label>
          </div>
              <br>
          <div class ="inputBorder answer3">
              <input type="radio" name="answers" id="ans-great-3" required value="${STORE[questionNumber].answers[2]}">
              <label for="ans-great-3">${STORE[questionNumber].answers[2]}</label>
          </div>
              <br>
          <div class ="inputBorder answer4">
              <input type="radio" name="answers" id="ans-great-4" required value="${STORE[questionNumber].answers[3]}">
              <label for="ans-great-4">${STORE[questionNumber].answers[3]}</label>
          </div>
        </fieldset>
          <button class = "userSubmit" type="submit">Submit</button>
          <div class="trivia">
            ${STORE[questionNumber].trivia}
          </div>
          <button class = "nextQuestion" type="submit">Next Question</button>
        </form>
    `;
    }
    else{
     showResults();
      restartQuiz();
    }
  }

function isAnswerCorrect(selection){
  
  if($(selection).find('input').val() ===STORE[questionNumber].correctAnswer){
    incrementScore();
    $(selection).css("background-color", "green");
    $(selection).css("color", "white");
  }

  else{
    $(selection).css("background-color", "red");
    $(selection).css("color", "white");
      
    if($(".answer1").find('input').val() ===STORE[questionNumber].correctAnswer){
      $(".answer1").css("background-color", "green");
      $(".answer1").css("color", "white");
    }
    if($(".answer2").find('input').val() ===STORE[questionNumber].correctAnswer){
      $(".answer2").css("background-color", "green");
      $(".answer2").css("color", "white");
    }

    if($(".answer3").find('input').val() ===STORE[questionNumber].correctAnswer){
      $(".answer3").css("background-color", "green");
      $(".answer3").css("color", "white");
    }

    if($(".answer4").find('input').val() ===STORE[questionNumber].correctAnswer){
      $(".answer4").css("background-color", "green");
      $(".answer4").css("color", "white");
    }
  }

}

function startQuiz(){
    $('.quizStart').on('click', '.startButton',function(event)
    {
      $('.questionAnswerForm').css('display', 'block');
      $('.quizStart').remove();
       createQuestionImage();
       hideTrivia();
    });
}

function renderQuestion(){

    $('.questionAnswerForm').html(createQuestion());
    hideSubmitButton();
}

function userSelectAnswer(){

  let selection = " ";

  $('.questionAnswerForm').on('click', '.inputBorder',function(event){
    $(this).find('input').prop('checked',true);
      selection= `.${$(this).attr('class').split(" ")[1]}`;
      showSubmitButton();
  });

  $('.questionAnswerForm').on('submit',function(event){
    event.preventDefault();
    isAnswerCorrect(selection);
    $('.userSubmit').remove();
    showTrivia();
  });
}

function renderNextQuestion(){
    $('.questionAnswerForm').on('click', '.nextQuestion',function(event)
    {
      event.preventDefault();
    incrementQuestionNumber();
    $('.questionAnswerForm').html(createQuestion());
    createQuestionImage();
    hideSubmitButton();
    hideTrivia();
    });

}

function showResults(){
  $('.questionAnswerForm').html(
   ` <div class="quizResult">
    <h1 class ="results">You scored ${score} out of 5</h1>
  <button class = "restartQuiz" type="submit">Restart Quiz</button>
  </div>`
  );

  $(".questionImage").attr("src", "gameEnd.jpg");
  $(".questionImage").attr("alt", "result screen");

}

function restartQuiz(){
  $('.questionAnswerForm').on('click', '.restartQuiz',function(event)
  {
    location.reload();
  });

}

function createQuiz () {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
  }
  
  $(createQuiz);

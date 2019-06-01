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
    console.log("increment is " + questionNumber);
  }

  function createQuestionImage() {
  
    $(".questionImage").attr("src", STORE[questionNumber].icon);
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
                                    <input type="radio" name="feelings-2" id="ans-great-1" value="${STORE[questionNumber].answers[0]}">
                                    <label for="ans-great-1">${STORE[questionNumber].answers[0]}</label>
                                    </div>
                                    <br>
                                    <div class ="inputBorder answer2">
                                    <input type="radio" name="feelings-2" id="ans-great-2" value="${STORE[questionNumber].answers[1]}">
                                    <label for="ans-great-2">${STORE[questionNumber].answers[1]}</label>
                                    </div>
                                    <br>
                                    <div class ="inputBorder answer3">
                                    <input type="radio" name="feelings-2" id="ans-great-3" value="${STORE[questionNumber].answers[2]}">
                                    <label for="ans-great-3">${STORE[questionNumber].answers[2]}</label>
                                    </div>
                                    <br>
                                    <div class ="inputBorder answer4">
                                    <input type="radio" name="feelings-2" id="ans-great-4" value="${STORE[questionNumber].answers[3]}">
                                    <label for="ans-great-3">${STORE[questionNumber].answers[3]}</label>
                                    </div>
                                  </fieldset>
                                  <button class = "userSubmit" type="submit">Submit</button>
                                    <div class="trivia">
                                    ${STORE[questionNumber].trivia}
                                    </div>
                                  <button class = "nextQuestion" type="submit">Next Question</button>
                                </form>
                        </section>
    `;
    }
    else{
     showResults();
      restartQuiz();
     // $('.questionNumber').text(10)
    }
  }

function isAnswerCorrect(selection)
{
  
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

function startQuiz()
{
  console.log("lenght is "+STORE.length);
    $('.quizStart').on('click', '.startButton',function(event)
    {
      $('.questionAnswerForm').css('display', 'block');
     // $('.questionAnswerForm').css('margin-left','auto');
     // $('.questionAnswerForm').css('margin-right','auto');
      $('.quizStart').remove();
       createQuestionImage();
       hideTrivia();
        
    });

}

function renderQuestion(){

    console.log("render is "+questionNumber);
    $('.questionAnswerForm').html(createQuestion());
    hideSubmitButton();

}

function userSelectAnswer(){

  let selection = " ";
  $('.questionAnswerForm').on('click', '.inputBorder',function(event)
  {
    $(this).find('input').prop('checked',true);
      selection= `.${$(this).attr('class').split(" ")[1]}`;
     // console.log("this value is " + radioValue);
      showSubmitButton();
   
  });

  $('.questionAnswerForm').on('submit',function(event)
  {
    event.preventDefault();
    var radioValue = $("input[name='feelings-2']:checked").val();
    console.log("correct answer is " + STORE[questionNumber].correctAnswer);
    isAnswerCorrect(selection);
    $('.userSubmit').remove();
    showTrivia();
  });
}

function renderNextQuestion(){
    console.log("next render is "+questionNumber);
    $('.questionAnswerForm').on('click', '.nextQuestion',function(event)
    {
      event.preventDefault();
    incrementQuestionNumber();
   // createQuestionImage();
    
    console.log("inside render is "+questionNumber);
    
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

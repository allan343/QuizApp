let questionNumber = 1;
let score = 0;

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
    
      console.log("create questino is " + questionNumber);
    return `
    <section class = 'info'>
                             <ul>
                                     <li class= "count">Question<span class="questionNumber"> &nbsp;${questionNumber}&nbsp; </span>out of 10</li>
                                     <li class= "score">Score  <span class= "scoreCount"> &nbsp;${score}&nbsp;</span> : 10 </li>
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
      $('.quizStart').remove();
       createQuestionImage();
       hideTrivia();
        
        
    });

}

function renderQuestion(){
  //  setQuestionNumber();
    
    console.log("render is "+questionNumber);
    $('.questionAnswerForm').html(createQuestion());

}

function userSelectAnswer(){
  //changing background color
  // set click handler on the div
  // change child radio button to be checked
  // just set background to be red
  // set the correct id to be green
  let selection = " ";
  $('.questionAnswerForm').on('click', '.inputBorder',function(event)
  {
    $(this).find('input').prop('checked',true);

    //console.log("this is " +this);
    //  console.log("this is " + $(this).attr('class'));
      selection= `.${$(this).attr('class').split(" ")[1]}`;
      //selection = $(this).attr('class');
    //  console.log("class is " + selection);
      var radioValue = $(selection).find('input').val();
      console.log("this value is " + radioValue);
     // $(this).css("background-color", "green");
     // $(this).css("color", "white");
    //console.log("current target is " + event.currentTarget);
    //this
    //this event.currentTarget=
    //background color
  });

  $('.questionAnswerForm').on('submit',function(event)
  {
    event.preventDefault();
    var radioValue = $("input[name='feelings-2']:checked").val();
    console.log("correct answer is " + STORE[questionNumber].correctAnswer);
   /* if(radioValue === STORE[questionNumber].correctAnswer)
    {
      incrementScore();
    }*/
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
    createQuestionImage();
    
    console.log("inside render is "+questionNumber);
    
    $('.questionAnswerForm').html(createQuestion());
    hideTrivia();
    });

}

function createQuiz () {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
  }
  
  $(createQuiz);

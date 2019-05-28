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
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-1" value="${STORE[questionNumber].answers[0]}" checked>
                                    <label for="ans-great-1">${STORE[questionNumber].answers[0]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-2" value="${STORE[questionNumber].answers[1]}">
                                    <label for="ans-great-2">${STORE[questionNumber].answers[1]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-3" value="${STORE[questionNumber].answers[2]}">
                                    <label for="ans-great-3">${STORE[questionNumber].answers[2]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
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
  $('.questionAnswerForm').on('submit',function(event)
  {
    event.preventDefault();
    var radioValue = $("input[name='feelings-2']:checked").val();
    console.log("correct answer is " + STORE[questionNumber].correctAnswer);
    if(radioValue === STORE[questionNumber].correctAnswer)
    {
      incrementScore();
    }
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

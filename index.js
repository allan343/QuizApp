let questionNumber = 1;
let score = 0;

function incrementScore () {
    score++;
    $('.scoreCount').text(score);
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
                                     <li class= "score">Score  <span class= "scoreCount"> &nbsp;0&nbsp;</span> : 10 </li>
                            </ul>
                        </section>
                        
    <hr>
    <form class="questionForm" action="/some-server-endpoint" method ="post">
                    
                            <fieldset>
                                    <legend class="question">${STORE[questionNumber].question} </legend>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-1" value="0" checked>
                                    <label for="ans-great-1">${STORE[questionNumber].answers[0]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-2" value="1">
                                    <label for="ans-great-2">${STORE[questionNumber].answers[1]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-3" value="2">
                                    <label for="ans-great-3">${STORE[questionNumber].answers[2]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-4" value="3">
                                    <label for="ans-great-3">${STORE[questionNumber].answers[3]}</label>
                                    </div>
                                  </fieldset>
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

    $('.quizStart').on('click', '.startButton',function(event)
    {
        $('.questionAnswerForm').css('display', 'block');
        $('.quizStart').remove();
       createQuestionImage();
        
        
    });

}

function renderQuestion(){
  //  setQuestionNumber();
  
    console.log("render is "+questionNumber);
    $('.questionAnswerForm').html(createQuestion());

}

function renderNextQuestion(){
    console.log("next render is "+questionNumber);
    $('.questionForm').on('click', '.nextQuestion',function(event)
    {
    incrementQuestionNumber();
    createQuestionImage();
    console.log("next render is "+questionNumber);
    $('.questionAnswerForm').html(createQuestion());
    });

}

function createQuiz () {
    startQuiz();
    renderQuestion();
  //  userSelectAnswer();
   renderNextQuestion();
  }
  
  $(createQuiz);
  
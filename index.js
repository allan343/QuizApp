let questionNumber = 0;
let score = 0;

function incrementScore () {
    score++;
    $('.scoreCount').text(score);
  }

  function incrementQuestionNumber () {
    questionNumber++;
    $('.questionNumber').text(questionNumber);
  }

  function createQuestion(){
    return `
    <hr>
    <form class="questionForm" action="/some-server-endpoint" method ="post">
                    
                            <fieldset>
                                    <legend class="question">${STORE[0].question} </legend>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-1" value="0" checked>
                                    <label for="ans-great-1">${STORE[0].answers[0]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-2" value="1">
                                    <label for="ans-great-2">${STORE[0].answers[1]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-3" value="2">
                                    <label for="ans-great-3">${STORE[0].answers[2]}</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-4" value="3">
                                    <label for="ans-great-3">${STORE[0].answers[3]}</label>
                                    </div>
                                  </fieldset>
                                    <div class="trivia">
                                    ${STORE[0].trivia}
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
        incrementQuestionNumber();

    });

}

function renderQuestion(){
    $('.questionAnswerForm').html(createQuestion());

}

function createQuiz () {
    startQuiz();
    renderQuestion();
  //  userSelectAnswer();
  //  renderNextQuestion();
  }
  
  $(createQuiz);
  
let questionNumber = 0;
let score = 0;

function changeScore () {
    score ++;
  }

  function createQuestion(){
    return `
    <hr>
    <form class="questionForm" action="/some-server-endpoint" method ="post">
                    
                            <fieldset>
                                    <legend class="question">How did Daenerys Targaryen eventually hatch her dragon eggs? </legend>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-1" value="0" checked>
                                    <label for="ans-great-1">In a lightning storm</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-2" value="1">
                                    <label for="ans-great-2">In a funeral pyre.</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-3" value="2">
                                    <label for="ans-great-3">In a fireplace.</label>
                                    </div>
                                    <br>
                                    <div class =inputBorder>
                                    <input type="radio" name="feelings-2" id="ans-great-4" value="3">
                                    <label for="ans-great-3">In a frozen cave.</label>
                                    </div>
                                  </fieldset>
                                    <div class="trivia">
                                            At the end of Season 1, Daenerys Targaryen placed her three dragon eggs on the funeral pyre of her late husband. She then walked into the flames and emerged from the ashes the next morning holding three newly hatched dragons. 
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
        changeScore();


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
  
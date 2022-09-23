    // going for auto making slide
    var dataWithJsonType = `[
    {
      "question": "Which one is fruit?",
      "answers": [
        {
          "answerValue" : "Car",
          "IsTrue": false
        },
        {
          "answerValue" : "Bus",
          "IsTrue": false
        },
        {
          "answerValue" : "Orange",
          "IsTrue": true
        },
        {
          "answerValue" : "Bag",
          "IsTrue": false
        }
      ]
    },
    {
      "question": "Which one is fruit?",
      "answers": [
        {
          "answerValue" : "Apple",
          "IsTrue": true
        },
        {
          "answerValue" : "Bag",
          "IsTrue": false
        },
        {
          "answerValue" : "Class",
          "IsTrue": false
        },
        {
          "answerValue" : "Car",
          "IsTrue": false
        }
      ]
    },
    {
      "question": "Which one is fruit?",
      "answers": [
        {
          "answerValue" : "Banana",
          "IsTrue": true
        },
        {
          "answerValue" : "Bag",
          "IsTrue": false
        },
        {
          "answerValue" : "Class",
          "IsTrue": false
        },
        {
          "answerValue" : "Car",
          "IsTrue": false
        }
      ]
    },
    {
      "question": "Which one is fruit?",
      "answers": [
        {
          "answerValue" : "Rock",
          "IsTrue": false
        },
        {
          "answerValue" : "Bag",
          "IsTrue": false
        },
        {
          "answerValue" : "Apple",
          "IsTrue": true
        },
        {
          "answerValue" : "Car",
          "IsTrue": false
        }
      ]
    },
    {
      "question": "Which one is fruit?",
      "answers": [
        {
          "answerValue" : "Computer",
          "IsTrue": false
        },
        {
          "answerValue" : "Bag",
          "IsTrue": false
        },
        {
          "answerValue" : "Class",
          "IsTrue": false
        },
        {
          "answerValue" : "Lemon",
          "IsTrue": true
        }
      ]
    }
    ]`;
    var ABC = ["A" , "B" , "C" , "D"]
    var DataWithObjectType = JSON.parse(dataWithJsonType);
    var QuestionsContainer = document.getElementById("questions__container");
    var CheckAnswerPart = document.getElementById("check__answer__part")
    window.addEventListener("load" , () => {
      MakeSlidePages()
      MakeAnswerContainer()
      var OneLeftLastChild = QuestionsContainerChildren.item(QuestionsContainerChildren.length - 2);
      if(OneLeftLastChild == null){
          CarouselControlNext.disabled = true;
          CarouselControlNext.disabled = true;
          GetScoreButton.classList.remove("d-none");
      }
    });
    function MakeSlidePages(){
        var ContainerAllValue = '';
        var StartDivTagWithCarouselStyles = `<div class="carousel-item">`;
        var FirstStartDivTagWithCarouselStyles = `<div class="carousel-item active">`;
        var StartDivTag = `<div onclick="FindYourSelfInCheckPart(this)">`;
        var EndDivTag  = `</div>`;
        var StartFormTag = ``;
        var EndFormTag = `</form>`;
        for(var i = 0; i < DataWithObjectType.length; i++){
            var HeaderTagForCarousel = `<h2 class="mb-4">Question Number ${i + 1}</h2>`;
            var PragTagForCarousel = `<p class="mb-4 text-center">${DataWithObjectType[i].question}</p>`;
            var StartFormTag = `<form class="question__form question__form__num${i + 1} d-flex flex-column">`;
            var formValue = ``;
            for(var j = 0; j < DataWithObjectType[i].answers.length; j++){
              var FormInput = `<input type="radio" id="question__${i + 1}__answer__${j + 1}" name="form__${i + 1}" class="me-2">`; 
              var FormLable = `<label for="question__${i + 1}__answer__${j + 1}">${ABC[j]} : ${DataWithObjectType[i].answers[j].answerValue}</label>`;
              formValue += StartDivTag + FormInput + FormLable + EndDivTag;
            }
            var SliderValues = `
            ${i == 0 ? FirstStartDivTagWithCarouselStyles : StartDivTagWithCarouselStyles}
              ${HeaderTagForCarousel}
              ${PragTagForCarousel}
              ${StartFormTag}
                ${formValue}
              ${EndFormTag}
            ${EndDivTag}
            `;
            ContainerAllValue += SliderValues;
        }
        QuestionsContainer.innerHTML = ContainerAllValue;
    }
    function MakeAnswerContainer(){
      var ContainerAllValue = "";
      var EndDivTag = `</div>`;
      for(var i = 0; i < DataWithObjectType.length; i++){
        var H3ForCheckPart = `<h3 class="text-white question">Q Number ${i + 1}:</h3>`;
        var StartDivTagForCheckPart = `<div class="answer__container d-flex flex-row justify-content-between flex-wrap question__${i + 1}">`;
        var AnswersContainer = ``;
        for(var j = 0; j < DataWithObjectType[i].answers.length; j++){
          var answer = `<div class="answers text-white d-flex justify-content-center align-items-center answer__${j + 1}">${ABC[j]}</div>`;
          AnswersContainer += answer;
        }
        ContainerAllValue = `
        ${StartDivTagForCheckPart}
          ${H3ForCheckPart}
          ${AnswersContainer}
        ${EndDivTag}
        `
        CheckAnswerPart.innerHTML += ContainerAllValue;
      }
    }
    // i dont want to move from the first slide to the last slide
    var CarouselControlPrev = document.getElementById("previous__button");
    var QuestionsContainerChildren = document.getElementById("questions__container").children;
    var CarouselControlNext = document.getElementById("next__button");
    var GetScoreButton = document.getElementById("GetScore__button");
    CarouselControlPrev.addEventListener("click" , isTheFirstSlide);
    CarouselControlNext.addEventListener("click" , isTheLastSlide);
    function isTheFirstSlide(){
        var isTheFirstSlide = CheckThatIsFirst();
        CarouselControlNext.disabled = false;
        GetScoreButton.classList.add("d-none");
        if(isTheFirstSlide == false) return;
        CarouselControlPrev.disabled = true;
    }
    function isTheLastSlide(){
        var isTheLastSlide = CheckThatIsLast();
        CarouselControlPrev.disabled = false;
        if(isTheLastSlide == false) return;
        CarouselControlNext.disabled = true;
        GetScoreButton.classList.remove("d-none");
    }
    function CheckThatIsFirst(){
        var secondChild = QuestionsContainerChildren.item(1);
        if(secondChild.classList.contains("active")){
            return true;
        }else{
            return false
        }
    }
    function CheckThatIsLast(){
        var OneLeftLastChild = QuestionsContainerChildren.item(QuestionsContainerChildren.length - 2);
        if(OneLeftLastChild.classList.contains("active")){
            return true;
        }else{
            return false
        }
    }
    // making connection between question part and check par
    function FindYourSelfInCheckPart(Element){
      var ElementInput = Element.firstChild;
      var ElementInputId = ElementInput.getAttribute("id")
      var QuestionNumber = ElementInputId.match(/^(question__)(\d+)/gm)[0];
      // it will return something like this question__1
      var AnswerNumber = ElementInputId.match(/(answer__)(\d+)$/gm)[0];
      // it will return something like this answer__3

      // var TheWantedElement = ReturnTheWantedElement(QuestionNumber , AnswerNumber);
      ReturnTheWantedElement(QuestionNumber , AnswerNumber);
    }
    function ReturnTheWantedElement(QuestionNumber , AnswerNumber){
      var TheWantedQuestion = document.querySelector(`.${QuestionNumber }`);
      RemoveSelectedStyleOfAll(TheWantedQuestion)
      var TheWantedAnswer = TheWantedQuestion.querySelector(`.${AnswerNumber}`);
      AddSelectedStyleToAnswer(TheWantedAnswer)
    }
    function RemoveSelectedStyleOfAll(TheWantedQuestion){
      var AllChild = TheWantedQuestion.children;
      var TheNumberOfTestAnswers = 4;
      for(var i = 0; i < TheNumberOfTestAnswers; i++){
        AllChild[i + 1].classList.remove("Current__Choosen__Answer")
        // i should skip the header of the all test the header is [0] and answers are [1] , [2] , [3] , [4]
      }
    }
    function AddSelectedStyleToAnswer(TheWantedAnswer){
      TheWantedAnswer.classList.add("Current__Choosen__Answer");
    }
    GetScoreButton.addEventListener("click" , () => {
      IsEmptyQuestion();
      // این فانکشن چک میکنه که چند سوال بی جواب وجود دارند
    })
    function IsEmptyQuestion(){
      var TheNumberOfAnswers = document.querySelectorAll(".Current__Choosen__Answer").length;
      // این مقدار حاوی تعداد گزینه هایی هست که کاربر انتخاب کرده
      var TheNumberOfQuestion = DataWithObjectType.length;
      // این مقدار حاوی تعداد کل سوالات هست
      var QuestionsWithOutAnswer = TheNumberOfQuestion - TheNumberOfAnswers;
      if(QuestionsWithOutAnswer > 0){
        var isItOk = window.confirm(`Warning : You did not answer to ${QuestionsWithOutAnswer} question. You will loose the score of the answer. If you want to get your score confirm.`);
        if(isItOk == true){
          GetTheScore()
        }else{
          return;
        }
      }else{
        GetTheScore()
      }
    }
    function GetTheScore(){
      var TrueAnswers = [];
      for(var i = 0; i < DataWithObjectType.length; i++){
        for(var j = 0; j < DataWithObjectType[i].answers.length; j++){
          if(DataWithObjectType[i].answers[j].IsTrue == true){
            TrueAnswers.push({
              questionNum : `${i + 1}`,
              TestSym : ABC[j]
            });
          }
        }
      }
      var UserAnswers = returnTheUserAnswers();
      CheckUserVSTrueAnswers(TrueAnswers , UserAnswers);
    }
    function returnTheUserAnswers(){
        var AllTheAnswerContianers = document.querySelectorAll(".answer__container");
        var UserAnswersSymbols = [];
        for(var i = 0; i < AllTheAnswerContianers.length; i++){
          var AnswerContainers = AllTheAnswerContianers.item(i);
          var ChoosenAnswer = AnswerContainers.querySelector(".Current__Choosen__Answer");
          if(ChoosenAnswer == null){
            UserAnswersSymbols.push({
              questionNum : `${i + 1}`,
              TestSym : null
            });
          }
          else{
            UserAnswersSymbols.push({
              questionNum : `${i + 1}`,
              TestSym : ChoosenAnswer.innerHTML
            });
          }
        }
        return UserAnswersSymbols;
    }
    function CheckUserVSTrueAnswers(TrueAnswers , UserAnswers){
      var NumberOfQuestions = TrueAnswers.length;
      var NumberOfCorrectAnswers = 0;
      var NumberOfQuestionWithOutAnswer = 0;
      for(var i = 0; i < NumberOfQuestions; i++){
        if(TrueAnswers[i].TestSym == UserAnswers[i].TestSym) {
          NumberOfCorrectAnswers++
        }
        if(UserAnswers[i].TestSym == null){
          NumberOfQuestionWithOutAnswer++
        }
      }
      ShowResult(NumberOfQuestions , NumberOfCorrectAnswers , NumberOfQuestionWithOutAnswer)
    }
    const result__page = document.getElementById("result__page");
    const TheNumberOfCorrectAnswers = document.getElementById("NumberOfCorrectAnswers");
    const TheNumberOfQuestions = document.getElementById("NumberOfQuestions");
    const TheNumberOfQuestionWithOutAnswer = document.getElementById("TheNumberOfQuestionWithOutAnswer");
    function ShowResult(NumberOfQuestions , NumberOfCorrectAnswers , NumberOfQuestionWithOutAnswer){
      result__page.classList.remove("d-none");
      TheNumberOfQuestions.innerHTML = NumberOfQuestions;
      TheNumberOfCorrectAnswers.innerHTML = NumberOfCorrectAnswers;
      TheNumberOfQuestionWithOutAnswer.innerHTML = NumberOfQuestionWithOutAnswer;
    }
    const AnotherTestButton = document.getElementById("AnotherTestButton");
    AnotherTestButton.addEventListener("click" , ShowTest)
    function ShowTest(){
      window.location.reload()
    }
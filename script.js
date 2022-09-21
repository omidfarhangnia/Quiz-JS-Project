    // going for auto making slide
    var dataWithJsonType = `[
    {
      "question": "This is Question Number ONE",
      "answers": [
        {
          "answerValue" : "this is first answer value",
          "IsTrue": false
        },
        {
          "answerValue" : "this is second answer value",
          "IsTrue": false
        },
        {
          "answerValue" : "this is third answer value",
          "IsTrue": true
        },
        {
          "answerValue" : "this is forth answer value",
          "IsTrue": false
        }
      ]
    } ,
    {
        "question": "This is Question Number TWO",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number THREE",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number FOUR",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number FIVE",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number SIX",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": true
          }
        ]
    },
    {
        "question": "This is Question Number SEVEN",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": true
          }
        ]
    },
    {
        "question": "This is Question Number EIGHT",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number NINE",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    },
    {
        "question": "This is Question Number TEN",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": true
          }
        ]
    },
    {
        "question": "This is Question Number ELEVEN",
        "answers": [
          {
            "answerValue" : "this is first answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is second answer value",
            "IsTrue": true
          },
          {
            "answerValue" : "this is third answer value",
            "IsTrue": false
          },
          {
            "answerValue" : "this is forth answer value",
            "IsTrue": false
          }
        ]
    }
    ]`;

    var DataWithObjectType = JSON.parse(dataWithJsonType);
    var QuestionsContainer = document.getElementById("questions__container");
    window.addEventListener("load" , MakeSlidePages);

    function MakeSlidePages(){
        var ContainerAllValue = '';
        var StartDivTagWithCarouselStyles = `<div class="carousel-item">`;
        var FirstStartDivTagWithCarouselStyles = `<div class="carousel-item active">`;
        var StartDivTag = `<div>`;
        var EndDivTag  = `</div>`;
        var StartFormTag = ``;
        var EndFormTag = `</form>`;
        for(var i = 0; i < DataWithObjectType.length; i++){
            var HeaderTagForCarousel = `<h2 class="mb-4">Question Number ${i + 1}</h2>`;
            var PragTagForCarousel = `<p class="mb-4 text-center">${DataWithObjectType[i].question}</p>`;
            var StartFormTag = `<form class="question__form__num${i + 1} d-flex flex-column">`;
            var formValue = ``;
            for(var j = 0; j < DataWithObjectType[i].answers.length; j++){
              var FormInput = `<input type="radio" id="form__${i + 1}__question__${j + 1}" name="form__${i + 1}" class="me-2">`; 
              var FormLable = `<label for="from__${i + 1}__question__${j + 1}">${DataWithObjectType[i].answers[j]}</label>`;
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
    // i dont want to move from the first slide to the last slide
    var CarouselControlPrev = document.getElementById("previous__button");
    var QuestionsContainerChildren = document.getElementById("questions__container").children;
    var CarouselControlNext = document.getElementById("next__button");
  
    CarouselControlPrev.addEventListener("click" , isTheFirstSlide);
    CarouselControlNext.addEventListener("click" , isTheLastSlide);
    window.addEventListener("load" , () => {
        var OneLeftLastChild = QuestionsContainerChildren.item(QuestionsContainerChildren.length - 2);
        if(OneLeftLastChild == null){
            CarouselControlNext.disabled = true;
            CarouselControlNext.disabled = true;
        }
    })
    
    function isTheFirstSlide(){
        var isTheFirstSlide = CheckThatIsFirst();
        CarouselControlNext.disabled = false;
        if(isTheFirstSlide == false) return;
        CarouselControlPrev.disabled = true;
    }
    function isTheLastSlide(){
        var isTheLastSlide = CheckThatIsLast();
        CarouselControlPrev.disabled = false;
        if(isTheLastSlide == false) return;
        CarouselControlNext.disabled = true;
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
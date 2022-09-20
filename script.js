// i dont want to move from the first slide to the last slide
var CarouselControlPrev = document.getElementById("previous__button");
var QuestionsContainerChildren = document.getElementById("questions__container").children;
var CarouselControlNext = document.getElementById("next__button");

CarouselControlPrev.addEventListener("click" , isTheFirstSlide);
CarouselControlNext.addEventListener("click" , isTheLastSlide);

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

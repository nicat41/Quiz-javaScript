
let  counter;
let counterLine;
class UI {
    constructor() {
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elTime = document.querySelector("#time");
        this.elQuizAnswers = document.querySelector("#quizAnswers");
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elCurrent = document.querySelector("#current");
        this.elTotalQuestion = document.querySelector("#totalQuestion");
        this.elNextQuestion = document.querySelector("#nextQuestion");
        this.elStartContent = document.querySelector("#startContent");
        this.elStartBtn = document.querySelector("#startBtn");
        this.elTimeLine = document.querySelector("#timeLine");

    }

 
    createAnswer(answers) {
        const classList = "border rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left"

        this.elQuizAnswers.innerHTML = '';
        Object.keys(answers).forEach(key => {
            this.elQuizAnswers.innerHTML += `<button class="${classList}" value="${key}">
            <b class="font-bold">${key.toUpperCase()}.</b> ${answers[key]}
            </button>`
        })

    }

     createQuiestionTitle(number, text) {
        this.elQuizTitle.innerHTML =  `<b class="font-bold">${number}.</b> ${text}`

     }

     createCurrentAndTotal(currentNumber, total) {
        this.elCurrent.innerHTML = currentNumber;
        this.elTotalQuestion.innerHTML = total;
     }

     toggleNextButton (type) {
        if(type === "show") {
            this.elNextQuestion.classList.remove("hidden")
        }
        else {
            this.elNextQuestion.classList.add("hidden")
        }
     }

     disabledAnswer (value) {
        if(value) {
        ui.elQuizAnswers.classList.add("pointer-events-none");
        } 
        else {
        ui.elQuizAnswers.classList.remove("pointer-events-none");

        }
     }
     correctAnswer (correct) {
        this.elQuizAnswers.querySelector(`button[value="${correct}"]`).classList.add("bg-[#D4FFBA]")
        
     }

     startTime(value, correct) {
       const  obj = this;
         counter = setInterval(updateTime, 1000) 

        function updateTime () {
            obj.elTime.innerHTML = value
          value--;
          if(value < 0) {
            obj.stopTime()
            obj.correctAnswer(correct)
            obj.disabledAnswer(true)
            obj.toggleNextButton("show")

          }

        }

    }
    stopTime() {
        clearInterval(counter)
    }

    startTimeLine () {
        const obj = this;
        let lineWidth = 0;

        counterLine = setInterval(time, 110)
 

        function time() {

            obj.elTimeLine.style.width = lineWidth + "%";
            lineWidth ++;

            if (lineWidth > 100) {
                clearInterval(counterLine)

            } 
       
        }
    
    }  
       stopTimeLine() {
       clearInterval(counterLine)
        }
}

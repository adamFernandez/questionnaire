const questions = [
  {
    case: "1",
    question: "How old are you?",
    answers: ["18-24", "25-30", "30+"],
    tags: ["YEARS", "YEARS", "YEARS"],
    points: [1, 0.9, 0.8],
    img: "./assets/img/Netflix.png",
  },
  {
    case: "2",
    question: "How are you feeling today?",
    answers: [
      "./assets/img/icons/icon-sad.png",
      "./assets/img/icons/icon-neutral.png",
      "./assets/img/icons/icon-smile.png",
    ],
    tags: ["SAD", "NEUTRAL", "HAPPY"],
    points: [-2, 0, 2],
    img: "./assets/img/Netflix.png",
  },
  {
    case: "3",
    question:
      "Do you have someone who you feel comfortable sharing your feelings with?",
    answers: ["yes", "no"],
    points: [3, 0],
    img: "./assets/img/Meetup.png",
  },
  {
    case: "1",
    question:
      "How many times this week would you say you felt stressed to the point of worry?",
    answers: ["0", "1-2 ", "3+"],
    tags: ["TIMES", "TIMES", "TIMES"],
    points: [3, 0, -2],
    img: "./assets/img/LaptopGirl.png",
  },
  {
    case: "1",
    question:
      "How many times this week have you exercised moderately for more than 20 minutes?",
    answers: ["0", "1", "3+"],
    tags: ["TIMES", "TIME", "TIMES"],
    points: [0, 1, 2],
    img: "./assets/img/Yoga.png",
  },
  {
    case: "1",
    question: "How many hours do you sleep on average every day?",
    answers: ["<6", "6-8", "8+"],
    tags: ["HOURS", "HOURS", "HOURS"],
    points: [-1, 1, 2],
    img: "./assets/img/cooking.png",
  },
  {
    case: "1",
    question: "How many times each day do you stop to relax and breathe?",
    answers: ["0", "1+ "],
    tags: ["TIMES", "TIMES"],
    points: [0, 2],
    img: "./assets/img/Party.png",
  },
];

const paragraph = document.getElementById("paragraph");
const answersContainer = document.getElementById("answers-container");
const answersButtons = document.getElementById("answers");
const buttons = document.getElementsByClassName("answers-btn");
const buttonsBoolean = document.getElementsByClassName("answers-btn-boolean");

const headerQuestion = document.getElementById("header-question");
const cardImage = document.getElementById("card-image");

const buttonsIndex = document.getElementById("buttons-index");
const buttonsQuestions = document.getElementById("buttons-questions");

let questionIndex, currentIndex;
const answers = [];

const startApp = () => {
  paragraph.style.display = "none";
  buttonsIndex.style.display = "none";
  buttonsQuestions.style.display = "block";
  questionIndex = 0;
  showQuestion(questionIndex);
};
let total = 0;

const addAnswer = (value) => {
  //let point = document.getElementsByClassName("answers-btn");
  total = total + value;
  console.log(total);
};

function showQuestion(questionIndex) {
  q = `${questionIndex + 1}. ${questions[questionIndex].question}`;
  headerQuestion.innerHTML = q;

  switch (questions[questionIndex].case) {
    case "1":
      buttonsHide(buttonsBoolean);
      resetButtons();
      questions[questionIndex].answers.forEach((answer, index) => {
        let value = questions[questionIndex].points[index];
        let btn = appendElement(
          "button",
          "answers-btn",
          value,
          answer,
          answersButtons
        );
        let answersTags = questions[questionIndex].tags[index];
        appendElement("span", "answer-span", 0, answersTags, btn);
        btn.addEventListener("click", addAnswer);
      });
      break;
    case "2":
      resetButtons();
      questions[questionIndex].answers.forEach((answer, index) => {
        let value = questions[questionIndex].points[index];
        let btn = appendElement(
          "button",
          "answers-btn",
          value,
          "",
          answersButtons
        );
        appendElementImage("img", "buttons-img", answer, btn);
        let answersTags = questions[questionIndex].tags[index];
        appendElement("span", "answer-span", 0, answersTags, btn);
        btn.addEventListener("click", addAnswer);
      });
      break;
    case "3":
      resetButtons();
      questions[questionIndex].answers.forEach((answer, index) => {
        let value = questions[questionIndex].points[index];
        let btn = appendElement(
          "button",
          "answers-btn-boolean",
          value,
          answer,
          answersButtons
        );
        btn.addEventListener("click", addAnswer);
      });
      break;
    default:
      console.log("nothing to declare");
  }

  answersContainer.style.display = "block";
  cardImage.src = questions[questionIndex].img;
}

const resetButtons = () => {
  paragraph.style.display = "none";
  buttonsIndex.style.display = "none";
  buttonsQuestions.style.display = "block";
  buttonsHide(buttons);
};

const nextQuestion = () => {
  resetButtons();
  currentIndex = questionIndex += 1;
  showQuestion(currentIndex);
};

const appendElement = (
  element,
  className,
  elementValue,
  elementText,
  parentElement
) => {
  let e = document.createElement(element);
  e.classList = className;
  e.value = elementValue;
  e.innerHTML = elementText;
  parentElement.appendChild(e);
  return e;
};

const appendElementImage = (
  element,
  className,
  elementSource,
  parentElement
) => {
  let e = document.createElement(element);
  e.classList = className;
  e.src = elementSource;
  parentElement.appendChild(e);
  return e;
};

const buttonsHide = (buttonName) => {
  for (i = 0; i < buttonName.length; i++) {
    buttonName[i].style.display = "none";
  }
};

const next = document.getElementById("next");
next.addEventListener("click", nextQuestion);

const started = document.getElementById("started");
started.addEventListener("click", startApp);

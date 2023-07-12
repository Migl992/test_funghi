
var questions = [
    {
    id: "A1",
    question: "I funghi:",
    options: ["A contengono clorofilla", "B non contengono clorofilla", "C hanno tutti l'anello"],
    answer: 1,
    explanation: "I funghi non contengono clorofilla."
    },
    {
    id: "A2",
    question: "I funghi appartengono a:",
    options: ["A al regno vegetale", "B al regno animale", "C ad un regno a sé stante"],
    answer: 2,
    explanation: "I funghi appartengono a un regno a sé stante."
    },
    {
    id: "A3",
    question: "Al regno dei funghi appartengono:",
    options: ["A solo quelli ben visibili ad occhio nudo", "B quelli che hanno il cappello", "C anche quelli microscopici non visibili ad occhio nudo"],
    answer: 2,
    explanation: "Al regno dei funghi appartengono anche quelli microscopici non visibili ad occhio nudo."
    },
    {
    id: "A4",
    question: "Cos'è il micelio?",
    options: ["A la parte riproduttiva del fungo", "B la parte vegetativa del fungo", "C è costituito da spore"],
    answer: 1,
    explanation: "Il micelio è la parte vegetativa del fungo."
    },
    {
    id: "A5",
    question: "I funghi epigei sono:",
    options: ["A quelli che non hanno il gambo", "B quelli che crescono sopra il suolo", "C tutti quelli che hanno l'anello"],
    answer: 1,
    explanation: "I funghi epigei sono quelli che crescono sopra il suolo."
    },
    {
    id: "A6",
    question: "I funghi ipogei:",
    options: ["A non esistono", "B crescono solo in America", "C sono quelli che crescono sotto il suolo"],
    answer: 2,
    explanation: "I funghi ipogei sono quelli che crescono sotto il suolo."
    },
    {
    id: "A7",
    question: "I funghi:",
    options: ["A si autoalimentano come le piante", "B non sono in grado di costruirsi le sostanze nutritizie", "C vivono negli ambienti acquatici"],
    answer: 1,
    explanation: "I funghi non sono in grado di costruirsi le sostanze nutritizie."
    },
    {
    id: "A8",
    question: "I funghi si riproducono:",
    options: ["A per mezzo di semi chiamati 'spore'", "B solo a luna calante", "C per duplicazione come i batteri"],
    answer: 0,
    explanation: "I funghi si riproducono per mezzo di semi chiamati 'spore'."
    },
    {
    id: "A9",
    question: "I funghi che crescono su vegetali viventi sono definiti:",
    options: ["A parassiti", "B saprofiti", "C simbionti"],
    answer: 0,
    explanation: "I funghi che crescono su vegetali viventi sono definiti parassiti."
    },
    {
    id: "A10",
    question: "I funghi che crescono su sostanza organica morta sono definiti:",
    options: ["A parassiti", "B saprofiti", "C simbionti"],
    answer: 1,
    explanation: "I funghi che crescono su sostanza organica morta sono definiti saprofiti."
    },
    {
    id: "A11",
    question: "I funghi che vivono in unione con piante sono definiti:",
    options: ["A parassiti", "B saprofiti", "C simbionti"],
    answer: 2,
    explanation: "I funghi che vivono in unione con piante sono definiti simbionti."
    },
    {
    id: "A12",
    question: "I funghi definiti spontanei:",
    options: ["A non esistono", "B sono tutti quelli che si possono vendere", "C sono quelli che provengono dall'ambiente naturale"],
    answer: 2,
    explanation: "I funghi definiti spontanei sono quelli che provengono dall'ambiente naturale."
    },
    {
    id: "A13",
    question: "I funghi definiti coltivati:",
    options: ["A sono quelli di importazione", "B sono tutti quelli che si possono vendere", "C sono quelli che provengono da coltivazioni"],
    answer: 2,
    explanation: "I funghi definiti coltivati sono quelli che provengono da coltivazioni."
    },
    {
    id: "A14",
    question: "I funghi definiti freschi:",
    options: ["A sono solo quelli spontanei", "B sono quelli che non sono stati sottoposti a trattamenti di conservazione", "C sono solo quelli coltivati"],
    answer: 1,
    explanation: "I funghi definiti freschi sono quelli che non sono stati sottoposti a trattamenti di conservazione."
    },
    {
    id: "A15",
    question: "I funghi freschi spontanei:",
    options: ["A non provengono da coltivazioni", "B sono quelli naturali", "C sono quelli coltivati nei Paesi dell'est Europa"],
    answer: 0,
    explanation: "I funghi freschi spontanei non provengono da coltivazioni."
    },
    {
    id: "A16",
    question: "I funghi sono:",
    options: ["A frutti di una propria 'pianta' generalmente non visibile", "B pianticelle con proprie radici", "C vegetali incompleti"],
    answer: 0,
    explanation: "I funghi sono frutti di una propria 'pianta' generalmente non visibile."
    },
    {
    id: "A17",
    question: "I funghi che si coltivano:",
    options: ["A sono solo i porcini e gli champignon", "B si allevano su piante", "C appartengono al gruppo dei funghi saprofiti"],
    answer: 1,
    explanation: "I funghi che si coltivano si allevano su piante."
    },
    // Add more questions here...
  ];
  
  var currentQuestionIndex = 0;
  var correctResponses = 0;
  var incorrectResponses = 0;
  
  var questionContainer = document.getElementById("question-container");
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var submitButton = document.getElementById("submit-btn");
  
  var feedbackContainer = document.getElementById("feedback-container");
  var feedbackElement = document.getElementById("feedback");
  var explanationElement = document.getElementById("explanation");
  var nextButton = document.getElementById("next-btn");
  
  var scoreContainer = document.getElementById("score-container");
  var correctResponsesElement = document.getElementById("correct-responses");
  var incorrectResponsesElement = document.getElementById("incorrect-responses");
  
  function displayQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    for (var i = 0; i < question.options.length; i++) {
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = i;
      li.appendChild(input);
      li.appendChild(document.createTextNode(question.options[i]));
      optionsElement.appendChild(li);
    }
  }
  
  function validateAnswer(selectedAnswer, correctAnswer) {
    selectedAnswer = parseInt(selectedAnswer); // Parse selected answer as an integer
    if (selectedAnswer === correctAnswer) {
      correctResponses++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
      explanationElement.textContent = "";
      return true;
    } else {
      incorrectResponses++;
      feedbackElement.textContent = "Wrong!";
      feedbackElement.style.color = "red";
      explanationElement.textContent = "Correct answer: " + questions[currentQuestionIndex].options[correctAnswer] + ". " + questions[currentQuestionIndex].explanation;
      return false;
    }
  }
  
  
  function updateScore() {
    correctResponsesElement.textContent = "Correct: " + correctResponses;
    incorrectResponsesElement.textContent = "Incorrect: " + incorrectResponses;
  }
  
  function showFeedback() {
    questionContainer.style.display = "none";
    feedbackContainer.style.display = "block";
    updateScore();
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(questions[currentQuestionIndex]);
      questionContainer.style.display = "block";
      feedbackContainer.style.display = "none";
    } else {
      // All questions answered
      questionContainer.style.display = "none";
      feedbackContainer.style.display = "none";
      scoreContainer.style.display = "block";
    }
  }
  
  submitButton.addEventListener("click", function() {
    var selectedAnswer = document.querySelector('input[name="option"]:checked').value;
    var isCorrect = validateAnswer(selectedAnswer, questions[currentQuestionIndex].answer);
    showFeedback();
  });
  
  nextButton.addEventListener("click", function() {
    showNextQuestion();
  });
  
  displayQuestion(questions[currentQuestionIndex]);
  
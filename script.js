
const quizQuestions = [
    {
      question: "Which of the following best describes a Web API?",
      options: [
        "Web APIs are a part of the JavaScript language itself and are built into your browser.",
        "Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions.",
        "Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.",
        "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."
      ],
      answer: 3
    },
    {
      question: "Which of the following would change an element's background to red?",
      options: [
        "element.setAttribute('style', 'red');",
        "element.setAttribute('class', 'background: red');",
        "element.setAttribute('red');",
        "element.setAttribute('style', 'background-color: red');"
      ],
      answer: 3
    },
    {
        question: "How would you append the following to the DOM? var myDiv = document.createElement('div');",
        options: [
            "myDiv.appendChild(document.body);",
            "document.body.appendChild(myDiv);",
            "document.body.appendChild = myDiv;",
            "document.body.appendChild(myDiv);"
        ],
        answer: 3
    },

    { 
        question: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
        options: [
            "setInterval(myTimer, 300)",
            "setInterval(myTimer, 3000)",
            "setInterval(myTimer, 3)",
            "setInterval(myTimer, 30)"
        ],
        answer: 1
    },

    {
        question: "Which attribute would we use to send an alert to the user when they click a specific element?",
        options: [
            "onclick=alert('You clicked me.')",
            "onchange=alert('You clicked me.')",
            "ontoggle=alert('You clicked me.')",
            "onclose=alert('You clicked me.')"
        ],
        answer: 0
    },

    {
        question: "While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?",
        options: [
            "event.dispatchEvent()",
            "event.preventDefault()",
            "event.stopAction()",
            "event.stopPropagation()"
        ],
        answer: 1
    },

    {
        question: "You need to add an event listener to an element, pressEl, that checks to see if the element has been clicked and then runs myFunction(). Which of the following would you add to your code?",
        options: [
            "addEventListener(pressEL, 'click', myFunction)",
            "pressEl.addEventListener('keydown', myFunction())",
            "addEventListener(pressEL, 'mouseover', myFunction())",
            "pressEl.addEventListener('click', myFunction)"
        ],
        answer: 3
    },

    {
        question: "Your colleague notices that when she clicks on a <p> element on her page, handlers run on <p> and on <p>'s parent elements as well. She asks you to help her debug. Which of the following is most likely?",
        options: [
            "A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors.",
            "The parent node of <p> is triggering a bubbling event that is bubbling down towards <p> when it is clicked.",
            "She forgot to add event.preventDefault() in her script.js file.",
            "She added an event listener in the wrong place in her html file."
        ],
        answer: 0
    },

    {
        question: "Which property can you use in order to implement event delegation?",
        options: [
            "event.addEventListener()",
            "event.preventDefault()",
            "event.target",
            "event.stopPropagation()"
        ],
        answer: 2
    },

    {
        question: "Which statement best describes what is happening to data when it is persisted to local storage.",
        options: [
            "The data is stored under the Applications tab in Chrome Dev Tools.",
            "The data is stored in the database in the backend.",
            "The data is stored in the client or browser.",
            "The data is stored in the window called localStorage.",
        ],
        answer: 2
    },

    {
        question: "Why do we need to convert an object into JSON in order for it to properly persist to local storage?",
        options: [
            "Local storage can only store strings, so we convert the object to JSON to store it properly.",
            "It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read.",
            "Local storage only accepts JSON objects.",
            "Local storage cannot read JavaScript, so we convert JavaScript into JSON."
        ],
        answer: 0
    },

    {
        question: "You would like to set var classAttribute equal to an element's class attribute so that you can use the variable later in your code. Which of the following would accomplish this?",
        options: [
            "var classAttribute = element.removeAttribute('class');",
            "var classAttribute = element.getAttribute('class');",
            "var classAttribute = element.setAttribute('class', 'classAttribute);",
            "var classAttribute = element.setAttribute('class');"
        ],
        answer: 1
    },

    {
        question: "You need to retrieve data with the key name of 'formData' from local storage and convert it into an object. How would you accomplish this?",
        options: [
            "var formData = JSON.parse(localStorage.setItem('formData'));",
            "var formData = JSON.stringify(localStorage.getItem('formData'));",
            "var formData = JSON.parse('formData');",
            "var formData = JSON.parse(localStorage.getItem('formData'));"
        ],
        answer: 3
    },

    {
        question: "You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
        options: [
            "git merge feature-52",
            "git branch feature-52",
            "git branch -d feature-52",
            "git checkout feature-52"
        ],
        answer: 2
    },

    {
        question: "Which of the following is NOT an example of why we use client-side storage?",
        options: [
            "It is best practice to use client-side storage to store sensitive information, like a user's payment information.",
            "It allows us to store the contents of a user's shopping cart from a previous session.",
            "We can use it to remember a user's preferences.",
            "It can allow a user to use a site without a network connection."
        ],
        answer: 0
    },


  ];
  
  // global variables
  const startButton = document.getElementById("start-button");
  const quizScreen = document.getElementById("quiz-screen");
  const questionText = document.getElementById("question-text");
  const optionsList = document.getElementById("options-list");
  const gameOverScreen = document.getElementById("game-over-screen");
  const initialsInput = document.getElementById("initials");
  const saveButton = document.getElementById("save-button");
  const highScoresList = document.getElementById("high-scores-list");
  const highScoresScreen = document.getElementById("high-scores-screen");
  const timerDisplay = document.getElementById("timer-display");
  const goBackButton = document.getElementById("go-back-button");
  const clearScoresButton = document.getElementById("clear-button");
  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let timerInterval;
  let score = 0;
  
  // Function to start the quiz
  function startQuiz() {
    startButton.style.display = "none";
    quizScreen.style.display = "block";
    startTimer();
    showQuestion();
  }
  function updateTimerDisplay() {
    timerDisplay.textContent = timeLeft;
  }
 // Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        endQuiz();
    }
          
    }, 1000); 
    }

  
  
  // Function to show a question
  function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsList.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", function () {
        checkAnswer(index);
      });
      li.appendChild(button);
      optionsList.appendChild(li);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
      score++;
    } else {
      // Subtract time for an incorrect answer
      timeLeft -= 10;
      
    }
    updateTimerDisplay();
  
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    updateFinalScoreDisplay();
    updateTimerDisplay();
    
    showHighScoresScreen();

  }
  
 // Function to update the final score display 
  function updateFinalScoreDisplay() {
    const finalScoreDisplay = document.getElementById("final-score");
    finalScoreDisplay.textContent = score;
  }
  
  // Function to show the high scores screen
   function showHighScoresScreen() {
    gameOverScreen.style.display = "block";
    highScoresScreen.style.display = "block";
  }
  
  


// Event listeners
  startButton.addEventListener("click", startQuiz);
  saveButton.addEventListener("click", saveScore);
  goBackButton.addEventListener("click", function () {
    highScoresScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    startButton.style.display = "inline-block";
    timeLeft = 60;
    currentQuestionIndex = 0;
    score = 0;
    updateTimerDisplay();
    });

    clearScoresButton.addEventListener("click", clearHighScores);
  
  // Function to save the score
  function saveScore() {
    const initials = initialsInput.value;
    const scoreData = { initials: initials, score: score };
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    showHighScoresScreen();
    updateHighScoresList();

  }
  function clearHighScores() {
    localStorage.removeItem("highScores");
    updateHighScoresList();
  }
  function updateHighScoresList() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScoresList.innerHTML = "";
    
    highScores.forEach((scoreData) => {
      const li = document.createElement("li");
      li.textContent = `${scoreData.initials}: ${scoreData.score}`;
      highScoresList.appendChild(li);
    });
  }
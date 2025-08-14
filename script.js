// Quiz Data
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    answer: "<style>"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  }
];

let currentQuestion = 0;

function loadQuiz() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const resultDiv = document.getElementById("result");

  if (selected === correct) {
    resultDiv.innerText = "✅ Correct!";
    resultDiv.style.color = "#4CAF50";
  } else {
    resultDiv.innerText = `❌ Wrong! Correct answer: ${correct}`;
    resultDiv.style.color = "#ff4d4d";
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("quiz-section").innerHTML = `<h2>🎉 Quiz Completed!</h2><p>Well done!</p>`;
  }
});

loadQuiz();

// Joke API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Oops! Couldn't fetch a joke.";
    });
}


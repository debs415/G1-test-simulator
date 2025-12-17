import { generateTest, TEST_MODES } from "./quizData.js";

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownBtn = document.querySelector(".dropdown-btn");

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let selectedTestMode = "official";
let currentTest = null;

function populateTestModes() {
	Object.values(TEST_MODES).forEach((mode) => {
		// Create option div
		const optionDiv = document.createElement("div");
		optionDiv.className = "dropdown-option";

		// Create title
		const title = document.createElement("div");
		title.style.fontWeight = "bold";
		title.style.color = "#333";
		title.textContent = mode.title;

		// Create description
		const description = document.createElement("div");
		description.className = "tooltip";
		description.textContent = mode.description;

		// Add both to option
		optionDiv.appendChild(title);
		optionDiv.appendChild(description);

		// Store the mode id
		optionDiv.dataset.mode = mode.id;

		// Add to dropdown
		dropdownContent.appendChild(optionDiv);

		// Add click handler
		optionDiv.addEventListener("click", () => {
			selectedTestMode = mode.id;
			dropdownBtn.textContent = mode.title + " ▼";
			dropdownContent.classList.remove("show");
		});
	});
}

// Toggle dropdown
dropdownBtn.addEventListener("click", () => {
	dropdownContent.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
	if (!e.target.closest(".dropdown")) {
		dropdownContent.classList.remove("show");
	}
});

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
	// Generate test based on selected mode
	currentTest = generateTest(selectedTestMode);

	// reset vars
	currentQuestionIndex = 0;
	score = 0;
	currentTest.categoryScores.roadSigns = 0;
	currentTest.categoryScores.rules = 0;

	scoreSpan.textContent = 0;
	totalQuestionsSpan.textContent = currentTest.totalQuestions;
	maxScoreSpan.textContent = currentTest.totalQuestions;

	startScreen.classList.remove("active");
	quizScreen.classList.add("active");

	showQuestion();
}

function showQuestion() {
	// reset state
	answersDisabled = false;

	const currentQuestion = currentTest.questions[currentQuestionIndex];

	currentQuestionSpan.textContent = currentQuestionIndex + 1;

	const progressPercent =
		(currentQuestionIndex / currentTest.totalQuestions) * 100;
	progressBar.style.width = progressPercent + "%";

	questionText.textContent = currentQuestion.question;

	answersContainer.innerHTML = "";

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.textContent = answer.text;
		button.classList.add("answer-btn");

		// dataset is a property of the button element that allows you to store custom data
		button.dataset.correct = answer.correct;

		button.addEventListener("click", selectAnswer);
		answersContainer.appendChild(button);
	});
}

function selectAnswer(event) {
	// optimization check
	if (answersDisabled) return;

	answersDisabled = true;

	const selectedButton = event.target;
	const isCorrect = selectedButton.dataset.correct === "true";
	const currentQuestion = currentTest.questions[currentQuestionIndex];

	// Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
	Array.from(answersContainer.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		} else if (button === selectedButton) {
			button.classList.add("incorrect");
		}
	});

	if (isCorrect) {
		score++;
		scoreSpan.textContent = score;

		// Track category scores
		if (currentQuestion.category === "roadSigns") {
			currentTest.categoryScores.roadSigns++;
		} else if (currentQuestion.category === "rules") {
			currentTest.categoryScores.rules++;
		}
	}

	setTimeout(() => {
		currentQuestionIndex++;
		// check if there are more questions or if the quiz is over
		if (currentQuestionIndex < currentTest.totalQuestions) {
			showQuestion();
		} else {
			showResults();
		}
	}, 1000);
}

function showResults() {
	quizScreen.classList.remove("active");
	resultScreen.classList.add("active");

	finalScoreSpan.textContent = score;

	const percentage = (score / currentTest.totalQuestions) * 100;

	// Check if it's official test with separate sections
	if (currentTest.mode.mustPassBoth) {
		const roadSignsTotal = currentTest.mode.roadSignsCount;
		const rulesTotal = currentTest.mode.rulesCount;
		const roadSignsScore = currentTest.categoryScores.roadSigns;
		const rulesScore = currentTest.categoryScores.rules;

		const roadSignsPercent = (roadSignsScore / roadSignsTotal) * 100;
		const rulesPercent = (rulesScore / rulesTotal) * 100;

		const passedRoadSigns = roadSignsPercent >= 80;
		const passedRules = rulesPercent >= 80;
		if (passedRoadSigns && passedRules) {
			resultMessage.textContent = `🎉 PASSED! Road Signs: ${roadSignsScore}/${roadSignsTotal}, Rules: ${rulesScore}/${rulesTotal}`;
		} else {
			resultMessage.textContent = `❌ FAILED. Road Signs: ${roadSignsScore}/${roadSignsTotal} ${
				passedRoadSigns ? "✓" : "✗"
			}, Rules: ${rulesScore}/${rulesTotal} ${passedRules ? "✓" : "✗"}`;
		}
	} else {
		// Regular scoring
		if (percentage === 100) {
			resultMessage.textContent = "Perfect! You're a genius!";
		} else if (percentage >= 80) {
			resultMessage.textContent = "Great job! You passed!";
		} else if (percentage >= 60) {
			resultMessage.textContent = "Good effort! Keep learning!";
		} else if (percentage >= 40) {
			resultMessage.textContent = "Not bad! Try again to improve!";
		} else {
			resultMessage.textContent = "Keep studying! You'll get better!";
		}
	}
}

function restartQuiz() {
	resultScreen.classList.remove("active");
	startScreen.classList.add("active");
}

// Initialize on load
populateTestModes();

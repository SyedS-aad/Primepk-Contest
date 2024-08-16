const startBtn = document.querySelector('.start-btn');
        const questionContainer = document.querySelector('.question-container');
        const resultContainer = document.querySelector('.result-container');
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const nextBtn = document.querySelector('.next-btn');
        const resultText = document.getElementById('result-text');
        const resultBtn = document.querySelector('.result-btn');

        const questions = [
            { question: "When was Pakistan created?", options: ["1947", "1950", "1940", "1960"], answer: "1947" },
            { question: "Who was the first Governor-General of Pakistan?", options: ["Liaquat Ali Khan", "Allama Iqbal", "Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"], answer: "Muhammad Ali Jinnah" },
            { question: "What was the Lahore Resolution?", options: ["A demand for separate states", "A call for independence", "A peace treaty", "A trade agreement"], answer: "A demand for separate states" },
            { question: "Which city was the capital of Pakistan in 1947?", options: ["Islamabad", "Lahore", "Karachi", "Rawalpindi"], answer: "Karachi" },
            { question: "Who is known as the Father of the Nation in Pakistan?", options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Liaquat Ali Khan", "Fatima Jinnah"], answer: "Muhammad Ali Jinnah" }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        function shuffleQuestions() {
            questions.sort(() => Math.random() - 0.5);
        }

        function startQuiz() {
            startBtn.style.display = 'none';
            questionContainer.style.display = 'block';
            showQuestion();
        }

        function showQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
            answerOptions.innerHTML = '';
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn');
                button.addEventListener('click', () => selectAnswer(button, currentQuestion.answer));
                answerOptions.appendChild(button);
            });
        }

        function selectAnswer(button, correctAnswer) {
            const selectedOption = button.textContent;
            if (selectedOption === correctAnswer) {
                score++;
            }
            disableOptions();
        }

        function disableOptions() {
            const buttons = answerOptions.querySelectorAll('button');
            buttons.forEach(button => button.disabled = true);
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            questionContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            resultText.textContent = `You scored ${score} out of ${questions.length}.`;
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            resultContainer.style.display = 'none';
            startBtn.style.display = 'block';
            shuffleQuestions();
        }

        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', nextQuestion);
        resultBtn.addEventListener('click', restartQuiz);

        shuffleQuestions();

        
    const quotes = [
        '"There is no power on earth that can undo Pakistan." - Muhammad Ali Jinnah',
        '"Failure is a word unknown to me." - Muhammad Ali Jinnah',
        '"Nations are born in the hearts of poets, they prosper and die in the hands of politicians." - Allama Iqbal',
        '"The greatest achievement of my life was to keep my nation together." - Liaquat Ali Khan',
        '"You can’t cross the sea merely by standing and staring at the water." - Sir Syed Ahmed Khan',
        '"My message to women is: Believe in yourself and your abilities." - Fatima Jinnah',
        '"The future of our country depends on our youth." - Allama Iqbal',
        '"We must work to make our nation strong and prosperous." - Liaquat Ali Khan',
        '"Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man." - Muhammad Ali Jinnah',
        '"We are now all Pakistanis—not Baluchis, Pathans, Sindhis, Bengalis, Punjabis, and so on—and as Pakistanis, we must feel, behave, and act, and we should be proud to be known as Pakistanis and nothing else." - Muhammad Ali Jinnah'
    ];

    function rotateQuote() {
        const quoteElement = document.getElementById("quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    setInterval(rotateQuote, 10000); // Change quote every 10 seconds


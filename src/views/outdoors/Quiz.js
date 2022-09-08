import React, { useState } from 'react';
import './Quiz.css'

export default function Quiz() {
    const questions = [
        {
            questionText: 'Can you tell where the kids ',
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '70%', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Smiling', isCorrect: false },
                { answerText: 'Gloves', isCorrect: true },
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {

        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    return (
        <div className='quiz-container'>
            {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                            {/* <span>Happy Family Gardening Time</span> */}
                        </div>
                        <div className='question-text'>
                            {questions[currentQuestion].questionText}
                            {questions[currentQuestion].questionImage}
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOptions) =>
                            <button className='quizButton' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
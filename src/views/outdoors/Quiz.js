import React, { useState } from 'react';
import './Quiz.css'
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function Quiz() {
    const questions = [
        {
            questionTitle: 'Happy Family Gardening Time',
            questionText: 'Can you tell where the kids did right to avoid infections?',
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '20rem', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Smiling', isCorrect: false },
                { answerText: 'Gloves', isCorrect: true },
                { answerText: 'Hands on planting', isCorrect: false }
            ],
        },
        {
            questionTitle: 'Swimming',
            questionText: 'What should do when kids get spite?',
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '70%', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Just wait for a sec', isCorrect: false },
                { answerText: 'Go to beach and get rest', isCorrect: true },
                { answerText: 'Reach to GP', isCorrect: false }
            ],
        },
        {
            questionTitle: 'Outdoor Sports',
            questionText: 'Avoid infections in outdoor sports?',
            // questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '70%', height: 'auto' }}></img>,
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '70%', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Santisize', isCorrect: true },
                { answerText: 'Keep going on with the play! Game first!', isCorrect: false },
                { answerText: 'asd', isCorrect: false }
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [displayInfectionInfo, setDisplayInfectionInfo] = useState('none');
    const [displayAnswerBtn, setDisplayAnswerBtn] = useState('block');

    const handleAnswerButtonClick = (isCorrect) => {
        setDisplayInfectionInfo('block')
        setDisplayAnswerBtn('none');
        if (isCorrect === true) {
            // setScore(score + 1);
            // alert("Correct")
            return (
                <p>correct</p>
                // console.log('ss')
            )
        }
        else {
            alert("Incorrect")
        }

        <div className="content" style={{ display: 'flex-left' }}>
            <div style={{ paddingTop: "30px" }}>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header=<h2>Legionella</h2> key="1">
                        <p>Some infections info
                        </p>
                    </Panel>
                </Collapse>
            </div>
        </div>

        // const nextQuestion = currentQuestion + 1;
        // if (nextQuestion < questions.length) {
        //     setCurrentQuestion(nextQuestion);
        // }
        // else {
        //     setShowScore(true);
        // }
    }

    return (
        <div className='quiz-container' style={{ position: 'relative' }}>
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
                        <div className='question-text' style={{ position: 'relative' }}>
                            {questions[currentQuestion].questionText}
                            {questions[currentQuestion].questionImage}
                        </div>
                    </div>

                    <div className='answer-section' style={{ display: displayAnswerBtn }}>
                        {questions[currentQuestion].answerOptions.map((answerOptions) =>
                            <button className='quizButton' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                        )}
                    </div>

                    <div>
                        <div className='infection-info-section' style={{ display: displayInfectionInfo, right: '2%', top: '20%', width: '25rem' }}>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header=<h2>Legionella</h2> key="1">
                                    <p>Some infections info
                                    </p>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}
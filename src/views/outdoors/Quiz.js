import React, { useState } from 'react';
import './Quiz.css'
import { Collapse, Button } from 'antd';

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
            infectionName: 'Legionella',
            infectionInfo: 'asd'
        },
        {
            questionTitle: 'Swimming',
            questionText: 'Is there any preparation for swimming to against infections?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/10/girl-953414_1920.jpg" alt="girl-953414_1920.jpg" style={{ width: '20rem', height: 'auto' }} />,
            // questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '20rem', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'A water-tight swim goggles', isCorrect: true },
                { answerText: 'Swimming party', isCorrect: false },
                { answerText: 'Happy mood!', isCorrect: false }
            ],
            infectionName: 'Diarrhea',
            infectionInfo: 'asd'
        },
        // {
        //     questionTitle: 'Swimming',
        //     questionText: 'What should we NOT do after a nicely swimming?',
        //     questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '20rem', height: 'auto' }}></img>,
        //     answerOptions: [
        //         { answerText: 'Directly go for a dinner!', isCorrect: false },
        //         { answerText: 'Gently wipe water from eyes', isCorrect: true },
        //         { answerText: 'Dry ears', isCorrect: false }
        //     ],
        //     infectionName: 'Diarrhea',
        //     infectionInfo: ''
        // },
        {
            questionTitle: 'Outdoor Sports',
            questionText: 'Avoid infections in outdoor sports?',
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '20rem', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Santisize', isCorrect: true },
                { answerText: 'Keep going on with the play! Game first!', isCorrect: false },
                { answerText: 'asd', isCorrect: false }
            ],
            infectionName: '',
            infectionInfo: ''
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [displayIfCorrect, setIfCorrect] = useState('Correct');
    const [displayInfectionInfo, setDisplayInfectionInfo] = useState('none');
    const [displayAnswerBtn, setDisplayAnswerBtn] = useState('block');

    const handleAnswerButtonClick = (isCorrect) => {
        setDisplayInfectionInfo('block')
        setDisplayAnswerBtn('none');
        if (isCorrect === true) {
            setScore(score + 1);
            setIfCorrect('Correct');
        }
        else {
            setIfCorrect('Incorrect');
        }
    }

    const handleClickToNextQuestion = () => {
        setDisplayInfectionInfo('none')
        setDisplayAnswerBtn('block');
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
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
                            {/* <span>{questions[currentQuestion].questionTitle}</span> */}
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
                        <div className='infection-info-section' style={{ display: displayInfectionInfo, right: '2%', top: '20%', width: '22rem' }}>
                            <h2>{displayIfCorrect}</h2>
                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header=<h2>{questions[currentQuestion].infectionName}</h2> key="1">
                                    <p>{questions[currentQuestion].infectionInfo}
                                    </p>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                    <div>
                        <Button className='nextQuestion' onClick={handleClickToNextQuestion}>Next Question</Button>
                    </div>
                </>
            )}
        </div>
    );
}
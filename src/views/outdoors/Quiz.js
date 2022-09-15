import React, { useState } from 'react';
import ReactDOM from "react-dom"
import './Quiz.css'
import { Collapse, Button, Tooltip, message, Steps } from 'antd';
import { CheckCircleTwoTone, SmileTwoTone } from '@ant-design/icons';

const { Panel } = Collapse;
const { Step } = Steps;

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
            infectionInfo: 'While Legionella longbeachae is found in tiny quantities in the general environment (including soil), it is not normally a health hazard. However, the ingredients and dampness of potting mix make it the ideal breeding ground for the bacteria.',
            preventions: 'Always wear a mask and gloves when handling soil, compost or potting mix! Wash hands carefully with soap and water after planting.'
        },
        {
            questionTitle: 'Swimming',
            questionText: 'Is there any preparation for swimming to against infections?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/10/girl-953414_1920.jpg" alt="girl-953414_1920.jpg" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'A water-tight swim goggles', isCorrect: true },
                { answerText: 'Swimming party', isCorrect: false },
                { answerText: 'Happy mood!', isCorrect: false }
            ],
            infectionName: 'Diarrhea',
            infectionInfo: 'The PH of pool matters. Chlorine only works when the PH with the right range (recommends between 7.2 and 7.8.) Otherwise, chlorine is much less effective at killing germs.',
            preventions: 'Dry ears after swimming! Take a quick shower before swimming! Do not swim if sick!'
        },
        {
            questionTitle: 'Outdoor Sports',
            questionText: 'What is a MUST after outdoor sports?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/10/sport-858206_1920.jpg" alt="sport-858206_1920.jpg" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'Wash hands with soap', isCorrect: true },
                { answerText: 'Nothing can compete games!', isCorrect: false },
                { answerText: 'Go dinner with friends', isCorrect: false }
            ],
            infectionName: 'Impetigo, HSV, Ringworm etc.',
            infectionInfo: 'Such amount of infections can be caught by sports activities: bacteria, viruses, fungi and even parasites. ',
            preventions: 'Wash hands with soup is always a MUST. '
        }
    ];

    const steps = [
        { title: 'Happy Family Gardening Time' },
        { title: 'Swimming' },
        { title: 'Outdoor Sports' }];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [displayIfCorrect, setIfCorrect] = useState('Correct');
    const [displayInfectionInfo, setDisplayInfectionInfo] = useState('none');
    const [displayAnswerBtn, setDisplayAnswerBtn] = useState('block');
    const [circleOpacity1, setCircleOpacity1] = useState(0);
    const [circleOpacity2, setCircleOpacity2] = useState(0);
    const [circleOpacity3, setCircleOpacity3] = useState(0);
    const [circleDisplay1, setCircleDisplay1] = useState('none');
    const [circleDisplay2, setCircleDisplay2] = useState('none');
    const [circleDisplay3, setCircleDisplay3] = useState('none');
    const [correctnessAnalysis, setCorrectnessAnalysis] = useState([]);
    const [query, setQuery] = useState('');


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

        if (currentQuestion === 0) {
            setCircleOpacity1(0.6);
            setCircleDisplay1('block');
            // setCorrectnessAnalysis[correctnessAnalysis => correctnessAnalysis.concat(0, isCorrect)];
        }
        else if (currentQuestion === 1) {
            setCircleOpacity2(0.6);
            setCircleDisplay2('block');
            // setCorrectnessAnalysis[correctnessAnalysis.concat(1, isCorrect)];
        }
        else if (currentQuestion === 2) {
            setCircleOpacity3(0.6);
            setCircleDisplay3('block');
            // setCorrectnessAnalysis[correctnessAnalysis.concat(2, isCorrect)];
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

        if (currentQuestion === 0) {
            setCircleOpacity1(0);
            setCircleDisplay1('none');
        }
        else if (currentQuestion === 1) {
            setCircleOpacity2(0);
            setCircleDisplay2('none');
        }
        else if (currentQuestion === 2) {
            setCircleOpacity3(0);
            setCircleDisplay3('none');
        }
    }

    const handleClickToPrevQuestion = () => {
        setDisplayInfectionInfo('none')
        setDisplayAnswerBtn('block');
        const prevQuestion = currentQuestion - 1;
        if (0 < prevQuestion < questions.length) {
            setCurrentQuestion(prevQuestion);
        }

        if (currentQuestion === 0) {
            setCircleOpacity1(0);
            setCircleDisplay1('none');
        }
        else if (currentQuestion === 1) {
            setCircleOpacity2(0);
            setCircleDisplay2('none');
        }
        else if (currentQuestion === 2) {
            setCircleOpacity3(0);
            setCircleDisplay3('none');
        }
    }

    const handleAnalysis = () => {
        alert(correctnessAnalysis);
    }


    return (
        <>
            <Steps current={currentQuestion} style={{ marginTop: "40px" }}>
                {steps.map((item) => (<Step key={item.title} title={item.title}></Step>))}
            </Steps>


            <div className='quiz-container' style={{ position: 'relative', marginTop: "40px" }}>
                <div style={{ opacity: circleOpacity1, display: circleDisplay1, zIndex: "+1", position: 'absolute' }}>
                    <Tooltip title="Golves! Physical isolation from planting bacteria!" placement="rightBottom" >
                        <div className='circle1' ></div>
                    </Tooltip>
                </div>
                <div style={{ opacity: circleOpacity2, display: circleDisplay2, zIndex: "+1", position: 'absolute' }}>
                    <Tooltip title="Swim googgles! Stay away from red eyes!" placement="rightBottom">
                        <div className='circle2' ></div>
                    </Tooltip>
                </div>
                <div style={{ opacity: circleOpacity3, display: circleDisplay3, zIndex: "+1", position: 'absolute' }}>
                    <Tooltip title="Did you know how many germs on ball? Always remember to wash hands after any games!" placement="rightBottom">
                        <div className='circle3' ></div>
                    </Tooltip>
                </div>


                {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
                {showScore ? (
                    <div className='score-section' style={{ display: 'flex', flexDirection: 'column', padding: '5%' }}>
                        <p>You scored {score} out of {questions.length}</p>
                        <Button onClick={handleAnalysis}>Jump to my personal analysis</Button>
                    </div>

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
                                <div style={{ marginTop: '35px' }}>
                                    {displayIfCorrect === 'Correct' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <SmileTwoTone />}
                                    <h2>{displayIfCorrect}</h2>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Collapse bordered={false} defaultActiveKey={['1']}>
                                        <Panel header=<h2>{questions[currentQuestion].infectionName}</h2> key="1">
                                            <p>{questions[currentQuestion].infectionInfo}</p>
                                        </Panel>
                                    </Collapse>
                                    <Collapse bordered={false} defaultActiveKey={['2']}>
                                        <Panel header=<h2>Preventions</h2> key="2">
                                            <p>{questions[currentQuestion].preventions}</p>
                                        </Panel>
                                    </Collapse>
                                </div>
                            </div>
                        </div>


                        {/* {currentQuestion < steps.length - 1 && ( */}
                        <Button className='nextQuestion' type="primary" onClick={handleClickToNextQuestion}>Next</Button>
                        {/* // )} */}

                        {currentQuestion > 0 && (<Button className='prevQuestion' onClick={handleClickToPrevQuestion}>Previous</Button>)}

                        {/* {currentQuestion === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>)} */}
                    </>
                )}
            </div>
        </>
    );
}
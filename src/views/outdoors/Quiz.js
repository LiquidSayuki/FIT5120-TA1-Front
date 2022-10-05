import React, { useState } from 'react';
import './Quiz.css'
import './Popup.scss'
import { Collapse, Button, Tooltip, Steps, Col, Row, Avatar } from 'antd';
import { CheckCircleTwoTone, BarChartOutlined, FrownOutlined, FileSearchOutlined, LikeOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { Tooltip as TP } from "recharts";
import 'animate.css';

const { Panel } = Collapse;
// const { Step } = Steps;


export default function Quiz() {
    // quiz questions
    const questions = [

        // new Qs
        {
            questionTitle: 'Happy Family Gardening Time',
            questionText: 'Did you know that we can get infected in gardening?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/26/child-planting.jpg" alt="planting1" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'No', isCorrect: false },
                { answerText: 'Yes', isCorrect: true }
            ],
            infectionName: 'YES We Can',
            infectionInfo: 'It is common to neglect that there are actually spreaded bacterias in the soil and harmful to human.',
            preventions: 'Wanna know how? Lets continue playing!'
        },

        // original Qs
        {
            questionTitle: 'Happy Family Gardening Time',
            questionText: 'Can you tell where the kids did right to avoid infections?',
            questionImage: <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' alt="planting2" style={{ width: '20rem', height: 'auto' }}></img>,
            answerOptions: [
                { answerText: 'Smiling', isCorrect: false },
                { answerText: 'Gloves', isCorrect: true },
                { answerText: 'Hands on planting', isCorrect: false }
            ],
            infectionName: 'Legionella',
            infectionInfo: 'While Legionella longbeachae is found in tiny quantities in the general environment (including soil), it is not normally a health hazard. However, the ingredients and dampness of potting mix make it the ideal breeding ground for the bacteria.',
            preventions: 'Always wear a mask and gloves when handling soil, compost or potting mix!'
        },


        // new Qs
        {
            questionTitle: 'Happy Family Gardening Time',
            questionText: 'What is a MUST after gardening to against infections?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/26/planting3.jpg" alt="planting3" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'Enjoy the happiness', isCorrect: false },
                { answerText: 'Washing hands with soap immediately', isCorrect: true },
                { answerText: 'Go to dinner once finish', isCorrect: false }
            ],
            // TODO
            infectionName: 'Legionella',
            infectionInfo: 'While Legionella longbeachae is found in tiny quantities in the general environment (including soil), it is not normally a health hazard. However, the ingredients and dampness of potting mix make it the ideal breeding ground for the bacteria.',
            preventions: 'Always wash hands carefully with soap and water after planting.'
        },


        // original Qs
        {
            questionTitle: 'Swimming',
            questionText: 'Is there any preparation for swimming to against infections?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/10/girl-953414_1920.jpg" alt="swimming1" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'A water-tight swim goggles', isCorrect: true },
                { answerText: 'Swimming party', isCorrect: false },
                { answerText: 'Happy mood!', isCorrect: false }
            ],
            infectionName: 'Acanthamoeba keratitis',
            infectionInfo: 'A parasite called Acanthamoeba found in rivers, lakes, marshes, and oceans and sometimes in pools and hot tubs can cause a devastating infection.',
            preventions: 'Wear goggles during swimming. Gently wipe water from eyes after swimming!'
        },

        //new Qs
        {
            questionTitle: 'Swimming',
            questionText: 'Which of the followling is a good habit?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/27/young-swimmer-2494906_1920.jpg" alt="swimming2" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'Take kids on bathroom breaks and check diapers every hour.', isCorrect: true },
                { answerText: 'Wait till child wants to go to bathroom.', isCorrect: false }
            ],
            infectionName: 'Crypto causes diarrhea',
            infectionInfo: 'Swallowing 10 or fewer germs can make people sick. Germs can also get in the water if swimmers have poop, even tiny amounts, on their bottoms.',
            // infectionInfo: 'The PH of pool matters. Chlorine only works when the PH with the right range (recommends between 7.2 and 7.8.) Otherwise, chlorine is much less effective at killing germs.',
            preventions: 'Change diapers away from the water’s edge to keep germs from getting in the water. Wash your hands after.'
            // preventions: 'Dry ears after swimming! Take a quick shower before swimming! Do not swim if sick!'
        },

        //new Qs
        {
            questionTitle: 'Outdoor Sports',
            questionText: 'Exercise and changes in immunity have a proven relationship. But did you know very heavy sports may increase risk of infections? ',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/27/soccer-7392844_1920.jpg" alt="sports1" style={{ width: '20rem', height: 'auto' }} />,
            answerOptions: [
                { answerText: 'Yes, very heavy sports may get respiratory tract infections.', isCorrect: true },
                { answerText: 'No, we can only get stronger.', isCorrect: false }
            ],
            infectionName: 'Respiratory tract infections',
            infectionInfo: 'Risks are high especially during 1-2 weeks after heavy training. In a marathon, 33.3% of athletes who ended the marathon got an upper respiratory tract infection (URI) during the first two weeks.',
            preventions: 'Stay hydrated and stay hygiene. Due to immune system function is suppressed for at least several hours after intensive exercise, this time is an “open window” and the risk of infections may be increased in this period.'
        },

        // original Qs
        {
            questionTitle: 'Outdoor Sports',
            questionText: 'What is a MUST after outdoor sports?',
            questionImage: <img src="https://s1.imagehub.cc/images/2022/09/10/sport-858206_1920.jpg" alt="sports2" style={{ width: '20rem', height: 'auto' }} />,
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

    // stepper title data
    // const steps = [
    //     { title: 'Happy Family Gardening Time' },
    //     { title: 'Swimming' },
    //     { title: 'Outdoor Sports' }];

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
    const [popUpDisplay, setPopupDisplay] = useState('none');
    const [correctnessAnalysis, setCorrectnessAnalysis] = useState([]);
    const [showQuiz, setShowQuiz] = useState('none');
    const [showStartQuizBtn, setShowStartQuizBtn] = useState('block');

    const [gardeningScore, setGardeningScore] = useState(0);
    const [swimmingScore, setSwimmingScore] = useState(0);
    const [sportsScore, setSportsScore] = useState(0);

    const handleClickToShowQuiz = () => {
        setShowQuiz('block');
        setShowStartQuizBtn('none');
    }


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
            if (isCorrect) {
                // setCorrectnessAnalysis([...correctnessAnalysis, {
                //     id: currentQuestion,
                //     name: "Gardening",
                //     value: isCorrect,
                //     score: 1
                // }]);
                setGardeningScore(gardeningScore + 1);
            }
        }
        else if (currentQuestion === 1) {
            setCircleOpacity1(0.6);
            setCircleDisplay1('block');

            if (isCorrect) {
                setGardeningScore(gardeningScore + 1);
            }
        }
        else if (currentQuestion === 2) {
            if (isCorrect) {
                setGardeningScore(gardeningScore + 1);
            }
        }
        else if (currentQuestion === 3) {
            setCircleOpacity2(0.6);
            setCircleDisplay2('block');

            if (isCorrect) {
                setSwimmingScore(swimmingScore + 1);
            }
        }
        else if (currentQuestion === 4) {
            if (isCorrect) {
                setSwimmingScore(swimmingScore + 1);
            }
        }
        else if (currentQuestion === 5) {
            if (isCorrect) {
                setSportsScore(sportsScore + 1);
            }
        }
        else if (currentQuestion === 6) {
            setCircleOpacity3(0.6);
            setCircleDisplay3('block');

            if (isCorrect) {
                setSportsScore(sportsScore + 1);
            }
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

        setCircleOpacity1(0);
        setCircleOpacity2(0);
        setCircleOpacity3(0);
        setCircleDisplay1('none');
        setCircleDisplay2('none');
        setCircleDisplay3('none');
        setPopupDisplay('none');
    }

    const handleClickToPrevQuestion = () => {
        setDisplayInfectionInfo('none')
        setDisplayAnswerBtn('block');
        const prevQuestion = currentQuestion - 1;
        if (0 < prevQuestion < questions.length) {
            setCurrentQuestion(prevQuestion);
        }

        setCircleOpacity1(0);
        setCircleOpacity2(0);
        setCircleOpacity3(0);
        setCircleDisplay1('none');
        setCircleDisplay2('none');
        setCircleDisplay3('none');
        setPopupDisplay('none');
    }

    const handleAnalysis = () => {
        console.log(correctnessAnalysis)
    }

    const openPopup = () => {
        setPopupDisplay('block');

        // setCorrectnessAnalysis([...correctnessAnalysis, {
        //     id: currentQuestion,
        //     name: "Sports",
        //     value: isCorrect,
        //     score: 0
        // }]);

        setCorrectnessAnalysis([
            {
                id: 1,
                name: "Gardening",
                score: gardeningScore
            },
            {
                id: 2,
                name: "Swimming",
                score: swimmingScore
            },
            {
                id: 3,
                name: "Sports",
                score: sportsScore
            }
        ]);
    }

    const closePopup = () => {
        setPopupDisplay('none');
    }

    const handleRetry = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setIfCorrect('Correct');
        setDisplayInfectionInfo('none');
        setDisplayAnswerBtn('block');
        setCircleOpacity1(0);
        setCircleOpacity2(0);
        setCircleOpacity3(0);
        setCircleDisplay1('none');
        setCircleDisplay2('none');
        setCircleDisplay3('none');
        setPopupDisplay('none');
        setCorrectnessAnalysis([]);
        setShowQuiz('block');
        setGardeningScore(0);
        setSwimmingScore(0);
        setSportsScore(0);
    }


    return (
        <>
            {/* start quiz section */}
            <div style={{ display: showStartQuizBtn }}>
                <Row>
                    <Col span={14}>

                        {/* 3D animation */}
                        <div style={{ height: '30rem', width: '40rem' }}>
                            <iframe src='https://my.spline.design/adventuretimecopy-1c03fa7cd4e1a29316312ae531377df1/' frameborder='0' width='100%' height='100%'></iframe>
                            {/* <iframe src='https://my.spline.design/adventuretimecopy-1c03fa7cd4e1a29316312ae531377df1/' frameborder='0' width='100%' height='100%'></iframe> */}
                            {/* <iframe src='https://my.spline.design/roomgirlworkingcopy-d1f72c566ecf1f1d3cd5a2f0493e714b/' frameborder='0' width='100%' height='100%'></iframe> */}
                            {/* <iframe src='https://my.spline.design/platformerrabbitcopy-833efd14ec695daab43cc6dc1937d00b/' frameborder='0' width='100%' height='100%'></iframe> */}

                        </div>


                    </Col>
                    <Col span={10}>
                        <div style={{ marginTop: '50px', marginLeft: '70px', fontFamily: 'sans-serif' }}>
                            {/* intro to start quiz */}
                            <h2 >
                                Behaviours in a careful manner can largely reduce the chances of infectious in day to day life.  </h2>
                            <h3 >Let's do a little test and check the hygiene scores! </h3>
                        </div>
                        {/* spinning start quiz button */}
                        <div class="wrap" style={{ marginTop: '50px' }}>
                            <div class="sticker"></div>
                            <div class="msg">
                                <p onClick={handleClickToShowQuiz}>  Start!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* quiz stepper */}
            <div className='show-quiz' style={{ display: showQuiz }}>


                {/* <Steps current={currentQuestion} style={{ marginTop: "40px" }}>
                    {steps.map((item) => (
                        <Step key={item.title} title={item.title}></Step>))}
                </Steps> */}


                <div><h2 className='question-title-text'>{questions[currentQuestion].questionTitle}</h2></div>


                {/* check status if showing tooltip */}
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


                    {/* count quiz score */}
                    {showScore ? (
                        <div className='score-section' style={{ display: 'flex', flexDirection: 'column', padding: '5%' }}>
                            {/* showing quiz score */}
                            <p>You scored {score} out of {questions.length}</p>
                            {/* <iframe src='https://my.spline.design/platformerrabbitcopy-833efd14ec695daab43cc6dc1937d00b/' frameborder='0' width='100%' height='100%'></iframe> */}

                            {/* pop up window for personal analysis */}
                            <Button onClick={openPopup}>Jump to my personal analysis  <BarChartOutlined /></Button>

                            {/* button to retry the quiz */}
                            <Button onClick={handleRetry} style={{ marginTop: '24px' }}>Retry</Button>
                        </div>

                    ) : (
                        <>
                            {/* quiz question section */}
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>

                                {/* logic of auto to next question after per answer */}
                                <div className='question-text' style={{ position: 'relative' }}>
                                    {questions[currentQuestion].questionText}
                                    {questions[currentQuestion].questionImage}
                                </div>
                            </div>

                            {/* check if answer is correct or not and then call function to set scores */}
                            <div className='answer-section' style={{ display: displayAnswerBtn }}>
                                {questions[currentQuestion].answerOptions.map((answerOptions) =>
                                    <button className='quizButton' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                                )}
                            </div>

                            <div>
                                {/* showing quiz answer section */}
                                <div className='infection-info-section' style={{ display: displayInfectionInfo, right: '2%', top: '20%', width: '22rem' }}>
                                    <div className="animate__animated animate__bounce" style={{ marginTop: '35px' }}>

                                        {/* showing if the answered question correct or not with a correspond icon */}
                                        {displayIfCorrect === 'Correct' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <FrownOutlined style={{ color: "#eb2f96" }} />}
                                        {/* className='text-animate-reveal' */}
                                        <h2>{displayIfCorrect}</h2>
                                    </div>

                                    {/* Collapse component to show question related infections and preventions */}
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

                            {/* logic of buttons handle jump to next question or previous question */}
                            <Button className='nextQuestion' type="primary" onClick={handleClickToNextQuestion}>Next</Button>
                            {currentQuestion > 0 && (<Button className='prevQuestion' onClick={handleClickToPrevQuestion}>Previous</Button>)}
                        </>
                    )}
                </div>

                {/* handle pop up analysis window section */}
                <div class="popup" id="myPopup" style={{ display: popUpDisplay }} >
                    <div class="wrapper" >
                        <h2 id="popupTitle" className="animate__animated animate__fadeInUp" style={{ textAlign: 'center' }}>Personal Analysis   <BarChartOutlined /> </h2>

                        {/* pop up analysis line chart visulization */}
                        <div className='analysis-grid-container'>
                            <div>
                                <BarChart width={300} height={300} data={correctnessAnalysis}>
                                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <TP />
                                    <Legend />
                                    <Bar
                                        dataKey="score"
                                        fill="#8884d8"
                                        barSize={20}
                                    />
                                </BarChart>
                            </div>

                            {/* logic of showing personalized feedback of user's answer */}
                            <div>
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<FileSearchOutlined />}
                                />


                                {/* personal result feedback */}
                                {correctnessAnalysis.map((analysisData) =>
                                    <>
                                        <div style={{ marginTop: '30px' }}>
                                            {analysisData.name === 'Gardening' && analysisData.score === 3 ? [<LikeOutlined style={{ color: "#52c41a" }} />, <br />, 'Gardening: Congrats! A very nice gardening manner!'] : null}
                                            {analysisData.name === 'Gardening' && analysisData.score < 3 ? [<CloseCircleOutlined style={{ color: "#eb2f96" }} />, <br />, 'Gardening: Remember wear golves to avoid any potential soil infections'] : null}
                                        </div>
                                        <div style={{ marginTop: '20px' }}>
                                            {analysisData.name === 'Swimming' && analysisData.score === 2 ? [<LikeOutlined style={{ color: "#52c41a" }} />, <br />, 'Swimming: Indeed child can get infected in swimming'] : null}
                                            {analysisData.name === 'Swimming' && analysisData.score < 2 ? [<CloseCircleOutlined style={{ color: "#eb2f96" }} />, <br />, 'Swimming: Wear swim googgles when swimming. Dry ears and eyes after swimming.'] : null}
                                        </div>
                                        <div style={{ marginTop: '20px' }}>
                                            {analysisData.name === 'Sports' && analysisData.score === 2 ? [<LikeOutlined style={{ color: "#52c41a" }} />, <br />, 'Sports: Nice sports hygiene habits!'] : null}
                                            {analysisData.name === 'Sports' && analysisData.score < 2 ? [<CloseCircleOutlined style={{ color: "#eb2f96" }} />, <br />, 'Sports: Always wash hands with soap after any sports'] : null}
                                        </div>
                                    </>
                                )}



                            </div>
                        </div>

                        {/* button for closing pop up window */}
                        <Button id="closePopup" onClick={closePopup}>Close</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import { Row, Typography, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './VaccineScheduleIntroSection.css';

const { Title } = Typography;

const VaccineScheduleIntroSection = () => {
    return (
        // backgroundColor: '#e8f4f8'
        <div style={{ padding: "6%", height: '30rem', width: '100%', position: 'relative' }}>
            <Row>

                <div style={{ position: 'absolute', zIndex: '+1' }}>
                    <Title level={2}>Recommend Vaccination Schedule</Title>

                    <div style={{ width: '25rem', height: 'auto', marginTop: '10%' }}>
                        <ul>
                            <li>The timing of each dose of every vaccine given to babies and children is carefully chosen.</li><br />
                            <li>Experts consider which diseases Australian children are likely to be exposed to; how serious the diseases can be for children at different ages to give the best protection.
                            </li>
                        </ul>
                    </div>

                    <div style={{ position: 'absolute', marginTop: '5%' }}>
                        <Link to='/vaccineSchedule'>
                            <Tooltip placement="bottomRight" title='Download Available' color='gold' key='gold'>
                                <Button className='vaccine-schedule-button bounce-1'>Vaccine Schedule</Button>
                            </Tooltip>

                        </Link>
                    </div>
                </div>

                <div style={{ position: 'absolute', right: '10%' }}>
                    <img src="https://s1.imagehub.cc/images/2022/10/08/immunisation-register.jpg" alt="immunisation-register.jpg" style={{ height: '18rem', width: 'auto' }} />
                </div>
            </Row>
        </div>
    );
};

export default VaccineScheduleIntroSection;
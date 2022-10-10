import React, { useEffect, useRef } from 'react';
import { Layout, Col, Row, Divider, Typography, BackTop } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import './BirthToAges4.css'
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import WhereToGetVaccinated from './WhereToGetVaccinated';
import WhyNeedVaccinated from './WhyNeedVaccinated';
import RecordImmunization from './RecordImmunization';
import VaccineScheduleIntroSection from './VaccineScheduleIntroSection';
import IfVaccinationFree from './IfVaccinationFree';
import intl from "react-intl-universal";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};


const BirthToAges6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    {/* for auto scrolling section */ }
    const refWhy = useRef(null);
    const handleWhyGetVaccineClick = () => {
        refWhy.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refWhere = useRef(null);
    const handleWhereToGetVaccineClick = () => {
        refWhere.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refCharges = useRef(null);
    const handleChargesClick = () => {
        refCharges.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refSchedule = useRef(null);
    const handleScheduleClick = () => {
        refSchedule.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const refRecording = useRef(null);
    const handleRecordingClick = () => {
        refRecording.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Content style={{ padding: '0 50px' }}>

                {/*
                This block is the content between website navigation header and actual content
                The main usage is tell user where he/she is and give a chance to ge back.
                */}
                <LocationIdentifier
                    title={intl.get("vaccineTitle")}
                    // subtitle={intl.get("vaccineDescription")}
                    subtitle="Vaccines information for children from birth to ages 4"
                />


                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title className='animate__animated animate__slideInDown'>
                                    {/* {intl.get("vaccineTitle2")} */}
                                    Vaccination Information
                                </Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    {/* {intl.get("vaccineSubtitle")} */}
                                    Immunization from an early age helps protect your child against serious childhood infections.
                                </blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>

                    <div style={{ paddingLeft: '10%', paddingTop: '3%' }}>
                        <Title level={4} >On this page</Title><br />
                        <ul>
                            <li style={{ cursor: 'pointer' }} onClick={handleWhyGetVaccineClick}><a>Why Child Needs to be Vaccinated</a></li>
                            <li style={{ cursor: 'pointer' }} onClick={handleWhereToGetVaccineClick}><a>Where to Get Vaccinations</a></li>
                            <li style={{ cursor: 'pointer' }} onClick={handleChargesClick}><a>Charge of Vaccinations</a></li>
                            <li style={{ cursor: 'pointer' }} onClick={handleScheduleClick}><a>Recommend Vaccination Schedule - Download Available</a></li>
                            <li style={{ cursor: 'pointer' }} onClick={handleRecordingClick}><a>Recording Immunisation</a></li>
                        </ul>
                    </div>

                    <div ref={refWhy}>
                        <WhyNeedVaccinated />
                    </div>

                    <div ref={refWhere}>
                        <WhereToGetVaccinated />
                    </div>

                    <div ref={refCharges}>
                        <IfVaccinationFree />
                    </div>

                    <div ref={refSchedule}>
                        <VaccineScheduleIntroSection />
                    </div>

                    <div ref={refRecording}>
                        <RecordImmunization />
                    </div>

                </div>

                <BackTop>
                    <div style={style}><VerticalAlignTopOutlined /></div>
                </BackTop>

            </Content >
        </div>
    );
};

export default BirthToAges6;
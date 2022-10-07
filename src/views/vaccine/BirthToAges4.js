import React from 'react';
import { Layout, Col, Row, Divider, Typography, BackTop, Button } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import './BirthToAges4.module.css'
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import WhereToGetVaccinated from './WhereToGetVaccinated';
import VaccineSchedule from './VaccineSchedule';
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
                                <Title>
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

                    <WhyNeedVaccinated />
                    <WhereToGetVaccinated />
                    <IfVaccinationFree />
                    <VaccineScheduleIntroSection />
                    <RecordImmunization />

                </div>

                <BackTop>
                    <div style={style}><VerticalAlignTopOutlined /></div>
                </BackTop>

            </Content >
        </div>
    );
};

export default BirthToAges6;
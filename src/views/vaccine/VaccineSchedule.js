import React, { useEffect, useState, useRef } from 'react';
import { Layout, Timeline, Card, Col, Row, Divider, Typography, Collapse, BackTop, Button } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import './BirthToAges4.module.css'
import axios from "axios";
import intl from "react-intl-universal";
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import cookie from "react-cookies";

const { Content } = Layout;
const { Panel } = Collapse;
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

const VaccineSchedule = () => {
    const [vaccines, getVaccines] = useState([]);

    useEffect(() => {
        getAllVaccines();
    }, []);

    const getAllVaccines = () => {
        // axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/vaccines'
        // )
        //     .then((response) => {
        //         const allVaccines = response.data.Items;
        //         getVaccines(allVaccines);
        //         //console.log(response.data);
        //     })
        //     .catch(error => console.error('Error:$(error)'));

        switch (cookie.load("lang")) {

            case "en-US":
                // Get data from the EN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/vaccines").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    getVaccines(data);
                })
                break

            case "zh-CN":
                // Get data from CN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/vaccines").then(res => {
                    let data = res.data.Items;
                    getVaccines(data);
                })
                break

            default:
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/vaccines").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    getVaccines(data);
                })
        }
    }


    {/* for auto scrolling timelines */ }
    const refBirth = useRef(null);
    const handleTimelineBirthClick = () => {
        refBirth.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref2Months = useRef(null);
    const handleTimeline2MonthsClick = () => {
        ref2Months.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref12Months = useRef(null);
    const handleTimeline12MonthsClick = () => {
        ref12Months.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref18Months = useRef(null);
    const handleTimeline18MonthsClick = () => {
        ref18Months.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref4Years = useRef(null);
    const handleTimeline4YearsClick = () => {
        ref4Years.current?.scrollIntoView({ behavior: 'smooth' });
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
                    subtitle={intl.get("vaccineDescription")}
                />


                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title>
                                    {intl.get("vaccineTitle2")}
                                </Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    {intl.get("vaccineSubtitle")}
                                </blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>

                    {/* vaccine schedule section */}
                    <div className='vaccineContent' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div className='vaccinations' style={{ justifyContent: 'center' }}>


                            {/* vaccine data for children once birth */}
                            <div style={{ paddingTop: "30px" }} ref={refBirth}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header=<h2>{intl.get("vaccineBirth")}</h2> key="1">
                                        <div className='grid-container'>
                                            {vaccines.map(item => item.childrenAge === 'Birth' ?
                                                <Card
                                                    key={item.id}
                                                    title={item.name}
                                                    style={{
                                                        width: 300,
                                                    }}>
                                                    <p>{item.content}</p>
                                                </Card>
                                                : null)}
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>

                            {/* vaccine data for children at 2-6 months */}
                            <div style={{ paddingTop: "30px" }} ref={ref2Months}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header=<h2>{intl.get("vaccineMonth", { month: "2-6" })}</h2> key="1">
                                        <div className='grid-container'>
                                            {vaccines.map(item => item.childrenAge === '2 months' ?
                                                <Card
                                                    key={item.id}
                                                    title={item.name}
                                                    style={{
                                                        width: 300,
                                                    }}>
                                                    <p>{item.content}</p>
                                                </Card>
                                                : null)}
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>

                            {/* vaccine data for children at 12 months */}
                            <div style={{ paddingTop: "30px" }} ref={ref12Months}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header=<h2>{intl.get("vaccineMonth", { month: "12" })}</h2> key="1">
                                        <div className='grid-container'>
                                            {vaccines.map(item => item.childrenAge === '12 months' ?
                                                <Card
                                                    key={item.id}
                                                    title={item.name}
                                                    style={{
                                                        width: 300,
                                                    }}>
                                                    <p>{item.content}</p>
                                                </Card>
                                                : null)}
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>

                            {/* vaccine data for children at 18 months */}
                            <div style={{ paddingTop: "30px" }} ref={ref18Months}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header=<h2>{intl.get("vaccineMonth", { month: "18" })}</h2> key="1">
                                        <div className='grid-container'>
                                            {vaccines.map(item => item.childrenAge === '18 months' ?
                                                <Card
                                                    key={item.id}
                                                    title={item.name}
                                                    style={{
                                                        width: 300,
                                                    }}>
                                                    <p>{item.content}</p>
                                                </Card>
                                                : null)}
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>

                            {/* vaccine data for children at 4 years */}
                            <div style={{ paddingTop: "30px" }} ref={ref4Years}>
                                <Collapse bordered={false} defaultActiveKey={['1']}>
                                    <Panel header=<h2>{intl.get("vaccineYear", { year: "4" })}</h2> key="1">
                                        <p>All children should receive any missed routine childhood vaccinations. Children who missed their recommended vaccines in childhood can still receive them free under the National Immunisation Program up until they turn 20 years old.
                                        </p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>


                        <div className="timelines" style={{ top: '38%', right: '5%', display: 'flex', position: 'fixed', justifyContent: 'flex-end' }}>
                            <Timeline>
                                <Timeline.Item style={{ cursor: 'pointer' }} onClick={handleTimelineBirthClick}>{intl.get("vaccineBirth")}</Timeline.Item>
                                <Timeline.Item style={{ cursor: 'pointer' }} conClick={handleTimeline2MonthsClick}>{intl.get("vaccineMonth", { month: "2-6" })}</Timeline.Item>
                                <Timeline.Item style={{ cursor: 'pointer' }} onClick={handleTimeline12MonthsClick}>{intl.get("vaccineMonth", { month: "12" })}</Timeline.Item>
                                <Timeline.Item style={{ cursor: 'pointer' }} onClick={handleTimeline18MonthsClick}>{intl.get("vaccineMonth", { month: "18" })}</Timeline.Item>
                                <Timeline.Item style={{ cursor: 'pointer' }} onClick={handleTimeline4YearsClick}>{intl.get("vaccineYear", { year: "4" })}</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                    {/* download schedule */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <a href="https://images-videos-for-ie-shit.s3.ap-southeast-2.amazonaws.com/download+vaccine.pdf" download title='Vaccination Schedules'>
                            <Button>Download the Vaccination Schedules</Button>
                        </a>
                    </div>


                </div>

                <BackTop>
                    <div style={style}><VerticalAlignTopOutlined /></div>
                </BackTop>

            </Content >
        </div>
    );
};

export default VaccineSchedule;
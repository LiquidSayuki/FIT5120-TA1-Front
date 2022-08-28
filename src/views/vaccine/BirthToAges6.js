import React from 'react';
import { Layout, Timeline, Card, Col, Row, Divider, Typography } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const title = "Children Immunization"
const subtitle = "Vaccines schedules for children from birth to ages 6"

const BirthToAges6 = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier title={title} subtitle={subtitle} />
            <div className="site-layout-content">
                {/* Vaccine Content Test */}
                <Row style={{ paddingTop: "30px" }}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Paragraph>
                            <Title>Vaccine Schedules</Title>
                            <Divider />
                            <blockquote style={{ fontSize: "16px" }}>asdasd</blockquote>
                            <Divider />
                        </Paragraph>
                    </Col>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "40px" }}>
                    <div className='vaccinations' style={{ justifyContent: 'center' }}>
                        <Card
                            title="Default size card"
                            extra={<a href="#">More</a>}
                            style={{
                                width: 300,
                            }}
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                    <div className="timelines" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Timeline>
                            <Timeline.Item>Birth</Timeline.Item>
                            <Timeline.Item>2 months</Timeline.Item>
                            <Timeline.Item>4 months</Timeline.Item>
                            <Timeline.Item>6 months</Timeline.Item>
                            <Timeline.Item>12 months</Timeline.Item>
                            <Timeline.Item>15 months</Timeline.Item>
                            <Timeline.Item>18 months</Timeline.Item>
                            <Timeline.Item>19-23 months</Timeline.Item>
                            <Timeline.Item>2-3 years</Timeline.Item>
                            <Timeline.Item>4-6 years</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </Content>


    );
};

export default BirthToAges6;
import React from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import { Layout, Col, Row, Divider, Typography, Collapse } from 'antd';
import Quiz from './Quiz';
import intl from "react-intl-universal";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


const Outdoors = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <LocationIdentifier title={intl.get("outdoorTitle")} subtitle={intl.get("outdoorSubtitle")} />
            <div className="site-layout-content">
                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title>Outdoor Activities</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>Outdoor activities may vary in countries. Meantime, connecting to the outside world is essential, but also becoming one of most common infectious spreaded transmission. Behaviours in a careful manner can largely reduce the chances of infectious in day to day life. Let's do a little test and check the hygiene scores! </blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div style={{ justifyContent: 'center' }}>

                            <Quiz />
                        </div>

                    </div>

                </div>
            </div>
        </Content>
    );
};

export default Outdoors;
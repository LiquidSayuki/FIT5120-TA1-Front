import React from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import { Layout, Col, Row, Divider, Typography, Collapse } from 'antd';
import './Outdoors.css'

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const title = "Ourdoor Activities"
const subtitle = "Stay Safe from Outdoor Activities Infections"

const Outdoors = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <LocationIdentifier title={title} subtitle={subtitle} />
            <div className="site-layout-content">
                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title>Outdoor Activities</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>asdasd</blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h2>1. Gardening</h2>
                            <img src='https://s1.imagehub.cc/images/2022/09/07/Family-Planting-in-Garden.jpg.webp' style={{ width: '50%', height: 'auto' }}></img>
                        </div>

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

                    </div>

                    <h2>2. Swimming</h2>
                    <h2>3. Sports</h2>

                </div>
            </div>
        </Content>
    );
};

export default Outdoors;
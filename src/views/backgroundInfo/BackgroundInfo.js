import React from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import { Col, Layout, Row, List, Button, Typography, Divider, Card } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const title = "Background Info"
const subtitle = "Project background facts in Australia"

const BackgroundInfo = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier title={title} subtitle={subtitle} />
            <div className="site-layout-content">
                <Row style={{ paddingTop: "30px" }}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card
                        >
                            <Paragraph>
                                <Title>Some Facts in Australia</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>asdasd</blockquote>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Content>
    );
};

export default BackgroundInfo;
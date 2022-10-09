import React from 'react';
import map from "./Map.html";
import {Content} from "antd/es/layout/layout";
import { Col, Layout, Row, List, Button, Typography, Divider, Card, Select, Tag, Form } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import intl from "react-intl-universal";

const { Title, Paragraph, Text } = Typography;

const Map = () => {
    return (
        <Content
            style={{
            padding: '0 60px',
            }}
        >
            <Row>
                <Col>
                    <LocationIdentifier
                        title={intl.get("mapTitle")}
                        subtitle={intl.get("mapSubtitle")}
                    />
                </Col>
            </Row>

            <div className="site-layout-content">


                {/*Page Title*/}
                <Row style={{ paddingTop: "30px" }}>
                    <Col>
                        <Card>
                            <Paragraph>
                                <Title>{intl.get("mapTitle")}</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    {intl.get("mapDescription")}
                                </blockquote>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>

                {/*The map API*/}
                <iframe title="map"
                        srcDoc={map}
                        style={{width:"100%",border:"0px",height:"800px", paddingTop:"50px"}}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        scrolling="auto"
                />
            </div>

        </Content>
    );
};

export default Map;
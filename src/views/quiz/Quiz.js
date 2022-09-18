import React, {useState} from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import {Col, Layout, Row, Typography, Divider, Card, Image} from 'antd';
import TableauReport from "tableau-react";
import intl from "react-intl-universal";

const { Content } = Layout;
const { Title, Paragraph } = Typography;


const Quiz = () => {

    const [activeTabKey, setActiveTabKey] = useState("01");

    const onTabChange = (key) => {
      setActiveTabKey(key);
    }

    const recommendReading = [
        {
            key: "01",
            tab: intl.get("quizRecommendTab_1")
        },{
            key: "02",
            tab: intl.get("quizRecommendTab_2")
        }
    ]

    const contentList = {
        "01":
            <div>
                <a href="https://www.webmd.com/children/directory-index"> WebMD </a>
                <a href="https://www.healthdirect.gov.au/"> health direct </a>
            </div>,
        "02":
            <div>
                <a href="https://www.hotdoc.com.au/"> Hot Doc </a>
            </div>
    }

    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <div style={{width:"90%",margin:"auto"}}>
                <LocationIdentifier title={intl.get("quizTitle")} subtitle={intl.get("quizSubtitle")} />
                <div className="site-layout-content">

                    {/*
                    Title and Subtitle of the website
                    */}
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <Paragraph>
                                <Title>
                                    {intl.get("quizTitle")}
                                </Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    {intl.get("quizSubtitle2")}
                                </blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>



                    {/*
                    A quiz implement by tableau
                    */}
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <Card>
                                <TableauReport
                                    url="https://public.tableau.com/views/DataAnalystQuiz_16634879357750/Results?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                                />
                            </Card>
                        </Col>
                    </Row>


                    {/*
                    Recommend reading for new immigrants
                    */}
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <Card title={intl.get("quizRecommend")}
                                  extra={intl.get("quizRecommendExtra")}
                                  tabList={recommendReading}
                                  activeTabKey={activeTabKey}
                                  onTabChange={(key) => {
                                      onTabChange(key)
                                  }}
                            >
                                {contentList[activeTabKey]}
                            </Card>
                        </Col>
                    </Row>


                    <div>

                    </div>

                </div>
            </div>
        </Content>
    );
};

export default Quiz;
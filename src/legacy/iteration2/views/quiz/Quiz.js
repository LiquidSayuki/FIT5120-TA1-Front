import React, {useState} from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import {Col, Layout, Row, Typography, Divider, Card, Button} from 'antd';
import intl from "react-intl-universal";
import {Text} from "recharts";
import quiz from "./Quiz.html";

const { Content } = Layout;
const { Title, Paragraph } = Typography;


const Quiz = (props) => {

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
                <Text> {intl.get("quizTabContent_1")} </Text>
                <br/>
                <a href="https://www.healthdirect.gov.au/"> Health direct </a>
                <Text> {intl.get("quizTabContent_2")}</Text>
            </div>,
        "02":
            <div>
                <a href="https://www.hotdoc.com.au/"> Hot Doc </a>
                <Text> {intl.get("quizTabContent_3")}</Text>
            </div>
    }

    // the function control the redirect of button
    const redirect = (destination) => {
        props.history.push(destination)
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
                                {/*<TableauReport*/}
                                {/*    url="https://public.tableau.com/views/DataAnalystQuiz_16634879357750/Home?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"*/}
                                {/*/>*/}

                                <iframe title="quiz"
                                        srcDoc={quiz}
                                        style={{width:"100%",border:"0px",height:"800px", paddingTop:"50px"}}
                                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                        scrolling="auto"
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


                    <Row>
                        <Col style={{margin:"auto",paddingTop:"50px"}}>
                            <Button
                                type="primary"
                                onClick={() => redirect("home")}
                            >
                                {intl.get("quizButton_1")}
                            </Button>
                        </Col>
                    </Row>

                </div>
            </div>
        </Content>
    );
};

export default Quiz;
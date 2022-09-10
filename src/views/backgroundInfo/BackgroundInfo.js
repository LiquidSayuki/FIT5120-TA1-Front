import React from 'react';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import {Col, Layout, Row, Typography, Divider, Card, Image} from 'antd';
import TableauReport from "tableau-react";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const title = "Project Background Info"
const subtitle = "Research Facts in Australia"

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
                                <Title>Current Children Vaccination Status in Victoria</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>According to Victoria government department of health, vaccination rate among children and yound people were exceeding 95.7 percent in 2020. However, the vaccination rate "vary geographically, with coverage <strong>under 90 percent for one year olds</strong> in some Primary Health Network (PHN) areas" (Victoria Government Reports, 2019). </blockquote>
                            </Paragraph>
                        </Card>
                        <br></br>
                        <Card
                        >
                            <Paragraph>
                                <Title>Children may not be Vaccinated as Recommended Schedules.</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    Statistics shows that "almost 80 000 Australian children under 7 years had not been fully immunised in 2011–2012.” <br></br><br></br>
                                    “Some parents are choosing to adopt selective vaccination schedules for their children, but these schedules have not been tested for safety. Delaying a vaccine, such as the MMR vaccine, may be done with minimal awareness of the consequences." (Australia Family Physician, 2014.)
                                </blockquote>
                            </Paragraph>
                        </Card>

                    </Col>
                </Row>
                <br/>
                <div style={{width:"75%", margin: "auto"}}>
                    <Row gutter={[35,35]}>
                        <Col span={24}>
                            <Card>
                                <TableauReport
                                    url="https://public.tableau.com/views/Story_16623690891440/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                                    // options={{
                                    //     height: 400,
                                    //     width:800,
                                    //     hideToolbar:true,
                                    //     hideTabs:true}}
                                />
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <Paragraph>
                                    <Title>Title</Title>
                                    <Divider/>
                                    <blockquote>Description</blockquote>
                                </Paragraph>
                                <Image src="https://s1.imagehub.cc/images/2022/09/02/Picture2.png"></Image>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <Paragraph>
                                    <Title>Title</Title>
                                    <Divider/>
                                    <blockquote>Description</blockquote>
                                </Paragraph>
                                <Image src="https://s1.imagehub.cc/images/2022/09/02/Picture3.png"></Image>
                            </Card>
                        </Col>
                    </Row>

                </div>



            </div>
        </Content>
    );
};

export default BackgroundInfo; 
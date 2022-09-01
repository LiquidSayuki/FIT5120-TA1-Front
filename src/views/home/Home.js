import React from 'react';
import style from "./Home.module.css";
import { Card, Col, Layout, Row } from 'antd';
import { Typography, Button } from 'antd';

const { Text } = Typography;
const { Content } = Layout;

const Home = (props) => {
    const redirect = (destination) => {
        props.history.push(destination)
    }
    return (
        <div>
            <div className={style.background}>
                <Row className={style.title}>
                    <Col span={8}></Col>
                    <Col span={8}><h1 >Pediroo</h1></Col>
                    <Col span={8}></Col>
                </Row>
                <Row className={style.text}>
                    <Col span={4}></Col>
                    <Col span={16}><Text>An encyclopedia for new parents </Text></Col>
                    <Col span={4}></Col>
                </Row>
                {/*<Row className={style.text}>*/}
                {/*    <Col span={4}></Col>*/}
                {/*    <Col span={16}><Text>We provide help for new parents parenting knowledge</Text></Col>*/}
                {/*    <Col span={4}></Col>*/}
                {/*</Row>*/}
                {/*<Row className={style.text}>*/}
                {/*    <Col span={4}></Col>*/}
                {/*    <Col span={16}><Text>Learn about common childhood diseases and their prevention</Text></Col>*/}
                {/*    <Col span={4}></Col>*/}
                {/*</Row>*/}
                <Row className={style.button}>
                    <Col span={9}></Col>
                    <Col span={6}><Button type="primary"
                        block="true"
                        onClick={() => { redirect("/diseases") }}>Common childhood illnesses</Button></Col>
                    <Col span={9}></Col>
                </Row>
                <Row className={style.button}>
                    <Col span={9}></Col>
                    <Col span={6}><Button block="true"
                        onClick={() => { redirect("/BirthToAges6") }}>Vaccines children need</Button></Col>
                    <Col span={9}></Col>
                </Row>
            </div>
            <Content
                style={{
                    padding: '0 0px',
                }}
            >
                <div className="site-layout-content">

                    <div style={{ width: "70%", margin: "auto" }}>
                        <Row >
                            <Col span={8}>
                                <Card style={{ width: "95%" }}>
                                    Some text content
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card style={{ width: "95%" }}>
                                    Maybe some image
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card style={{ width: "95%" }}>
                                    Some text content
                                </Card>
                            </Col>
                        </Row>


                    </div>
                </div>
            </Content>
        </div>
    );
};

export default Home;
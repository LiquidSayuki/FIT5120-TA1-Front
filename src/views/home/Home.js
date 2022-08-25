import React from 'react';
import style from "./Home.module.css";
import { Col, Row } from 'antd';
import { Typography, Button } from 'antd';

const { Title,Text } = Typography;

const Home = () => {
    return (
        <div className={style.background}>
            <Row className={style.title}>
                <Col span={8}></Col>
                <Col span={8}><Title >Home Page</Title></Col>
                <Col span={8}></Col>
            </Row>
            <Row className={style.text}>
                <Col span={6}></Col>
                <Col span={12}><Text>Description about</Text></Col>
                <Col span={6}></Col>
            </Row>
            <Row className={style.text}>
                <Col span={6}></Col>
                <Col span={12}><Text>Our website</Text></Col>
                <Col span={6}></Col>
            </Row>
            <Row className={style.text}>
                <Col span={6}></Col>
                <Col span={12}><Text>Sayuki Sayuki Sayuki Super Sayuki Sayuki Super Super Sayuki</Text></Col>
                <Col span={6}></Col>
            </Row>
            <Row className={style.button}>
                <Col span={9}></Col>
                <Col span={6}><Button type="primary" block="true">Primary Operation</Button></Col>
                <Col span={9}></Col>
            </Row>
            <Row className={style.button}>
                <Col span={9}></Col>
                <Col span={6}><Button block="true">Secondary Operation</Button></Col>
                <Col span={9}></Col>
            </Row>
        </div>
    );
};

export default Home;
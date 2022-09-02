import React, {useEffect, useState} from 'react';
import style from "./Home.module.css";
import {Card, Col, Image, Layout, Row, PageHeader, Divider} from 'antd';
import { Typography, Button } from 'antd';
import axios from "axios";

const { Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const Home = (props) => {
    // get disease data from backend
    const [disease,setDisease] = useState([])
    useEffect(()=>{
        axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
            let data = res.data.Items;
            // Only keep first three diseases
            // Because we should not keep put much data on home page.
            setDisease(data.slice(0,3));
        })
    },[])

    const redirect = (destination) => {
      props.history.push(destination)
    }

    return (
        <div>
            <div className={style.background}>
                {/*Title of the page*/}
                <Row className={style.title}>
                    <Col span={8}></Col>
                    <Col span={8}><h1 >Pediroo</h1></Col>
                    <Col span={8}></Col>
                </Row>

                {/*Subtitle of the page*/}
                <Row className={style.text}>
                    <Col span={4}></Col>
                    <Col span={16}><Text>An encyclopedia for new parents </Text></Col>
                    <Col span={4}></Col>
                </Row>

                {/*Two buttons*/}
                <Row className={style.button}>
                    <Col span={9}></Col>
                    <Col span={6}><Button type="primary"
                                          block="true"
                                          onClick={()=>{redirect("/diseases")}}>Common childhood illnesses</Button></Col>
                    <Col span={9}></Col>
                </Row>
                <Row className={style.button}>
                    <Col span={9}></Col>
                    <Col span={6}><Button block="true"
                                          onClick={()=>{redirect("/BirthToAges6")}}>Vaccines children need</Button></Col>
                    <Col span={9}></Col>
                </Row>
            </div>

            {/*Page content*/}
            <Content
                style={{
                    padding: '0 0px',
                }}
            >
                <div className="site-layout-content">
                    <div style={{width:"80%", margin: "auto"}}>

                        {/*Title of diseases*/}
                        <PageHeader title="Infectious Diseases"
                                    subTitle="Some common infectious diseases spread among children"/>
                        <Divider/>
                        {/* Dynamic create disease cards*/}
                        <Row gutter={30}>
                            {
                                disease.map( item =>
                                    <Col span={8}>
                                        <Card hoverable={true}
                                              cover={<Image height={180}
                                                            alt="chicken pox"
                                                            src={item.imgSrc}
                                                    />}
                                        >
                                            <Meta title={item.name}
                                                  description="click to read more"
                                                  onClick={()=>{redirect("disease/"+item.id)}}
                                            />
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>

                        <PageHeader title="Vaccinations"
                                    subTitle="Some vaccines you should get your child"
                        style={{paddingTop:"80px"}}/>
                        <Divider/>

                        <Row gutter={30}>
                            {/*{*/}
                            {/*    disease.map( item =>*/}
                            {/*        <Col span={8}>*/}
                            {/*            <Card hoverable={true}*/}
                            {/*                  cover={<Image height={180}*/}
                            {/*                                alt="chicken pox"*/}
                            {/*                                src={item.imgSrc}*/}
                            {/*                  />}*/}
                            {/*            >*/}
                            {/*                <Meta title={item.name}*/}
                            {/*                      description="click to read more"*/}
                            {/*                      onClick={()=>{redirect("disease/"+item.id)}}*/}
                            {/*                />*/}
                            {/*            </Card>*/}
                            {/*        </Col>*/}
                            {/*    )*/}
                            {/*}*/}

                            <Col>
                                <Card>
                                    Vaccine cards
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
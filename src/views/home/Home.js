import React, {useEffect, useState} from 'react';
import style from "./Home.module.css";
import {Card, Col, Image, Layout, Row, PageHeader, Divider} from 'antd';
import { Typography, Button } from 'antd';
import axios from "axios";

const { Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const Home = (props) => {
    const [disease,setDisease] = useState([])
    useEffect(()=>{
        axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
            let data = res.data.Items;
            console.log(typeof (data))
            setDisease(data.slice(0,3));
            console.log(disease);
        })
    },[])



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
            <Content
                style={{
                    padding: '0 0px',
                }}
            >
                <div className="site-layout-content">
                    <div style={{width:"80%", margin: "auto"}}>

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

                    </div>
                </div>

            </Content>
        </div>

    );
};

export default Home;
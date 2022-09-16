import React, {useEffect, useState} from 'react';
import style from "./Home.module.css";
import {Card, Col, Image, Layout, Row, PageHeader, Divider} from 'antd';
import { Typography, Button } from 'antd';
import axios from "axios";
import intl from "react-intl-universal";
import cookie from "react-cookies";


const { Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

// backgroundImageSrc: "https://s1.imagehub.cc/images/2022/09/05/pediroo-notext.jpg",

const Home = (props) => {

    // get disease data from backend
    const [disease,setDisease] = useState([]);
    useEffect(()=>{

        switch (cookie.load("lang")) {

            case "en-US":
                // Get data from the EN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    setDisease(data.slice(0,3));
                })
                break

            case "zh-CN":
                // Get data from CN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items").then(res => {
                    let data = res.data.Items;
                    setDisease(data.slice(0,3));
                })
                break

            default:
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    setDisease(data.slice(0,3));
                })
        }
    },[])

    // Handle the click event of buttons
    // Redirect to another address
    const redirect = (destination) => {
      props.history.push(destination)
    }

    return (
        <div>
            <div className={style.background}>

                {/*Title of the page*/}
                <Row className={style.title}>
                    <Col span={8}></Col>
                    <Col span={8}><h1 >{intl.get("homeTitle")}</h1></Col>
                    <Col span={8}></Col>
                </Row>

                {/*Subtitle of the page*/}
                <Row className={style.text}>
                    <Col span={4}></Col>
                    <Col span={16}><Text>{intl.get("homeSubtitle")}</Text></Col>
                    <Col span={4}></Col>
                </Row>

                {/*Two buttons*/}
                <Row className={style.text}>
                    <Col span={4}></Col>
                    <Col span={16}><Text>{intl.get("homeSubtitle_2")}</Text></Col>
                    <Col span={4}></Col>
                </Row>
                <Row className={style.button}>
                    <Button type="primary"
                            style={{margin:"auto"}}
                            onClick={()=>{redirect("/backgroundInfo")}}>
                        {intl.get("homeButtonMain")}
                    </Button>
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
                        <PageHeader title={intl.get("homeSectionTitle_1")}
                                    subTitle={intl.get("homeSectionSubtitle_1")}
                                    extra={[<Button onClick={()=>{redirect("/diseases")}}>
                                        {intl.get("homeButtonMore")}
                                    </Button>]}
                        />
                        <Divider/>

                        {/* Dynamic create the first three disease cards*/}
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
                                                  description={intl.get("homeClickToReadMore")}
                                                  onClick={()=>{redirect("disease/"+item.id)}}
                                            />
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>

                        {/*Title of Vaccines*/}
                        <PageHeader title={intl.get("homeSectionTitle_2")}
                                    subTitle={intl.get("homeSectionSubtitle_2")}
                                    style={{paddingTop:"80px"}}
                                    extra={[<Button onClick={()=>{redirect("/BirthToAges6")}}>
                                        {intl.get("homeButtonMore")}
                                    </Button>]}
                        />
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
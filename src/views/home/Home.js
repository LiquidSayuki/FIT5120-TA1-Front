import React, { useEffect, useState } from 'react';
import style from "./Home.module.css";
import { Card, Col, Image, Layout, Row, PageHeader, Divider, BackTop, Carousel } from 'antd';
import { Typography, Button } from 'antd';
import axios from "axios";
import intl from "react-intl-universal";
import cookie from "react-cookies";
import { VerticalAlignTopOutlined } from '@ant-design/icons';


const { Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;
const contentStyle = {
    height: '340px',
    width: '200px',
    color: 'black',
    text: 'center',
    lineHeight: '160px',
    background: '#364d79',
};

// backgroundImageSrc: "https://s1.imagehub.cc/images/2022/09/05/pediroo-notext.jpg",

const Home = (props) => {

    // get disease data from backend
    const [disease, setDisease] = useState([]);
    useEffect(() => {

        switch (cookie.load("lang")) {

            case "en-US":
                // Get data from the EN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    setDisease(data.slice(0, 3));
                })
                break

            case "zh-CN":
                // Get data from CN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items").then(res => {
                    let data = res.data.Items;
                    setDisease(data.slice(0, 3));
                })
                break

            default:
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    let data = res.data.Items;
                    // Only keep first three diseases
                    // Because we should not keep put much data on home page.
                    setDisease(data.slice(0, 3));
                })
        }
    }, [])

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
                        style={{ margin: "auto" }}
                        onClick={() => { redirect("/quiz") }}>
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
                    <div style={{ width: "80%", margin: "auto" }}>

                        {/*Title of diseases*/}
                        <PageHeader title={intl.get("homeSectionTitle_1")}
                            subTitle={intl.get("homeSectionSubtitle_1")}
                            extra={[<Button onClick={() => { redirect("/diseases") }}>
                                {intl.get("homeButtonMore")}
                            </Button>]}
                        />
                        <Divider />

                        {/* Dynamic create the first three disease cards*/}
                        <Row gutter={30}>
                            {
                                disease.map(item =>
                                    <Col span={8}>
                                        <Card hoverable={true}
                                            style={{ width: "100%", height: "100%" }}
                                            cover={<Image src={item.imgSrc} />}
                                        >
                                            <Meta title={item.name}
                                                description={intl.get("homeClickToReadMore")}
                                                onClick={() => { redirect("disease/" + item.id) }}
                                            />
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>

                        {/*Title of Vaccines*/}
                        <PageHeader title={intl.get("homeSectionTitle_2")}
                            subTitle={intl.get("homeSectionSubtitle_2")}
                            style={{ paddingTop: "80px" }}
                            extra={[<Button onClick={() => { redirect("/BirthToAges4") }}>
                                {intl.get("homeButtonMore")}
                            </Button>]}
                        />
                        <Divider />


                        <Carousel autoplay>
                            <div>
                                <div style={contentStyle} >
                                    <img src="https://s1.imagehub.cc/images/2022/09/17/Screen-Shot-2022-09-17-at-23.06.44.jpg" style={{ height: '340px', width: 'auto' }} />
                                </div>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src="https://s1.imagehub.cc/images/2022/09/17/Screen-Shot-2022-09-17-at-23.06.51.jpg" style={{ height: '340px', width: 'auto' }} onClick={() => { redirect("/BirthToAges4") }} />
                                </div>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src="https://s1.imagehub.cc/images/2022/09/17/Screen-Shot-2022-09-17-at-23.06.58.jpg" style={{ height: '340px', width: 'auto' }} />
                                </div>
                            </div>
                        </Carousel>



                        {/*Title of Outdoor Activities*/}
                        <PageHeader title={intl.get("homeSectionTitle_3")}
                            subTitle={intl.get("homeSectionSubtitle_3")}
                            style={{ paddingTop: "80px" }}
                            extra={[<Button onClick={() => { redirect("/Outdoors") }}>
                                {intl.get("homeButtonMore")}
                            </Button>]}
                        />
                        <Divider />

                        <Row gutter={30}>
                            <div style={{ height: 'auto', width: '30rem' }}>
                                <Col span={20}>
                                    <video autoPlay={true} muted loop playsInline>
                                        <source src="https://images-videos-for-ie-shit.s3.ap-southeast-2.amazonaws.com/video.mp4" type='video/mp4' />
                                    </video>
                                </Col>
                            </div>
                            <Col span={10}>
                                <br></br>
                                <h2>{intl.get("homeOutdoorContent_1")}</h2><br></br>
                                <h3>{intl.get("homeOutdoorContent_2")}</h3><br></br>
                                <Button style={{ marginLeft: '70px' }} onClick={() => { redirect("/Outdoors") }}>{intl.get("homeOutdoorButton_1")}</Button>
                            </Col>
                        </Row>

                    </div>
                </div>

                <BackTop>
                    <div style={style}><VerticalAlignTopOutlined /></div>
                </BackTop>

            </Content>
        </div >
    );
};

export default Home;
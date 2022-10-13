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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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


                        <Carousel autoplay >
                            <div>
                                <div style={contentStyle} >
                                    <img src={intl.get("homeVaccineSection1")} style={{ height: '340px', width: 'auto' }} />
                                </div>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src={intl.get("homeVaccineSection2")} style={{ height: '340px', width: 'auto' }} onClick={() => { redirect("/vaccineSchedule") }} />
                                </div>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src={intl.get("homeVaccineSection3")} style={{ height: '340px', width: 'auto' }} />
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
                                <Button className='redirect-to-outdoor-button bounce-1' style={{ marginLeft: '70px' }} onClick={() => { redirect("/Outdoors") }}>{intl.get("homeOutdoorButton_1")}</Button>
                            </Col>
                        </Row>



                        {/*Section of extra*/}
                        <PageHeader title={intl.get("homeSectionTitle_4")}
                            subTitle={intl.get("homeSectionSubtitle_4")}
                            style={{ paddingTop: "50px" }}
                        />
                        <Divider />

                        <Row gutter={[5, 5]}>
                            {/*card [1,1]*/}
                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { window.location.href = "https://www.chemistwarehouse.com.au/" }}
                                    style={{ height: "100%" }}
                                >
                                    <img src="https://s1.imagehub.cc/images/2022/10/09/chemist.png"
                                        alt="chemist warehouse"
                                        style={{ width: "100%" }} />
                                </Card>
                            </Col>

                            {/*card [1,2]*/}
                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { window.location.href = "https://monashchildrenshospital.org/" }}
                                    style={{ height: "100%" }}
                                    bodyStyle={{ height: "100%" }}
                                >
                                    <div style={{ margin: "auto", textAlign: "center", position: "relative", top: "50%", transform: "translateY(-50%)" }}>
                                        <h1 style={{ fontFamily: "Arial Black" }}>
                                            {intl.get("homeTitleOfChildHospital")}
                                        </h1>
                                        <div style={{ fontSize: "16px", fontFamily: "Verdana" }}>
                                            <p>
                                                {intl.get("homeDescriptionOfChildHospital")}
                                            </p>
                                            <p>
                                                {intl.get("homeDescriptionOfChildHospital2")}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            {/*card [1,3]*/}
                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { redirect("/map") }}
                                    style={{ height: "100%" }}
                                >
                                    <img src="https://s1.imagehub.cc/images/2022/10/09/map.png"
                                        alt="map image"
                                        style={{ width: "100%" }} />
                                </Card>
                            </Col>

                            {/*card [2,1]*/}
                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { window.location.href = "https://monashchildrenshospital.org/" }}
                                    style={{ height: "100%", display: "flex" }}
                                    bodyStyle={{ height: "100%" }}
                                >
                                    <div style={{ margin: "auto", textAlign: "center", position: "relative", top: "50%", transform: "translateY(-50%)" }}>
                                        <h1 style={{ fontFamily: "Arial Black" }}>
                                            {intl.get("homeTitleOfChemistWarehouse")}
                                        </h1>
                                        <div style={{ fontSize: "16px", fontFamily: "Verdana" }}>
                                            <p>
                                                {intl.get("homeDescriptionOfChemistWarehouse")}
                                            </p>
                                            <p>
                                                {intl.get("homeDescriptionOfChemistWarehouse2")}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { window.location.href = "https://monashchildrenshospital.org/" }}
                                    style={{ height: "100%" }}
                                >
                                    <img src="https://s1.imagehub.cc/images/2022/10/09/monashHospital.png"
                                        alt="child hospital"
                                        style={{ width: "100%" }} />
                                </Card>
                            </Col>

                            {/*card [2,3]*/}
                            <Col span={8}>
                                <Card hoverable
                                    bordered={false}
                                    onClick={() => { redirect("/map") }}
                                    style={{ height: "100%" }}
                                    bodyStyle={{ height: "100%" }}
                                >
                                    <div style={{ margin: "auto", textAlign: "center", position: "relative", top: "50%", transform: "translateY(-50%)" }}>
                                        <h1 style={{ fontFamily: "Arial Black" }}>
                                            {intl.get("homeTitleOfMapFeature")}
                                        </h1>
                                        <div style={{ fontSize: "16px", fontFamily: "Verdana" }}>
                                            <p>
                                                {intl.get("homeDescriptionOfMapFeature")}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
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
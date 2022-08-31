import React, {useEffect, useState} from 'react';
import {Col, Layout, Row, Image, Typography, Divider, Card} from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";

const { Meta } = Card;
const { Content } = Layout;
const { Title, Paragraph } = Typography;

// const data = {
//     id:"01",
//     name:"Chickenpox",
//     symptom:"SSSSSSYYYYYYMMMMMPPPPPPTTTTTTOOOOOMMMM",
//     vaccine:true,
//     prevention:"PPPPRRREEEEVVVVEEENNNTTTIIIOOONNN",
//     reference:"ref"
// }

const SingleDisease = (props) => {
    const [data, setData] = useState({});

    useEffect(()=>{
        axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items/'+props.match.params.id).then(res=>{
            console.log(res.data.Item)
            setData(res.data.Item)
        })
    },[])

    return (
        <Content
            style={{
                padding: '0 60px',
            }}
        >
            <Row>
                <Col span={3}></Col>
                <Col>
                    <LocationIdentifier title={data.name}/>
                </Col>
            </Row>
            <div className="site-layout-content">
                <Row style={{paddingTop:"50px"}}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card style={{width:"100%"}}>
                            <Typography>
                                <Title>{data.name}</Title>
                                <Divider/>
                                <Paragraph style={{fontSize:"18px"}}>
                                    {data.content}
                                </Paragraph>
                            </Typography>
                        </Card>
                    </Col>

                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col span={3}></Col>
                    <Col span={10}>
                        <Card
                            title="Symptom"
                            style={{
                                width: "95%",
                            }}
                        >
                            <blockquote>{data.symptom}</blockquote>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<Image alt={data.name + "Image"} src={data.imgSrc}/>}
                        >
                            <Meta description="Pediroo" />
                        </Card>
                    </Col>
                    <Col span={3}></Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card
                            title="Prevention"
                            style={{
                                width: "100%",
                            }}
                        >
                            <blockquote>{data.prevention}</blockquote>
                        </Card>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        </Content>
    );
};

export default SingleDisease;
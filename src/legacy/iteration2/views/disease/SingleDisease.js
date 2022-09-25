import React, {useEffect, useState} from 'react';
import {Col, Layout, Row, Typography, Divider, Card} from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";
import cookie from "react-cookies";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const SingleDisease = (props) => {
    const [data, setData] = useState({});

    useEffect(()=>{

        switch (cookie.load("lang")) {
            case "en-US":
                // Get data from the EN version of database
                axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items/'+props.match.params.id)
                    .then(res => {
                        //console.log(res.data.Item);
                        setData(res.data.Item);
                    })
                break

            case "zh-CN":
                // Get data from CN version of database
                axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items/'+props.match.params.id)
                    .then(res => {
                        //console.log(res.data.Item);
                        setData(res.data.Item);
                    })
                break

            default:
                axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items/'+props.match.params.id)
                    .then(res => {
                        //console.log(res.data.Item);
                        setData(res.data.Item);
                    })
        }
    },[])

    return (
        <Content
            style={{
                padding: '0 60px',
            }}
        >
            <div style={{width:"85%",margin:"auto"}}>

                <Row>
                    <Col >
                        <LocationIdentifier title={data.name}/>
                    </Col>
                </Row>
                <div className="site-layout-content">

                    <Row style={{paddingTop:"50px"}}>
                        <Col span={24}>
                            <Card >
                                <Typography>
                                    <Title>{data.name}</Title>
                                    <Divider/>
                                    <Paragraph style={{fontSize:"18px"}}>
                                        {data.description}
                                    </Paragraph>
                                </Typography>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:"50px"}}>
                        <Col span={24}>
                            <Card>
                                <div dangerouslySetInnerHTML={{
                                    __html:data.content
                                }}>

                                </div>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </Content>
    );
};

export default SingleDisease;
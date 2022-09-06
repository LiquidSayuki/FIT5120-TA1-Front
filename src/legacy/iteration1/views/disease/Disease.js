import React, {useEffect, useState} from 'react';
import {Col, Layout, Row, List, Button, Typography, Divider, Card} from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";

const {Content} = Layout;
const { Title, Paragraph } = Typography;

const title = "Disease"
const subtitle = "Know more about common diseases spread between children"

// const data = [{
//     name:"This is title1",
//     content:"This is content",
//     id: "01",
//     imgSrc:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// },{
//     name:"This is another disease",
//     description: "Vaccine unavailable",
//     content:"This is content of another disease",
//     id: "02",
//     imgSrc:"https://media.istockphoto.com/photos/melbourne-central-business-district-picture-id600688368?k=20&m=600688368&s=612x612&w=0&h=hbN7pEOSGuyzbygdh-vgj5mmBeGne2NHDYlojpfmoTw="
// }]

const Disease = () => {
    // Use this axios function when real backend is deployed
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res=>{
            console.log(res.data)
            setData(res.data.Items)
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
                    <LocationIdentifier title={title} subtitle={subtitle}/>
                </Col>
            </Row>

            <div className="site-layout-content">
                <Row style={{paddingTop:"30px"}}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card
                        >
                            <Paragraph>
                                <Title>Common Diseases</Title>
                                <Divider/>
                                <blockquote style={{fontSize:"16px"}}>Children's immunity is weaker than adults, and some diseases are more likely to infect children, causing damage to children's health. Learn more about infectious diseases among children, so that you can better protect your children.</blockquote>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
                <Row style={{padding:"20px"}}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <List
                            // bordered="true"
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 6,
                            }}
                            dataSource={data}
                            // footer={
                            //     <div>
                            //         <b>ant design</b> footer part
                            //     </div>
                            // }
                            renderItem={(item) => (
                                <List.Item
                                    key={item.name}
                                    // This part is for Like, Favorites and Comments
                                    // For now we don't need them so they are annotated
                                    // actions={[
                                    //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    // ]}
                                    extra={
                                        <div>
                                            <img
                                                width={272}
                                                alt="diseaseImg"
                                                src={item.imgSrc}
                                            />
                                        </div>
                                    }
                                    style={{fontSize:"16px"}}
                                >
                                    <List.Item.Meta
                                        // This part is for add an avatar
                                        // For now we don't need it, so it is annotated
                                        // avatar={<Avatar src={item.avatar} />}
                                        title={<a href={'disease/'+ item.id}>{item.name}</a>}
                                        //description={item.description}
                                    />
                                    {item.description}
                                    <div style={{paddingTop:"15px"}}>
                                        <Button href={'disease/'+ item.id} type="primary" style={{float:"right"}}>Read More</Button>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        </Content>
    );
};

export default Disease;
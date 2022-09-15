import React, {useEffect, useState} from 'react';
import {Col, Layout, Row, List, Button, Typography, Divider, Card, Select} from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";
import cookie from "react-cookies";
import intl from "react-intl-universal";

const { Option } = Select;
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Disease = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        // Get data from the EN version of database
        if (cookie.load("lang") === "en-US"){
            axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res=>{
                // console.log(res.data)
                setData(res.data.Items)
            })
        }
        // Get data from CN version of database
        else if (cookie.load("lang") === "zh-CN"){
            axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items").then(res=>{
                // console.log(res.data)
                setData(res.data.Items)
            })
        }
    },[])

    const [tags, setTags] = useState([])
    useEffect(()=>{
        let tagTemp = tags;
        for (let i in data){
            for (let l in data[i].tag){
                if ( !tagTemp.includes(data[i].tag[l]) ){
                    tagTemp.push(data[i].tag[l])
                }
            }
        }
        setTags(tagTemp);
        console.log(tags)
    },[])


    const handleChange = (value) => {
      console.log(value);
    }

    return (
        <Content
            style={{
                padding: '0 60px',
            }}
        >

            {/*
            This block is the content between website navigation header and actual content
            The main usage is tell user where he/she is and give a chance to ge back.
            */}
            <Row>
                <Col span={3}></Col>
                <Col>
                    <LocationIdentifier
                        title={intl.get("diseaseTitle")}
                        subtitle={intl.get("diseaseDescription")}
                    />
                </Col>
            </Row>

            <div className="site-layout-content">

                {/*
                This block is the title and subtitle of the page.
                */}
                <Row style={{paddingTop:"30px"}}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card>
                            <Paragraph>
                                <Title>{intl.get("diseaseTitle")}</Title>
                                <Divider/>
                                <blockquote style={{fontSize:"16px"}}>
                                    {intl.get("diseaseSubtitle")}
                                </blockquote>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>


                {/*
                    Search by tag feature
                */}

                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Select
                            mode="multiple"
                            placeholder="Please select"
                            onChange={handleChange}
                            style={{
                                width: '100%',
                            }}
                        >
                            {tags.map(item =>
                                <Option key={item}> {item} </Option>
                            )}
                        </Select>
                    </Col>
                </Row>


                {/*
                This block is the body of the page.
                It's a list component with multiple items.
                */}
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

                            // Code below is generating the list from dataset.
                            renderItem={(item) => (
                                <List.Item
                                    key={item.name}

                                    // This part is for Like, Favorites and Comments
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
                                        // avatar={<Avatar src={item.avatar} />}

                                        // The item title
                                        title={<a href={'/disease/'+ item.id}>{item.name}</a>}

                                        //description={item.description}
                                    />
                                    {item.description}
                                    <div style={{paddingTop:"15px"}}>
                                        <Button href={'/disease/'+ item.id} type="primary" style={{float:"right"}}>
                                            {intl.get("diseaseButtonMore")}
                                        </Button>
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
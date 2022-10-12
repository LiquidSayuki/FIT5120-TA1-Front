import React, { useEffect, useState } from 'react';
import { Col, Layout, Row, List, Button, Typography, Divider, Card, Select, Tag, Form } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";
import cookie from "react-cookies";
import intl from "react-intl-universal";

const { Option } = Select;
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function includes(arr1, arr2) {
    return arr2.every(val => arr1.includes(val));
}

const Disease = () => {

    const [originalData, setOriginalData] = useState([])

    const [data, setData] = useState([])

    useEffect(() => {
        switch (cookie.load("lang")) {
            case "en-US":
                // Get data from the EN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    // console.log(res.data)
                    setOriginalData(res.data.Items);
                    setData(res.data.Items);
                })
                break

            case "zh-CN":
                // Get data from CN version of database
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items").then(res => {
                    // console.log(res.data)
                    setOriginalData(res.data.Items);
                    setData(res.data.Items);
                })
                break

            default:
                axios.get("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items").then(res => {
                    // console.log(res.data)
                    setOriginalData(res.data.Items);
                    setData(res.data.Items);
                })
        }
    }, [])


    // Set the tags in the menu
    // const [tags, setTags] = useState([])
    // useEffect(() => {
    //     let tagTemp = tags;
    //     for (let i in originalData) {
    //         //console.log(data[i].tag);
    //         for (let l in originalData[i].tag) {
    //             if (!tagTemp.includes(originalData[i].tag[l])) {
    //                 tagTemp.push(originalData[i].tag[l])
    //             }
    //         }
    //     }
    //     setTags(tagTemp);
    //     //console.log(tags)
    // })


    // Search the items which have all the tags selected.
    const onFinish = (value) => {
        //console.log(value);

        let severityFit = [];
        if (value.severity !== undefined) {
            for (let i in originalData) {
                if (originalData[i].severity === value.severity) {
                    severityFit.push(originalData[i]);
                }
            }
        } else {
            for (let i in originalData) {
                severityFit.push(originalData[i]);
            }
        }

        //console.log(severityFit);


        let bodyFit = [];
        if (value.bodyPart !== undefined) {
            for (let i in originalData) {
                if (includes(originalData[i].tag, value.bodyPart)) {
                    bodyFit.push(originalData[i]);
                }
            }
        } else {
            for (let i in originalData) {
                bodyFit.push(originalData[i]);
            }
        }

        //console.log(bodyFit);

        let bothFit = severityFit.filter(i => bodyFit.includes(i));

        setData(bothFit);

    }

    // Handle the color of tags
    const handleColor = (value) => {
        switch (value) {
            case "Mild":
                return "green"
            case "Serious":
                return "volcano"
            case "Critical":
                return "red"
            case "Moderate":
                return "orange"
            case "温和":
                return "green"
            case "严重":
                return "volcano"
            case "一般":
                return "orange"
            case "致命":
                return "red"
            default:
                return "geekblue"
        }
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
                <Row style={{ paddingTop: "30px" }}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card>
                            <Paragraph>
                                <Title>{intl.get("diseaseTitle")}</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>
                                    {intl.get("diseaseSubtitle")}
                                </blockquote>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>


                {/*
                    Search by tag feature
                */}

                <Row style={{ paddingTop: "15px" }}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Card
                            title={intl.get("diseaseSearchTitle")}
                        >
                            <Form name="disease-tag"
                                onFinish={onFinish}>

                                {/*
                                    Search by severity
                                */}
                                <Text>{intl.get("diseaseSearchBySeverity")}</Text>
                                <Form.Item
                                    name="severity"
                                >
                                    <Select
                                        allowClear={true}
                                        placeholder={intl.get("diseaseSearchBySeverity")}
                                        style={{
                                            width: '60%',
                                            paddingTop: "5px",
                                            paddingBottom: "5px"
                                        }}
                                    >
                                        <Option value={intl.get("diseaseTagMild")}> {intl.get("diseaseTagMild")} </Option>
                                        <Option value={intl.get("diseaseTagModerate")}> {intl.get("diseaseTagModerate")} </Option>
                                        <Option value={intl.get("diseaseTagSerious")}> {intl.get("diseaseTagSerious")} </Option>
                                        <Option value={intl.get("diseaseTagCritical")}> {intl.get("diseaseTagCritical")} </Option>
                                    </Select>
                                </Form.Item>

                                {/*
                                    Search by body part
                                */}
                                <Text>{intl.get("diseaseSearchByBody")}</Text>
                                <Form.Item
                                    name="bodyPart"
                                >
                                    <Select
                                        mode="multiple"
                                        placeholder={intl.get("diseaseSearchByBody")}
                                        style={{
                                            width: '60%',
                                            paddingTop: "5px",
                                            paddingBottom: "5px"
                                        }}
                                    >
                                        {/*{tags.map(item =>*/}
                                        {/*    <Option value={item}> {item} </Option>*/}
                                        {/*)}*/}

                                    {/*    Hard coded version of tag Display*/}
                                        <Option value={intl.get("tagAllergic")}>{intl.get("tagAllergic")}</Option>
                                        <Option value={intl.get("tagBirthDefects")}>{intl.get("tagBirthDefects")}</Option>
                                        <Option value={intl.get("tagBlood")}>{intl.get("tagBlood")}</Option>
                                        <Option value={intl.get("tagBone")}>{intl.get("tagBone")}</Option>
                                        <Option value={intl.get("tagBrain")}>{intl.get("tagBrain")}</Option>
                                        <Option value={intl.get("tagDigestive")}>{intl.get("tagDigestive")}</Option>
                                        <Option value={intl.get("tagEyes")}>{intl.get("tagEyes")}</Option>
                                        <Option value={intl.get("tagGlands")}>{intl.get("tagGlands")}</Option>
                                        <Option value={intl.get("tagInfectious")}>{intl.get("tagInfectious")}</Option>
                                        <Option value={intl.get("tagInjury")}>{intl.get("tagInjury")}</Option>
                                        <Option value={intl.get("tagLiver")}>{intl.get("tagLiver")}</Option>
                                        <Option value={intl.get("tagNeuromuscular")}>{intl.get("tagNeuromuscular")}</Option>
                                        <Option value={intl.get("tagRespiratory")}>{intl.get("tagRespiratory")}</Option>
                                        <Option value={intl.get("tagSkin")}>{intl.get("tagSkin")}</Option>
                                    </Select>
                                </Form.Item>

                                {/*
                                    Submit button
                                */}
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        {intl.get("diseaseButtonSubmit")}
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Card>
                    </Col>
                </Row>


                {/*
                This block is the body of the page.
                It's a list component with multiple items.
                */}
                <Row style={{ padding: "20px" }}>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <List
                            // bordered="true"
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                // onChange: (page) => {
                                //     console.log(page);
                                // },
                                pageSize: 6,
                            }}
                            dataSource={data}

                            // Code below is generating the list from dataset.
                            renderItem={(item) => (
                                <List.Item
                                    key={item.id}

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
                                    style={{ fontSize: "16px" }}
                                >
                                    <List.Item.Meta
                                        // This part is for add an avatar
                                        // avatar={<Avatar src={item.avatar} />}

                                        // The item title
                                        title={<a href={'/disease/' + item.id}>{item.name}</a>}

                                    //description={item.description}
                                    />
                                    {item.description}

                                    <div style={{ paddingTop: "15px" }}>
                                        <Tag color={handleColor(item.severity)}>{item.severity}</Tag>
                                        {
                                            item.tag ? (item.tag.map(i =>
                                                <Tag
                                                    color={handleColor(i)}>{i}</Tag>)) : (console.log("No tag"))
                                        }

                                        <div style={{ paddingTop: "15px" }}>
                                            <Button href={'/disease/' + item.id} type="primary" style={{ float: "right" }}>
                                                {intl.get("diseaseButtonMore")}
                                            </Button>
                                        </div>
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
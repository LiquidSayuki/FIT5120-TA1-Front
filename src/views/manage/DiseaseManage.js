import React, {useState} from 'react';
import RichTextEditor from "../../components/richTextEditor/RichTextEditor";
import {Button, Input, Form} from "antd";
import axios from "axios";

const { TextArea } = Input;

const DiseaseManage = () => {
    const [html,setHtml] = useState("");

    const onFinish = (values) => {
      console.log(values);
      console.log(html);
        axios.put("https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/zh-CN/items", {
            id:values.id,
            name:values.name,
            imgSrc:values.imgSrc,
            description:values.description,
            content:html,
        })
            .then(res=> {console.log(res)})
            .catch(reason => {console.log(reason)})
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item name="id"
                           label="id">
                    <Input/>
                </Form.Item>
                <Form.Item name="name"
                           label="name">
                    <Input/>
                </Form.Item>
                <Form.Item name="imgSrc"
                           label="imgSrc">
                    <Input/>
                </Form.Item>
                <Form.Item name="description"
                           label="description">
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item >
                    <RichTextEditor getContent={(html)=>{setHtml(html)}}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default DiseaseManage;
import React, {useState} from 'react';
import RichTextEditor from "../../components/richTextEditor/RichTextEditor";
import {Button, Input, Form, InputNumber} from "antd";

const { TextArea } = Input;

const DiseaseManage = () => {
    const [html,setHtml] = useState("");

    const onFinish = (values) => {
      values.content = html;
      console.log(values)
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
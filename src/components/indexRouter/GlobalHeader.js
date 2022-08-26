import React from 'react';
import { Avatar, Layout, Menu, Col, Row } from 'antd';
import style from "./GlobalHeader.module.css"
import {withRouter} from "react-router-dom";

const { Header } = Layout;

// Data structure of the Top navigation bar
const items = [
    {
        key:"/home",
        label:"Home"
    },
    {
        key:"/vaccine",
        label:"Vaccines",
    },{
        key:"/disease",
        label:"Diseases",
        children: [{
            key:"/disease01",
            label:"disease 01"
        },{
            key:"/disease02",
            label:"disease 02"
        }]
    }]

const GlobalHeader = (props) => {
    const onClick = (e) =>{
        //console.log(props);
        props.history.push(e.key)
    };
    return (
            <Header>
                <Row>
                    <Col span={1}><Avatar size={40}>P</Avatar></Col>
                    <Col span={3}><h2 className={style.logo}>Pediroo</h2></Col>
                    <Col span={16}>
                        <Menu
                        theme="dark"
                        mode="horizontal"
                        onClick = {onClick}
                        items={items}
                        />
                    </Col>
                    <Col span={4}><span className={style.username} style={{float:"right"}}>Welcome,User</span></Col>
                </Row>
            </Header>
    );
};

export default withRouter(GlobalHeader);
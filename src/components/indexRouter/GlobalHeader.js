import React from 'react';
import { Avatar, Layout, Menu, Col, Row, Affix } from 'antd';
import style from "./GlobalHeader.module.css"
import { withRouter } from "react-router-dom";

const { Header } = Layout;

// Data structure of the Top navigation bar
const items = [
    {
        key: "/home",
        label: "Home"
    },
    {
        key: "/backgroundInfo",
        label: "Background Info"
    },
    {
        key: "/vaccines",
        label: "Vaccines",
        children: [{
            key: "/BirthToAges6",
            label: "Birth to Ages 6"
        }
            // ,
            // {
            //     key: "/Ages7ToAges18",
            //     label: "Ages 7 to Ages 18"
            // }
        ]
    }, {
        key: "/diseases",
        label: "Diseases",
    }]

const GlobalHeader = (props) => {
    const onClick = (e) => {
        //console.log(props);
        props.history.push(e.key)
    };

    const selectedKey = [props.location.pathname]

    return (
        <Affix offsetTop={0}>
            <Header
                style={{
                    // position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}>
                <Row>
                    <Col span={1}><Avatar size={40}>P</Avatar></Col>
                    <Col span={3}><h2 className={style.logo}>Pediroo</h2></Col>
                    <Col span={16}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            onClick={onClick}
                            items={items}
                            defaultSelectedKeys={selectedKey}
                        />
                    </Col>
                    <Col span={4}><span className={style.username} style={{ float: "right" }}>Welcome,User</span></Col>
                </Row>
            </Header>
        </Affix>
    );
};

export default withRouter(GlobalHeader);
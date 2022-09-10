import React, {useEffect, useState} from 'react';
import {Avatar, Layout, Menu, Col, Row, Affix, Dropdown, Button} from 'antd';
import style from "./GlobalHeader.module.css"
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import intl from "react-intl-universal";

const { Header } = Layout;

const GlobalHeader = (props) => {

    // Data structure of the Top navigation bar
    const items = [
        {
            key: "/home",
            label: intl.get("globalHeaderHome")
        },
        {
            key: "/backgroundInfo",
            label: intl.get("globalHeaderBackground")
        },
        {
            key: "/diseases",
            label: intl.get("globalHeaderDiseases")
        },
        {
            key: "/BirthToAges4",
            label: intl.get("globalHeaderVaccines")
            // children: [{
            //     key: "/BirthToAges6",
            //     label: "Birth to Ages 6"
            // }}]
        }]

    // Handle the language change
    const handelLangChange = (e) => {
        cookie.save('lang',e.key,{path:'/'});
        window.location.reload();
    }

    // data structure of language setting drop down list
    const languageList = (
        <Menu
            onClick = {handelLangChange}
            items = {[
                {
                    key: "en-US",
                    label: "English"
                },
                {
                    key: "zh-CN",
                    label: "简体中文"
                }
            ]}
        />
    )

    // Handle the redirect
    const onClick = (e) => {
        //console.log(props);
        props.history.push(e.key)
    };

    // Handle the highlighted menu item
    const [selectedKey,setSelectedKey] = useState([props.location.pathname]);
    useEffect(()=>{
        setSelectedKey(props.location.pathname);
        console.log(selectedKey);
    },[]);


    return (
        <Affix offsetTop={0}>
            <Header
                style={{
                    // position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}>
                <Row>
                    {/*Logo*/}
                    <Col span={1}>
                        <Avatar size={40}
                                src="https://s3.bmp.ovh/imgs/2022/09/01/c53ecacabc1dfcaf.png"
                        />
                    </Col>

                    {/*Title*/}
                    <Col span={3}>
                        <h2 className={style.logo}>Pediroo</h2>
                    </Col>

                    {/*Navigation Menu*/}
                    <Col span={16}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            onClick={onClick}
                            items={items}
                            defaultSelectedKeys={selectedKey}
                        />
                    </Col>

                    {/*Multi-language*/}
                    <Col span={4}>
                        <Dropdown overlay={languageList} placement="bottom" arrow>
                            <Button>{intl.get("globalHeaderLanguageSetting")}</Button>
                        </Dropdown>
                    </Col>

                </Row>
            </Header>
        </Affix>
    );
};

export default withRouter(GlobalHeader);
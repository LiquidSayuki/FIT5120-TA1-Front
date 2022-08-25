import React from 'react';
import { Layout, Menu } from 'antd';
import style from "./PageHeader.module.css"
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

const PageHeader = (props) => {
    const onClick = (e) =>{
        console.log(props);
        props.history.push(e.key)
    };
    return (
            <Header>
                <div className={style.logo}> LOGO </div>
                <span className={style.username} style={{float:"right"}}>Welcome,User</span>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick = {onClick}
                    items={items}
                />
            </Header>
    );
};

export default withRouter(PageHeader);
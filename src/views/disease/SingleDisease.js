import React, {useEffect, useState} from 'react';
import {Col, Layout, Row, List,Button, Typography, Divider} from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import axios from "axios";

const {Content} = Layout;

// const data = {
//     id:"01",
//     name:"Chickenpox",
//     symptom:"SSSSSSYYYYYYMMMMMPPPPPPTTTTTTOOOOOMMMM",
//     vaccine:true,
//     prevention:"PPPPRRREEEEVVVVEEENNNTTTIIIOOONNN",
//     reference:"ref"
// }

const SingleDisease = (props) => {
    const [data, setData] = useState({});

    useEffect(()=>{
        axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/items/'+props.match.params.id).then(res=>{
            console.log(res.data.Item)
            setData(res.data.Item)
        })
    },[])

    return (
        <Content
            style={{
                padding: '0 60px',
            }}
        >
            <LocationIdentifier title={data.name}/>
            <div className="site-layout-content">
                <div>{data.name}</div>
            </div>
        </Content>
    );
};

export default SingleDisease;
import React from 'react';
import {Route, Switch} from "react-router-dom";
import { Layout } from 'antd';
import Disease from "../disease/Disease";
import Vaccine from "../vaccine/Vaccine";
import LocationIdentifier from "../../components/indexRouter/LocationIdentifier";

const {Content} = Layout;

const BasicPageFrame = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier></LocationIdentifier>
            <div className="site-layout-content">
                <Switch>
                    <Route path="/vaccine" component={Vaccine}/>
                    <Route path="/disease/disease01" component={Disease}/>
                </Switch>
            </div>
        </Content>

    );
};

export default BasicPageFrame;
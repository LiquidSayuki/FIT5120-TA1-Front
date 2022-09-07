import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import GlobalHeader from "../components/indexRouter/GlobalHeader";
import Disease from "../views/disease/Disease";
import BirthToAges4 from "../views/vaccine/BirthToAges4";
import SingleDisease from "../views/disease/SingleDisease";
import BackgroundInfo from "../views/backgroundInfo/BackgroundInfo";
import DiseaseManage from "../views/manage/DiseaseManage";
import DataDisplay from "../views/dataDisplay/DataDisplay";
import Outdoors from "../views/outdoors/Outdoors";

const { Footer } = Layout;

export default function IndexRouter() {
    return (
        <Layout className="layout">
            <GlobalHeader />
            <Switch>
                <Route path="/manage/disease" component={DiseaseManage} />
                <Route path="/BirthToAges4" component={BirthToAges4} />
                <Route path="/BackgroundInfo" component={BackgroundInfo} />
                <Route path="/Outdoors" component={Outdoors} />
                {/* <Route path="/Ages7ToAges18" component={Ages7ToAges18} /> */}
                {/* <Route path="/vaccine/:id" component={BirthToAges6}></Route> */}
                <Route path="/diseases" component={Disease} />
                <Route path="/disease/:id" component={SingleDisease}></Route>
                <Route path="/home" component={Home} />
                <Route path="/data" component={DataDisplay} />
                <Redirect from="/" to="/home" />
            </Switch>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Hello
            </Footer>
        </Layout>
    );
};
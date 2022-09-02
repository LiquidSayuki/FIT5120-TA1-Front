import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import GlobalHeader from "../components/indexRouter/GlobalHeader";
import Disease from "../views/disease/Disease";
import BirthToAges6 from "../views/vaccine/BirthToAges6";
import SingleDisease from "../views/disease/SingleDisease";
import BackgroundInfo from "../views/backgroundInfo/BackgroundInfo";
import DiseaseManage from "../views/manage/DiseaseManage";
import DiseasePreview from "../views/manage/DiseasePreview";

const { Footer } = Layout;

export default function IndexRouter() {
    return (
        <Layout className="layout">
            <GlobalHeader />
            <Switch>
                <Route path="/manage/disease/preview" component={DiseasePreview} />
                <Route path="/manage/disease" component={DiseaseManage} />
                <Route path="/BirthToAges6" component={BirthToAges6} />
                <Route path="/BackgroundInfo" component={BackgroundInfo} />
                {/* <Route path="/Ages7ToAges18" component={Ages7ToAges18} /> */}
                <Route path="/vaccine/:id" component={BirthToAges6}></Route>
                <Route path="/diseases" component={Disease} />
                <Route path="/disease/:id" component={SingleDisease}></Route>
                <Route path="/home" component={Home} />
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
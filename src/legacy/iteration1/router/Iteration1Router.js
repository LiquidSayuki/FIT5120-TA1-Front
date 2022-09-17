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

const { Footer } = Layout;

export default function Iteration1Router() {
    return (
        <Layout className="layout">
            <GlobalHeader />
            <Switch>
                <Route path="/iteration1/manage/disease" component={DiseaseManage} />
                <Route path="/iteration1/BirthToAges4" component={BirthToAges4} />
                <Route path="/iteration1/Quiz" component={BackgroundInfo} />
                {/* <Route path="/Ages7ToAges18" component={Ages7ToAges18} /> */}
                {/* <Route path="/vaccine/:id" component={BirthToAges6}></Route> */}
                <Route path="/iteration1/diseases" component={Disease} />
                <Route path="/iteration1/disease/:id" component={SingleDisease}></Route>
                <Route path="/iteration1/home" component={Home} />
                <Route path="/iteration1/data" component={DataDisplay} />
                <Redirect from="/iteration1" to="/iteration1/home" />
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
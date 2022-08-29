import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import PageHeader from "../components/indexRouter/GlobalHeader";
import Ages7ToAges18 from "../views/vaccine/Ages7ToAges18";
import Disease from "../views/disease/Disease";
import BirthToAges6 from "../views/vaccine/BirthToAges6";
import SingleDisease from "../views/disease/SingleDisease";

const { Footer } = Layout;

export default function () {
    return (
        <Layout className="layout">
            <PageHeader />
            <Switch>
                <Route path="/BirthToAges6" component={BirthToAges6} />
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
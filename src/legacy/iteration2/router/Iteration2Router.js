import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import GlobalHeader from "../components/indexRouter/GlobalHeader";
import Disease from "../views/disease/Disease";
import BirthToAges4 from "../views/vaccine/BirthToAges4";
import SingleDisease from "../views/disease/SingleDisease";
import Quiz from "../views/quiz/Quiz";
import DiseaseManage from "../views/manage/DiseaseManage";
import Outdoors from "../views/outdoors/Outdoors";

const { Footer } = Layout;

export default function Iteration2Router() {
    return (
        <Layout className="layout">
            <GlobalHeader />
            <Switch>
                <Route path="/iteration2/manage/disease" component={DiseaseManage} />
                <Route path="/iteration2/BirthToAges4" component={BirthToAges4} />
                <Route path="/iteration2/quiz" component={Quiz} />
                <Route path="/iteration2/Outdoors" component={Outdoors} />
                {/* <Route path="/Ages7ToAges18" component={Ages7ToAges18} /> */}
                {/* <Route path="/vaccine/:id" component={BirthToAges6}></Route> */}
                <Route path="/iteration2/diseases" component={Disease} />
                <Route path="/iteration2/disease/:id" component={SingleDisease}></Route>
                <Route path="/iteration2/home" component={Home} />
                <Redirect from="/iteration2" to="/iteration2/home" />
            </Switch>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Copy Right... I don't know if reserved or not. Anyway.
            </Footer>
        </Layout>
    );
};
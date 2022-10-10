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
import DataDisplay from "../views/dataDisplay/DataDisplay";
import Outdoors from "../views/outdoors/Outdoors";
import VaccineSchedule from "../views/vaccine/VaccineSchedule";
import Map from "../views/map/Map";

const { Footer } = Layout;

export default function IndexRouter() {
    return (
        <Layout className="layout">
            <GlobalHeader />
            <Switch>
                <Route path="/map" component={Map}/>
                <Route path="/manage/disease" component={DiseaseManage} />
                <Route path="/BirthToAges4" component={BirthToAges4} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/Outdoors" component={Outdoors} />
                {/* <Route path="/vaccine/:id" component={BirthToAges6}></Route> */}
                <Route path="/diseases" component={Disease} />
                <Route path="/disease/:id" component={SingleDisease}></Route>
                <Route path="/home" component={Home} />
                <Route path="/data" component={DataDisplay} />
                <Route path="/vaccineSchedule" component={VaccineSchedule} />
                <Redirect from="/" to="/home" />
            </Switch>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Copy right reserved by FIT 5120 TA1 Team.
            </Footer>
        </Layout>
    );
};
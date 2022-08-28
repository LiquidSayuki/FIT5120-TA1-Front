import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import PageHeader from "../components/indexRouter/GlobalHeader";
import Vaccine from "../views/vaccine/Vaccine";
import Disease from "../views/disease/Disease";
import SingleVaccine from "../views/vaccine/SingleVaccine";
import SingleDisease from "../views/disease/SingleDisease";

const { Footer } = Layout;

export default function () {
    return(
        <BrowserRouter>
            <Layout className="layout">
                <PageHeader/>
                <Switch>
                    <Route path="/vaccines" component={Vaccine}/>
                    <Route path="/vaccine/:id" component={SingleVaccine}></Route>
                    <Route path="/diseases" component={Disease}/>
                    <Route path="/disease/:id" component={SingleDisease}></Route>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                            {/*<Route path="/" render={()=>*/}
                            {/*"条件"?true:<Redirect to=""/>*/}
                            {/*}/>*/}
                </Switch>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Hello
                </Footer>
            </Layout>
        </BrowserRouter>
    );
};
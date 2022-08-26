import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import PageHeader from "../components/indexRouter/GlobalHeader";
import Vaccine from "../views/vaccine/Vaccine";
import Disease from "../views/disease/Disease";

const { Footer } = Layout;

export default function () {
    return(
        <BrowserRouter>
            <Layout className="layout">
                <PageHeader/>
                <Switch>
                    <Route path="/vaccine" component={Vaccine}/>
                    <Route path="/disease" component={Disease}/>
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
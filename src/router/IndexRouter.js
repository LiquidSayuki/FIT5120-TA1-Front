import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { Layout } from 'antd';
import Home from "../views/home/Home";
import PageHeader from "../components/indexRouter/PageHeader";
import BasicPageFrame from "../views/basicPageFrame/BasicPageFrame";

const { Footer } = Layout;

export default function () {
    return(
        <BrowserRouter>
            <Layout className="layout">
                <PageHeader></PageHeader>
                <Switch>
                    <Route path="/vaccine" component={BasicPageFrame}/>
                    <Route path="/disease" component={BasicPageFrame}/>
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
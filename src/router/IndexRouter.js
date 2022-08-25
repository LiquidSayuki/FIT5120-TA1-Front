import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../views/home/Home";
import PageHeader from "../components/indexRouter/PageHeader";
import Vaccines from "../views/vaccines/Vaccines";

export default function () {
    return(
        <BrowserRouter>
            <PageHeader></PageHeader>
            <Switch>
                <Route path="/vaccines" component={Vaccines}/>
                <Route path="/" component={Home}/>
                {/*<Route path="/" render={()=>*/}
                {/*"条件"?true:<Redirect to=""/>*/}
                {/*}/>*/}
            </Switch>
        </BrowserRouter>
    );
};
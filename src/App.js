import './App.css';
import IndexRouter from "./router/IndexRouter";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./views/login/Login";
import LoginSuccess from "./views/login/LoginSuccess";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/loginSuccess" component={LoginSuccess} />
                <Route path="/login" component={Login} />
                <Route path="/"
                    render={() =>
                        localStorage.getItem('access-token') ? (<IndexRouter />) : (<Redirect to="/login" />)
                    } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

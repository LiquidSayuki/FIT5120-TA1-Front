import './App.css';
import IndexRouter from "./router/IndexRouter";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Login from "./views/login/Login";
import LoginSuccess from "./views/login/LoginSuccess";
import Iteration1Router from "./legacy/iteration1/router/Iteration1Router";
import intl from 'react-intl-universal';
import cookie from "react-cookies";

// Locale data
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CN": require('./locales/zh-CN.json'),
};

function App() {

    const [localesInit,setLocaleInit] = useState(false);

    let currentLocale = intl.determineLocale({
        //urlLocaleKey: "lang"
        cookieLocaleKey: "lang",
    })

    // Set the default value of language setting.
    switch (currentLocale){
        case "zh-CN":
            break
        case "en-US":
            break
        default:
            cookie.save("lang","en-US",{ path: '/' })
            window.location.reload();
    }

    // Initialize the multi-language package.
    useEffect(()=>{

        intl.init({
            currentLocale, // TODO: determine locale here
            locales,
        })
            .then(() => {
                // After loading CLDR locale data, start to render
                setLocaleInit(true);
            });
    },[])

  return (
      <BrowserRouter>
          <Switch>
              <Route path="/loginSuccess" component={LoginSuccess} />
              <Route path="/login" component={Login} />
              <Route path="/iteration1" component={Iteration1Router}/>
              <Route path="/"
                     render={()=>
                         localStorage.getItem('access-token')?(<IndexRouter/>) : (<Redirect to="/login"/>)
              }/>

          </Switch>
      </BrowserRouter>
  );
}

export default App;

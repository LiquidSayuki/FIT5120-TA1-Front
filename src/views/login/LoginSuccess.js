import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import { Button, Result } from 'antd';


const LoginSuccess = (props) => {
    // Code below is to set a count of number
    const [time, setTime] = useState(3);

    useEffect(()=>{
        const tick = setInterval(() => {
            setTime(time - 1);
        },1000);
    });

    // The code below is to retrieve the token from cognital auth.
    let tokenHash = window.location.href;
    console.log(window.location.href);

    try{
        // let tokenSplit = tokenHash.split("#id_token=")[1].split('&access_token=');
        // let idToken = tokenSplit[0].replace('#id_token=', '');
        // let accessToken = tokenSplit[1].split('&expires')[0];
        let code = tokenHash.split("code=")[1];

        // localStorage.setItem('id-token', idToken);
        // localStorage.setItem('access-token', accessToken);
        localStorage.setItem("access-token", code);
    }
    catch (err) {
        console.log(err)
    }

    // redirect to home page
    const onClick = () => {
        props.history.push("/home")
    }

    return (
        <div>
            {/*Set the timer to redirect after 3 seconds.*/}
            {setTimeout(()=>{
                props.history.push("/home")
            },3000)}

            {/*UI of login success*/}
            <Result
                status="success"
                title="Login Success"
                subTitle={"This page would be auto redirect to home page within "+time+" seconds, if not, please click the button below"}
                extra={[
                    <Button type="primary" key="console" onClick={onClick}>
                        Go to homepage
                    </Button>,
                ]}
            />
        </div>
    );
};

export default LoginSuccess;
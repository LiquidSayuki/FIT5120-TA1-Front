import React from 'react';
import { Button, Result } from 'antd';

const Login = (props) => {
    const onClick = () => {
        props.history.push("/home")
    }
    return (
        <Result
            status="warning"
            title="This website is developing. We found that you are not eligible to access it."
            extra={
                <Button type="primary" key="console" onClick={onClick}>
                    Check my eligibility again
                </Button>
            }
        />
    );
};

export default Login;
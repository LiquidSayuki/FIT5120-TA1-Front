import React from 'react';

const LoginSuccess = () => {
    let tokenHash = window.location.href;
    console.log(window.location.href);

    let tokenSplit = tokenHash.split("#id_token=")[1].split('&access_token=');
    let idToken = tokenSplit[0].replace('#id_token=', '');
    let accessToken = tokenSplit[1].split('&expires')[0];

    localStorage.setItem('id-token', idToken);
    localStorage.setItem('access-token', accessToken);

    return (
        <div>
            <Redirect to="/home" />
        </div>
    );
};

export default LoginSuccess;
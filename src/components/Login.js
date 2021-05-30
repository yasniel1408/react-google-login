import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { ID_CLIENT } from '../utils/config';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

function Login({setUser}) {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setUser(res.profileObj)
    alert(
      `Usted se a logeado correctamente`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Fallo al logearte`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={ID_CLIENT}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
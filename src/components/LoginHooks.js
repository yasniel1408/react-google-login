import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { ID_CLIENT } from '../utils/config';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

function LoginHooks({setUser}) {
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

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: ID_CLIENT,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;
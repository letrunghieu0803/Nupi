import React from "react";
import { GoogleLogin } from "react-google-login";
import {useDispatch} from "react-redux"
import {loginSuccsess, homePage} from "../../actions"

function Login() {
  const dispatch = useDispatch()

  const responseGoogle = async (response) => {
    const {name, imageUrl, email} = response.profileObj
    console.log(response)
    
    localStorage.setItem("userName", name);
    localStorage.setItem("userImageUrl", imageUrl);
    localStorage.setItem("userEmail", email);
    dispatch(loginSuccsess())
    dispatch(homePage())
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <GoogleLogin
        clientId="66202502986-k7hlad72lv3hdd74ujtpaga7a72s1rq8.apps.googleusercontent.com"
        buttonText="Login with account Google"
        onSuccess={responseGoogle}
        // isSignedIn={true}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}

      
      />
    
    
    </div>
  );
}

export default Login;

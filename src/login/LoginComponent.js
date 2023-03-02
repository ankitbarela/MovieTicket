import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginComponent.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import loginCreater from '../reducers/loginCreater'
import { postLogin } from '../reducers/loginCreater';


function Login() {
  const dispatch = useDispatch()

    const userPerformance = {
        _token: null
    };
    const initialvalues = {
        username: "",
        password: ""
    };
    const [inputs, setInputs] = useState(initialvalues);
    const [item, setItem] = useState({});
    const [valid, setValid] = useState(false);
    let navigate = useNavigate();

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    // const handleSubmit = () => {
    //     fetch("https://localhost:7097/signin", {
    //         method: 'POST',
    //         headers: {
    //             'access-control-allow-origin': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Access-Control-Allow-Methods': '*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(inputs)
    //     }).then((response) => {
    //         response.json().then((result) => {
    //             if (result.statusCode == 200) {
    //                 updateToken(result.value.token);
    //                 setItem(result);
    //                 navigate("/");
    //                 window.location.reload();
    //                 localStorage.setItem('userId' , result.value.userId)
    //             }
    //             else {
    //                 setValid(true);
    //             }
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }

    const updateToken = (token) => {
        userPerformance._token = token;
        if (token) {
            localStorage.setItem('tokenKey', JSON.stringify(token));
        }
        else {
            localStorage.removeItem('tokenKey');
        }
    }

    const handleSubmit = ()=>{
        debugger
        dispatch(postLogin(inputs));
      //  navigate("/");
       // window.location.reload();
    }

    return (
        <>
            <div className='login'>
                <div>
                    <img src="/images/login-page.webp" alt="not uplaoded" />
                </div>
                {valid ? <div className='invalid-text'>
                    Invailed  UserName or Password
                </div> : <div>
                </div>}
                <div>
                    <div>
                        <input
                            type="text"
                            className='form-control'
                            name="username"
                            placeholder="User Name"
                            value={inputs.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className='form-control'
                            name="password"
                            placeholder="Password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                    <a href="/reset" className='reset-password'>Reset Password</a>
                    <div>
                        <button type='button' className='btn btn-primary' onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

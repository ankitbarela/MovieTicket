import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginComponent.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const userPerformance = {
        _token :null
    };
    const initialvalues = {
        username: "",
        password: ""
    };
    const [inputs, setInputs] = useState(initialvalues);
    const [item, setItem] = useState({});
    let navigate = useNavigate(); 

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        fetch("https://localhost:7097/signin", {
            method: 'POST',
            headers: {
                'access-control-allow-origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }).then((response) => {
            response.json().then((result) => {
                if (result.statusCode == 200) {
                 updateToken(result.value);
                setItem(result);
                navigate("/");
                window.location.reload();
                }
            })
        }).catch(err => {
            console.log(err);
        });
    }

    const updateToken =(token)=>{
       userPerformance._token = token;
        if (token) {
            localStorage.setItem('tokenKey', JSON.stringify(token));
        }
        else {
            localStorage.removeItem('tokenKey');
        }
    }

  const getAccessToken =() => {
        let result = localStorage.getItem('tokenKey');
        if (!result) {
            return "";
        }
        return JSON.parse(result).accessToken;
    }
 
    return (
        <>
            <div className='login'>
                <div>
                    <img src="/images/login-page.webp" alt="not uplaoded" />
                </div>
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
                            type="text"
                            className='form-control'
                            name="password"
                            placeholder="Password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <a href="/"> */}
                        <button type='button' className='btn btn-primary' onClick={handleSubmit}>submit</button>
                    {/* </a> */}
                </div>
            </div>
        </>
    );
}

export default Login;

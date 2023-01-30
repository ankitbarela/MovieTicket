import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginComponent.css';
import React, { useState } from "react";


function Login() {
    const initialvalues = {
        username: "",
        password: ""
    };
    const [inputs, setInputs] = useState(initialvalues);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        fetch("https://localhost:7097/signin", {
            method: 'POST',
            headers: { 'access-control-allow-origin' :'*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(inputs)
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result.value);
            })
        }) .catch(err => {
            console.log(err);
          });
    }
    return (
        <>
            <div className='login'>
                <div className='heading-text'>Login</div>
                <div>
                    <img src="/images/login-page.webp" alt="not uplaoded" />
                </div>
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
                   <button type='button' className='btn btn-primary' onClick={handleSubmit}>submit</button>
            </div>
        </>
    );
}

export default Login;

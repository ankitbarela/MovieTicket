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
        console.log(inputs)
    }

    const handleSubmit = () => {
        fetch("https://localhost:44366/api/Login", {
            method: 'POST',
            headers: { 'access-control-allow-origin' :'*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn("result",result);
            })
        }) .catch(err => {
            console.log(err);
          });
    }

    return (
        <>
            <h1>{inputs.username}</h1>
            <h1>{inputs.password}</h1>
            <div className='login'>
                <div className='heading-text'>Login</div>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            value={inputs.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                   <button type='button' onClick={handleSubmit}>submit</button>
            </div>
        </>
    );
}

export default Login;

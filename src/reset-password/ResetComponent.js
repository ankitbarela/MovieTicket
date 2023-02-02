import 'bootstrap/dist/css/bootstrap.min.css';
import './ResetComponent.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HostUrl from '../HostUrl.json'

function ResetPassword() {
    
    const initialvalues = {
        email: "",
        password :""
    };
    const [inputs, setInputs] = useState(initialvalues);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        fetch(`${HostUrl.hostUrl}/User?email=${inputs.email}&password=${inputs.password}`, {
            method: 'PUT',
            headers: {
                'access-control-allow-origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }).then((response) => {
            response.json().then((result) => {
                console.log(result)
            })
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
        <div className='reset-password'>
            <div>
                <h4>
                    Change Password
                </h4>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        name="email"
                        placeholder="Email"
                        value={inputs.email}
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
        </div>
    </>
    );
}

export default ResetPassword;

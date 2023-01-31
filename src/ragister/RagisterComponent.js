import 'bootstrap/dist/css/bootstrap.min.css';
import './RagisterComponent.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HostUrl from '../HostUrl.json'



function Ragister() {
    
    const initialvalues = {
        name: "",
        email: "",
        password :"",
        age :null,
        contactNumber :""
    };
    const [inputs, setInputs] = useState(initialvalues);

    let navigate = useNavigate(); 

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        fetch(`${HostUrl.hostUrl}/User`, {
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
                navigate("/");
                window.location.reload();
                }
            })
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
        <div className='sign-in'>
            <div>
                <h4>
                    Sign In
                </h4>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </div>
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
                <div>
                    <input
                        type="number"
                        className='form-control'
                        name="age"
                        placeholder="Age"
                        value={inputs.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={inputs.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                {/* <a href="/"> */}
                    <button type='button' className='btn btn-primary' onClick={handleSubmit}>Create</button>
                {/* </a> */}
            </div>
        </div>
    </>
    );
}

export default Ragister;

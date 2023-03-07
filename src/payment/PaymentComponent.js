import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentComponent.css';
import HostUrl from '../HostUrl.json'


function Payment() {
    var location = useLocation();
    var userId = location.state.userId;
    var bookingId = location.state.bookingId;

    const initialvalues = {
        cardName: "",
        cardNumber: "",
        expiry: "",
        month : "",
        year : "",
        cvv: null,
        bookingId:bookingId,
        userId : userId
    };

    const [inputs , setInputs] = useState(initialvalues)

    useEffect(()=>{

    },[])

    const handleChange=(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value})
        console.log(inputs)
    }

    const makePayment = () => {
        fetch(`${HostUrl.hostUrl}/Payment`, {
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
                if (result.statusCode != 200) {
                    console.log("booking not ragistered")
                }
                console.log(result.value)
            })
        }).catch(err => {
            console.log(err);
        });
    } 

    return (
        <div className='payment-container'>
            <div className='heading'>
                Debit Card
            </div>
            <div className='detail-heading'>
                Enter Your Card Detail
            </div>
            <div className='card-detail'>
                <div>
                    <input
                        type="text"
                        className='form-control card-detail'
                        name='cardNumber'
                        placeholder="Enter Card Number"
                        value={inputs.cardNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className='form-control card-detail'
                        name='cardName'
                        placeholder="Enter Card Name"
                        value={inputs.cardName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <aside>
                       <input type="text" name='month' placeholder="MM" maxLength={2} value={inputs.month} onChange={handleChange}/> 
                    </aside>
                    <aside>
                       <input type="text" name='year' placeholder="YY" maxLength={2} value={inputs.year} onChange={handleChange}/> 
                    </aside>
                </div>
                <div>
                    <input type="number" name='cvv' placeholder='Cvv' maxLength={4} value={inputs.cvv} onChange={handleChange}/>
                </div>
            </div>
             <div>
                <button type="button" className='btn btn-danger' onClick={makePayment}>Make Payment</button>
             </div>
        </div>
    );
}

export default Payment;
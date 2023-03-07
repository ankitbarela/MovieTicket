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
        cvv: null,
        bookingId:0,
        userId : 0
    };

    const [inputs , setInputs] = useState(initialvalues)

    useEffect(()=>{

    },[])

    const createPayment = () => {
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
                        className='form-control'
                        placeholder="Enter Card Number"
                        value={inputs.cardNumber}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Enter Card Name"
                        value={inputs.cardName}
                    />
                </div>
                <div>
                    <aside>
                       <input type="text" placeholder="MM" maxLength={2} /> 
                    </aside>
                    <aside>
                       <input type="text" placeholder="YY" maxLength={2}/> 
                    </aside>
                </div>
                <div>
                    <input type="text" placeholder='Cvv' maxLength={4}/>
                </div>
            </div>
             <div>
                <button type="button" className='btn btn-danger'>Make Payment</button>
             </div>
        </div>
    );
}

export default Payment;
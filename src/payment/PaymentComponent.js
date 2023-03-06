import './PaymentComponent.css';

function Payment() {
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
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Enter Card Name"
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
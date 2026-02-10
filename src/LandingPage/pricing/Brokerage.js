import React from 'react'

function Brokerage() {
    return (
        <div className='row text-center p-5 mt-5'>
            <div className='col-8 p-5'>
                <a className="mb-3" href="" style={{ textDecoration: "none" }}><h3>Brokerage Calculator</h3></a>
                <ul className='text-muted' style={{ textAlign: "Left", lineHeight: "2.5" }}>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of 50 +
                        GST per order.
                    </li>
                    <li>Digital contact notes will be sent via e-mail.</li>
                    <li>Physical copy of contact notes, if required, shall be charged 20
                        per contract note. Courier charges apply.</li>
                    <li>For NRI account (Non-PIS), 0.5% or 200 per executed order
                        for equity (whichever is lower)</li>
                    <li>For NRI account (PIS), 0.5% or 200 per executed order
                        for equity (whichever is lower)</li>
                </ul>

            </div>
            <div className='col-4 p-5'>
                <a href="" style={{ textDecoration: "none" }}><h3>List of charges</h3></a>
            </div>
        </div>
    );
}

export default Brokerage;
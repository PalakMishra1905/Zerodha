import React from 'react'

function Team() {
    return (
        <div className='container mb-5'>
            <h1 className='text-center mb-5'>People</h1>
            <div className='row'>
                <div className='col p-5 text-center'>
                    <img src="media/images/nithinKamath.jpg" style={{width:"50%",borderRadius:"100%"}}/>
                    <h3 className='mb-2'>Nitin Kamath</h3>
                    <p>Founder, CEO</p>
                </div>
                <div className='col p-5' style={{lineHeight:"1.8"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a style={{textDecoration:"none"}} href="">HomePage</a> / <a style={{textDecoration:"none"}} href="">Trading Q&A</a> / <a style={{textDecoration:"none"}} href="">Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;
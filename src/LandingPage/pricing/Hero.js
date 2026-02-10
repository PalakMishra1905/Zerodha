import React from 'react'

function Hero(){
    return(
        <div className='container'>
            <div className='row p-5 text-center'>
                <h2 className='mb-3'>Charges</h2>
                <h4 className='text-muted'>List of all charges and taxes</h4>
            </div>
            <div className='row p-5'>
                <div className='col'>
                    <img src="/media/images/pricing0.svg"/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col'>
                    <img src="/media/images/intradayTrades.svg"/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                    <img src="/media/images/pricing0.svg"/>
                    <h2>Free direct MF</h2>
                    <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
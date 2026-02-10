import React from 'react'

function Hero(){
    return(
       <div className='container text-center border-bottom mt-5 p-5 mb-5'>
        <h1>Zerodha Products</h1>
        <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our  <a style={{textDecoration:"none"}} href="">investment offerings →</a></p>
       </div>
    );
}

export default Hero;
import React from 'react'

function Footer(){
    return(
    <footer style={{backgroundColor:"rgb(250, 250, 250"}}>
        <div className='container border-top'>
            <div className='row'>
                <div className='col'>
                    <img src="media/images/logo.svg" className='mt-3 mb-3' style={{width:"50%"}}/>
                    <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p className='mt-3'>Company</p><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">About</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Products</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Pricing</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Referral programs</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Careers</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Zerodha.tech</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Press & media</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Zerodha Cares (CSR)</a>
                </div>
                <div className='col'>
                    <p className='mt-3'>Support</p>
                   <a className="mb-1" style={{textDecoration:"None"}}href="">Contact</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Support Portal</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Z-connect blog</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">List of charges</a><br/>
                    <a className="mb-1" style={{textDecoration:"None"}}href="">Downloads and resources</a><br/>                    
                </div>
                <div className='col'>
                    <p className='mt-3'>Account</p>
                   <a className="mb-2" style={{textDecoration:"None"}}href="">Open an account</a><br/>
                    <a className="mb-2" style={{textDecoration:"None"}}href="">Fund transfer</a><br/>
                    <a className="mb-2" style={{textDecoration:"None"}}href="">60 day challenge</a><br/>                    
                </div>
            </div>
        </div>
    </footer>    
    );
}

export default Footer;
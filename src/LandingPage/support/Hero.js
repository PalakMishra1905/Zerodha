import React from 'react'

function Hero(){
    return(
        <div className='container p-5' style={{backgroundColor:"rgb(56, 126, 209)", color:"white"}}>
            <div className='row'>
                <div className='col p-3'>
                    <h4 className='mb-5'>Support portal</h4>
                    <h2>Search for an answer or browse help topics
                        to create a ticket
                    </h2>
                    <input style={{height:"5rem", width:"25rem"}} placeholder='Eg: how do I activate F&O, Why is my order 
                    getting rejected..' className='p-3'></input><br/>
                     <a className='mr-2' style={{color:"white"}}href="">Track account opening</a>  <a className='mr-2' style={{color:"white"}}href="">Track segment activation</a> 
                     <a className='mr-2' style={{color:"white"}}href="">Intraday</a><br/>
                     <a className='mr-2' style={{color:"white"}}href="">margins</a>
                     <a className='mr-2' style={{color:"white"}}href="">Kite user manual</a>
                </div>
                <div className='col'>
                    <h2 className='mb-3'>Featured</h2>
                    <ol>
                    <li className='mb-3'><a style={{color:"white", lineHeight:"1.5"}}href="">Current takeovers and delistings - January 2024</a></li>
                    <li className='mb-3'><a style={{color:"white", lineHeight:"1.5"}}href="">Latest intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Hero;
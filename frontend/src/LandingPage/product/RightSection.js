import React from 'react'

function RightSection({ imageURL, productName, productDescription, learnMore}){
    return(
        <div className='container'>
            <div className='row p-5'>          
                <div className='col p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a style={{marginLeft:"50px", textDecoration:"none"}} href={learnMore}>Learn more →</a>
                    </div>
                </div>
                <div className='col'>
                    <img src={imageURL} />
                </div>                  
            </div>
        </div>        
    );
}

export default RightSection;
import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a style={{textDecoration:"none"}} href={tryDemo}>try demo →</a>
                        <a style={{marginLeft:"50px", textDecoration:"none"}} href={learnMore}>Learn more →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a style={{marginLeft:"50px"}} href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
import React from 'react'

function Education(){
    return(
        <div className='container mt-6 mb-3'>
            <div className='row'>
                <div className='col'>
                    <img src="media/images/education.svg" style={{width:"70%"}} />
                </div>
                <div className='col p-3'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='mt-3'>Varsity, the largest online stock market education book in the world
                        covering everythhing from the basics to advanced trading.<br/>
                    </p>
                    <a style={{textDecoration:"None"}} className="mx-5" href="">Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India for all your 
                        market related queries. <br/>
                    </p>
                    <a style={{textDecoration:"None"}} className="mx-5 mb-3" href="">Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
import React from 'react'

function Stats(){
    return(
        <div className='container mt-5 p-5'>
           <div className='row'>
              <div className='col-6 p-5'>
                <h1 className='mb-5'>Trust with confidence</h1>
                <h3>Customer first always</h3>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>

                <h3>No Spam or gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you uae at your own pace.</p>

                <h3>The Zerodha Universe</h3>
                <p className='text-muted'>Not just an app but a whole ecosystem. Our investments in 30+ fintech startups offer you a tailered services specific to  your needs.</p>

                <h3>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facalitate transactions, but actively help you do better with your money.</p>                
               </div> 
              <div className='col-6 p-5'>
                <img src="media/images/ecosystem.png" style={{width:"90%"}}/> 
                <div className='text-center'>
                    <a style={{textDecoration:"None"}} className="mx-5" href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a style={{textDecoration:"None"}} href="">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
           </div>
        </div>
    );
}

export default Stats;
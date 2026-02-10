import react from 'react'

function NotFound() {
    return (
        <div className='container'>
            <div className='row text-center p-5'>
                <h1 style={{color:"red"}}>404 Not Found</h1>
                <p>Sorry, the page that you are looking for does not exist</p>
            </div>
        </div>
    );
}

export default NotFound;
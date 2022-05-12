import React from 'react';

function NotFound(){
    return(
        <div className='not-found-wrapper'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">404 Not found</h5>
                    <p className="card-text">Stranica koju trazite ne postoji!</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
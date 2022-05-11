import React from 'react';

function ProizvodKorpa({proizvod}) {
    return (
        <div className='proizvod'>
            <div className="card">
                <h5 className="card-title">{proizvod.naziv}</h5>
                <p className="card-body">Kolicina: {proizvod.kolicinaUkorpi} {proizvod.jedinicaMere} x {proizvod.cena}din = {proizvod.kolicinaUkorpi*proizvod.cena}din</p>
            </div>
        </div>
    )
}

export default ProizvodKorpa;
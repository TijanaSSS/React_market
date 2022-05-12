import React from 'react';
import Dugme from "./Dugme";

function ProizvodKorpa({proizvod, izbaciIzKorpe}) {
    return (
        <div className='proizvod'>
            <div className="card">
                <h5 className="card-title">{proizvod.naziv}</h5>
                <p className="card-body">Kolicina: {proizvod.kolicinaUkorpi} {proizvod.jedinicaMere} x {proizvod.cena}din = {proizvod.kolicinaUkorpi*proizvod.cena}din</p>
                <p className="card-body"><Dugme proizvod={proizvod} text='Izbaci iz korpe' action={izbaciIzKorpe} style='btn btn-danger'></Dugme></p>

            </div>
        </div>
    )
}

export default ProizvodKorpa;
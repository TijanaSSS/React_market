import React from 'react';
import Dugme from "./Dugme";

function Proizvod({proizvod,dodajUKorpu,izbaciIzKorpe}){
    return(
        <div className='proizvod'>
            <div className=" card">
                <img src={proizvod.img} className="card-img-top" alt="Nema slike" />
                <div className="card-body">
                    <h5 className="card-title">{proizvod.naziv}</h5>
                    <p className="card-text">Opis: {proizvod.opis}</p>
                    <p className="card-text">Cena: {proizvod.cena}</p>
                    <p className="card-text">Kolicina: {proizvod.kolicina} {proizvod.jedinicaMere}</p>
                    <p className="card-text">Broj porucenih: {proizvod.kolicinaUkorpi}</p>
                    <div className='d-flex justify-content-start' >
                        <Dugme proizvod={proizvod} text='Dodaj u korpu' action={dodajUKorpu} style={'btn btn-success'}/>
                        {proizvod.kolicinaUkorpi <= 0 ? <></>
                            :
                            <Dugme proizvod={proizvod} text='Izbaci iz korpe' action={izbaciIzKorpe} style={'btn btn-danger'}/>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Proizvod;
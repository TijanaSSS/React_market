import React from 'react';
import ProizvodKorpa from "../components/ProizvodKorpa";

function Korpa({proizvodiUKorpi ,izbaciIzKorpe}){
    let ukupno =0;
    proizvodiUKorpi.forEach((proizvod)=>{
       ukupno+=proizvod.cena*proizvod.kolicinaUkorpi;
    });
    return(
        <div className='korpaStrana'>
            <h2 className='naslovStrane'>Korpa</h2>
            <div className='container-korpa'>
                <div className="proizvodi">
                    {proizvodiUKorpi.map((proizvod)=>(
                        <ProizvodKorpa key={proizvod.id} proizvod={proizvod} izbaciIzKorpe={izbaciIzKorpe} />
                    ))}
                </div>
                <div className='div-ukupno-korpa'>
                    <p>Ukupno za placanje: {ukupno}din</p>
                </div>
            </div>
        </div>
    )
}

export default Korpa;
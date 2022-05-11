import React from 'react';
import ProizvodKorpa from "../components/ProizvodKorpa";

function Korpa({proizvodiUKorpi}){
    return(
        <div className='korpaStrana'>
            <h2 className='naslovStrane'>Korpa</h2>
            <div className='container-korpa'>
                <div className="proizvodi">
                    {proizvodiUKorpi.map((proizvod)=>(
                        <ProizvodKorpa key={proizvod.id} proizvod={proizvod} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Korpa;
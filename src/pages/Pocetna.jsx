import React from 'react';
import Proizvod from "../components/Proizvod";

function Pocetna({proizvodi,dodajUKorpu,izbaciIzKorpe}){
    return(
        <div className='pocetnaStrana'>
            <h2 className='naslovStrane'>Proizvodi</h2>
           <div className='container'>
               <div className='proizvodi'>
                   {proizvodi.map((proizvod) => (
                       <Proizvod proizvod={proizvod} dodajUKorpu={dodajUKorpu} izbaciIzKorpe={izbaciIzKorpe} />
                   ))}
               </div>
           </div>
        </div>
    )
}

export default Pocetna;
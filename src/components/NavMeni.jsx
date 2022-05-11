import React from 'react';
import {Link} from "react-router-dom";
import NavKartica from "./NavKartica";

function NavMeni({pretraga}){
    return(
        <ul className="nav">
            <h1>Market</h1>
            <NavKartica path='/' text='Pocetna'/>
            <NavKartica path='/korpa' text='Korpa'/>

            <form>
                <input className="form-control me-2" type="search" onInput={pretraga} placeholder="Pretrazi proizvode" />
            </form>
        </ul>
    )
}

export default NavMeni;
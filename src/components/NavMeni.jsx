import React from 'react';
import {Link} from "react-router-dom";

function NavMeni({pretraga}){
    return(
        <ul className="nav">
            <h1>Market</h1>
            <li><Link className="nav-link">Pocetna</Link></li>
            <li><Link className="nav-link">Korpa</Link></li>

        </ul>
    )
}

export default NavMeni;
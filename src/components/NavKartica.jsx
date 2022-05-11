import React from 'react';
import {Link} from "react-router-dom";

function NavKartica({path,text}){
    return (
        <li className="nav-item">
            <Link to={path}>{text}</Link>
        </li>
    )
}
export default NavKartica;
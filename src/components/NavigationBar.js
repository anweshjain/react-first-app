import React from "react";
import { Link } from "react-router-dom";


const NavigationBar =() =>{
    return(
        <div>
<ul>
    <li>
        <Link to ="/">home</Link>
    </li>
    <li>
        <Link to ="/About">about</Link>
    </li>
    <li>
        <Link to ="/Contact">contact</Link>
    </li>
    <li>
        <Link to ="/Services">services</Link>
    </li>
</ul>

        </div>
    )
};

export default NavigationBar;
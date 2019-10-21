import React from "react";
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


export default props => {
    return (
 
        <div className= "header">
           
            <nav>
      
                <ul className="nav__links">
      
                  <li>  <div className="ava"> <Avatar name="Tesnor Carly" size="30" round={true} /></div> </li>
                    <li className="goch"><Link to="/" className="navigation-link">
              Home
            </Link></li>
                    <li className="droite"><a href="#">About</a></li>
                    <li className="droit"><button type="submit"><FontAwesomeIcon icon="search"/></button></li>
                </ul>
            </nav>
           
        </div>

    );
};
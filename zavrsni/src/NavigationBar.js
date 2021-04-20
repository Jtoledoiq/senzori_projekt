import React from 'react';
import{Link} from 'react-router-dom';
import Login from './Login';
import './NavigationBar.css'

function NavigationBar(){
     
    return(
        <div className="containerNav">
       
            <Link  to = "/senzori" >
                SENZORI 
            </Link>

            <Link  to ="/alarmi" >
                ALARMI
            </Link>
           
            <Link  to ="/korisnici" >
                KORISNICI
            </Link>
            
          
            <Link to ="/postavke">
                POSTAVKE
            </Link>
           
        </div>
    );

}
export default NavigationBar;
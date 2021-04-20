import React, { useState } from 'react';
import{Alert}from 'react';
import {useHistory} from 'react-router-dom';
import './Login.css'
import { FiLogIn } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

function Login(){
const[ime,setIme]=useState('');
const[sifra,setSifra]=useState('');
const history=useHistory();
const [allUsers,setAllUsers]=useState([]);

const prijava=()=>{

    fetch('http://localhost:3004/getAllUsers/',{

    })
 
        .then(response => response.json())
        .then(data => {
            setAllUsers(data);
     })


    if(ime==0)
    {
        alert("Nema unesno ime ")      
    }
    else{
      if(sifra==0){
          alert("Nema unesne šifre")
        }else{

            for(let i=0; i<allUsers.length; i++){
              
                if(allUsers[i].FirstName===ime && allUsers[i].pass===sifra ) 
                    {
                        if(allUsers[i].role==1){
                            console.log("bravo martina");
                            history.push('/home'); 
                        }else{
                            history.push('/home2');
                        }
                        
                    }else{
                        console.log("krivi podatci");
                    }
            } 

        }       
    }
}
    return (
    <div className="bodyLogIn">
       
        <div className="containerLogIn"> 
        <FiLogIn className="ikonaLogIn"/>
            <div>
                <FiUser className="ikona"/>
                <input
                    type='text'
                    placeholder="Unesite korisnicko ime"  
                    onChange={e => {
                        setIme(e.target.value) ;
                     }}
                />
            </div>

            <div>
                <FiLock className="ikona"/>
            <input
            type='password'
            placeholder="Unesite sifru"  
            onChange={e => {
                setSifra(e.target.value) ;
                 }}
             />
            </div>
            <div>
             <button className='buttonLogIn' onClick={()=>{prijava()}}>
                 Prijava
             </button>
            </div>
        </div>
    </div>
    );


}
export default Login;
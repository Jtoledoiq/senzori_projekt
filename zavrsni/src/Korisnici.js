import React,{Component }from 'react';
import  { useState } from 'react';
import  { useEffect }from 'react';
import  { Alert} from 'react';
import { FiWatch } from 'react-icons/fi';

function Korisnici (){

 const [nesto,setNesto]=useState();
 const [ime, setIme] = useState()
 const [prezime,setPrezime]=useState();
 const [mail,setMail]=useState();
 const [lozinka,setLozinka]=useState();
 const [role,setRole]=useState();
 const [allUsers,setAllUsers]=useState([]);
 const [id,setId]=useState();

 useEffect(() => {
     console.log("Korisnici");
    getAllUsers();
    console.log(allUsers)
    
}, []);

const refreshUsers=()=>{
    getAllUsers()
}

const brisi=()=>{
    console.log(nesto)
    fetch('http://localhost:3004/brisi/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:nesto})
    })
     refreshUsers();
}

const brisati=(id)=>{
    console.log(id);
    if (window.confirm('Jeset li sigurni da zelite izbrisati  ovaj senzor ?')) {
    fetch('http://localhost:3004/brisati/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:id})
    })
    alert('Korisnik je  izbrisan.');
    }
    else{
        alert('Korisnik nije izbrisan');
    }
    refreshUsers();
}

const getAllUsers = () => {

    fetch('http://localhost:3004/getAllUsers/',{


   })

   .then(response => response.json())
   .then(data => {
       setAllUsers(data);
    })
}

const filtriraj=()=>{
    console.log("hola")
    fetch('http://localhost:3004/user/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:nesto, firstname: ime})
    })
    .then(response => response.json())
    .then(data => console.log(data));
    refreshUsers();
}

const registriraj=()=>{

    fetch('http://localhost:3004/user1/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({firstName:ime,lastName:prezime,mail:mail,role:role,pass:lozinka})
    })
    .then(response => response.json())
    refreshUsers();
}


    return(
        <div>
            
            <input className="input" 
            type="text"
            placeholder="Unesite ime" 
            onChange={e => {
            setIme(e.target.value)
            console.log(ime)}} />


            <input className="input" 
            type="text"
            placeholder="Unesite prezime" 
            onChange={e => {
            setPrezime(e.target.value)
            console.log(prezime)}} />

            <input className="input" 
            type="text"
            placeholder="Unesite mail" 
            onChange={e => {
            setMail(e.target.value)
            console.log(mail)}} />

            <input className="input" 
            type="password"
            placeholder="Unesite lozinku" 
            onChange={e => {
            setLozinka(e.target.value)
            console.log(lozinka)}} />

            <input className="input" 
            type="text"
            placeholder="Unesite ulogu" 
            onChange={e => {
            setRole(e.target.value)
            console.log(role)}} />

            <button className="button" onClick={registriraj}>
                    .
            </button>

            <div>
                {allUsers.map(user => 
                    <div>{user.id} {user.FirstName} {user.LastName} {user.mail}
                      <button className="button" onClick={()=>brisati(user.id)}  >
                            x
                      </button>
                    </div>)}
            </div>

            <div>

            <input className="input" 
            type="text"
            placeholder="id kojeg zelite obrisat" 
            onChange={e => {
            setNesto(e.target.value)
            console.log(nesto)}} />
            <button className="button" onClick={()=>brisi()}>
                    x
            </button>
            </div>
            

        </div>
      
    );
}

export default Korisnici;

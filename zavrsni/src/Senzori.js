import React,{Component }from 'react';
import  { useState,useEffect } from 'react';
import  { Alert} from 'react';
import './Senzori.css';
function Home() {
    /*const [senzorIme, setSenzorIme] = useState('');
    const [senzorLokacija,setSenzorLokacija]=useState('');*/
    const [list,setList]=useState([]);
    const[temperatura,setTempertaura]= useState('');
    const [vlaznost,setVlaznost]= useState('');
    const[tlak,setTlak]= useState('');
    const [senzorName,setSenzorName ] = useState('');
    const [senzorLocation,setSenzorLocation] = useState('');
    const [senzorId ,setSenzorId] = useState('');
    const [valueIme,setValueIme]= useState('');
    const [valueLokacija,setValueLokacija]= useState('');
    const [allSenzor,setAllSenzor]=useState([]);

    /*const dodaj=()=>{
      let lista =[...list];
      if(senzorIme==0)
        {
            alert("Nema unesno ime senzora")      
        }
        else{
          if(senzorLokacija==0){
              alert("Nema unesne lokacije senzora")
            }else{
               lista.push({nameSenzor: senzorIme,
                  locationSenzor:senzorLokacija,
                  id: Math.random()});
           
               setList(lista);
            }       
        }
      console.log(lista);
    } */

  useEffect(() => {
      getAllSenzor();
      console.log(allSenzor)
      document.getElementById("graf").style.display= "none";
      
  }, []);

  const refreshSenzor=()=>{
    getAllSenzor()
}
    
    const handleClick=(e)=>{
      e.preventDefault();
      alert("Pritisnili ste senzor");
    }

const getAllSenzor = () => {
      fetch('http://localhost:3004/getAllSenzor/',{
  
     })
  
     .then(response => response.json())
     .then(data => {
         setAllSenzor(data);
      })
      console.log(allSenzor);
  }

  const brisati=(id)=>{
    if (window.confirm('Jeset li sigurni da zelite izbrisati  ovaj senzor ?')) {
      fetch('http://localhost:3004/brisatiSenzor/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id:id})
    })
      alert('izbrisan je');
    } else {
      alert('nije izbrisan');
    }
    console.log(id);
    
    refreshSenzor();
}

const dodati=()=>{

  fetch('http://localhost:3004/dodati/',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body: JSON.stringify({temp:temperatura,vlaznost:vlaznost,tlak:tlak})
  })
  .then(response => response.json())
  refreshSenzor();
}


const displaySenzors = allSenzor.map((senzori1, index) =>
          <div className="inputButtonHome">   
            <div className="senzorInformation">
              <a className="bold">Senzor {index + 1}</a> temp= {senzori1.temp} vlaznost={senzori1.vlaznost} tlak={senzori1.tlak} 
            </div>  
            <button className= "button" onClick={()=>brisati(senzori1.id)}>X</button> 
      
          </div> )
    
   
   /* const uredi=(id)=>{
       let novaLista=[...list];
       let novaLista1=novaLista.filter((item)=>item.id==id) ;
      console.log(novaLista1);
      setSenzorName(novaLista1[0].nameSenzor);
      setSenzorLocation(novaLista1[0].locationSenzor);
      setSenzorId(novaLista1[0].id);
      console.log(senzorName);
      console.log(senzorLocation);
      console.log(senzorId)
  
    }*/
    /*const brisanje=(id)=>{
      let novaLista=[...list];
      let novaLista1=novaLista.filter((item)=>item.id!=id) ;
      setList(novaLista1);
    }*/
    const promjena=()=>{
      console.log(valueIme);
      console.log(valueLokacija);
      let lista1=[...list]
      let i =0;
      for(i=0;i<lista1.length;i++)
      {
        if(lista1[i].id==senzorId)
        {
          console.log(lista1[i].id)
          lista1[i].nameSenzor=valueIme;
          lista1[i].locationSenzor=valueLokacija;
        
        }
      }
      console.log(lista1)
        setList(lista1);
    } 
    const graf=()=>{
       document.getElementById("lista").style.display= "none";
       document.getElementById("graf").style.display= "block";
       document.getElementById("slovaGraf").style.color= "white";
       document.getElementById("slovaLista").style.color= "rgb(94, 21, 81)";
    }
    
    const lista=()=>{
        document.getElementById("graf").style.display = "none";
        document.getElementById("lista").style.display= "block";
        document.getElementById("slovaLista").style.color= "white";
        document.getElementById("slovaGraf").style.color="rgb(94, 21, 81)";
   }
   

    return (
    <div className="bodySenzor">
      <div className="containerHome">
        <div className="opcije">
            <a id="slovaLista"  onClick={()=>lista()}>
              Lista
            </a>
            <a id="slovaGraf"onClick={()=>graf()} >
              Graf
            </a>
          
             
              

        </div>
        <div  className="form_add_user">
      <input  className="input"
        type="text" 
        name="senzortemp"
        placeholder="Unesite temperatur" 
        value={temperatura}
        onChange={e => {
        setTempertaura(e.target.value) ; 
         }} />

      <input  className="input"
        type="text" 
        name="senzorvlaz"
        placeholder="Unesite vlaznost" 
        value={vlaznost}
        onChange={e => {
        setVlaznost(e.target.value) ; 
         }} />
      
      
        <input className="input"
        type="text" 
        name="senzortlak"
        placeholder="Unesite tlak" 
        value={tlak}
        onChange={e => {
        setTlak(e.target.value) ;
         }} />

      <button 
      className="button new_user" 
      onClick={()=>{
        dodati();
        }}>Dodaj</button> 
        
         </div>   
          <div id="lista">
          {displaySenzors}  
          </div>
        <div id="graf" className="graf">
           dhfghfh
        </div>
        
        </div>
        
    </div>
    );
    

}

export default Home;
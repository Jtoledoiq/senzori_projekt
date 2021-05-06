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
    const [sensorToBeShown, setSensorToBeShown]=useState([]);
    const [date, setDate] = useState("")
    const [formatedDate, setFormatedDate] = useState("")
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

      getSensorData(7, "20210505")

      const currentDateTime = new Date()
      const correctMonth =currentDateTime.getMonth()+1
      setFormatedDate(currentDateTime.getFullYear() + " " + correctMonth + " " + currentDateTime.getDate());
      setDate(currentDateTime)
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
   
   const getSensorData = (id, data) => {
     fetch('http://localhost:3004/getSensorData/',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id, data: data})
  })
  .then(response => response.json())
  .then(data => setSensorToBeShown(data));
  console.log(sensorToBeShown)
  displaySenzorData()
  
}

const displaySenzorData = () => {
     return (
       <div className="sensor-table">
                      <div className="sensor-row">
                <div className="tip title">TIP</div>
              
              <div className="value_entered title">VALUE</div>

              
              <div className="unit title">UNIT</div>
              </div>
         {sensorToBeShown.map((sensor,index)=>{
           return(
             
             <div className="sensor-row">


               <div className="tip">{sensor["tip"]}</div>
             
              <div className="value_entered">{sensor["value_entered"]}</div>

              
              <div className="unit">{sensor["unit"]}</div>


             </div>
           )
         })}
       </div>
     )

   }



    return (
    <div className="bodySenzor">
      <div className="menuLists">
        <ul>
        {allSenzor.map((sensor, index) => {
          return(
            <li 
              id={sensor["unique_id"]}
              onClick={()=>{
                getSensorData(sensor["unique_id"], "20210505")
              }}
            >{sensor["name_senzor"]} {sensor["unique_id"]}</li>
            )
          })}
        </ul>
        

      </div>
      <div className="containerHome">
        <div className="opcije">
            <a id="slovaLista"  onClick={()=>lista()}>
              Lista
            </a>
            <a id="slovaGraf"onClick={()=>graf()} >
              Graf
            </a>
        </div>
        <div className="arrows">
          <div className="arrow-left"
            onClick={()=>{

              let currentDateTime = date
              currentDateTime.setDate(currentDateTime.getDate()-1)
              setFormatedDate(currentDateTime.getFullYear() + " " + currentDateTime.getMonth() +1 + " " + currentDateTime.getDate());
              console.log(formatedDate)

            }}
          ></div>
          <div className="date">{formatedDate}</div>
          <div className="arrow-right"
          
          onClick={()=>{

            
            let currentDateTime = date
            const correctMonth =currentDateTime.getMonth()
            currentDateTime.setDate(currentDateTime.getDate())
            setFormatedDate(currentDateTime.getFullYear() + " " + correctMonth + " " + currentDateTime.getDate());
            setDate(currentDateTime)
      


          }}></div>
        </div>
        <div id="lista">
             {displaySenzorData()}  
        </div>

        <div id="graf" className="graf">
           dhfghfh
        </div>
        
        </div>
        
    </div>
    );
    

}

export default Home;
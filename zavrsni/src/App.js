import Senzori from'./Senzori.js' ;
import Login from './Login.js';
import NavigationBar from'./NavigationBar.js';
import Korisnici from './Korisnici.js';
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import  { useState,useEffect } from 'react';
import './App.css';


function App(){
  const [showMenu, setShowMenu] = useState(false);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    setShowMenu(!showMenu);
    
}, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
    setDisplay(showMenu ? "block" : "none")
    console.log(display)

  }
  return(

    <div>

        <Router>
          <div className="menu">
            <div className="button-menu">
            <div class="brand  shadow-light">
                    KRON d.o.o.
                </div>
              <button onClick={()=>toggleMenu()}>Menu</button>
            </div>
            <div style={{display: display}} className="list-menu">
                <NavigationBar/>
            </div>

          </div>
          <Switch>
            <Route path="/senzori">
                <Senzori/>
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/korisnici">
                <Korisnici />
            </Route>
    
          </Switch>
        </Router>
    </div>
  );
}
export default App;
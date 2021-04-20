import Senzori from'./Senzori.js' ;
import Login from './Login.js';
import NavigationBar from'./NavigationBar.js';
import Korisnici from './Korisnici.js';
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App(){

  return(
    <Router>
          <NavigationBar/>
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
  );
}
export default App;
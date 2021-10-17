import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/auth/Login';
import Side from './components/auth/Side';
import Register from './components/auth/Register';
import Sidenav from './components/dashboard/Sidenav';
import Passwords from './components/dashboard/Passwords';
import Pwned from './components/dashboard/Pwned';
import About from './components/dashboard/About';



function App() {
  return (
    <>
    <div className="App">
      <div className="row p-0 m-0">

      <Router>
          <Switch>
            <Route exact path="/">
              <div>PAssword Vault</div>
              <a href="login">Login</a>
              <a href="register">Register</a>
            </Route>
            <Route exact path="/login">
              <Side message="Hola, Amigo.." message2="Enter your personal details, and start your journey with us !" buttonText="Sign Up" redirect="register" /> 
              <Login />
            </Route>
            <Route exact path="/register">
              <Register /> 
              <Side message="Welcome Back !" message2="To keep connected with us please login with your personal info !" buttonText="Sign In" redirect="login" /> 
            </Route>

            <Route exact path="/dashboard">
              <Sidenav />
              <Passwords totalPass="30" />
            </Route>

            <Route exact path="/pwnedaccounts">
              <Sidenav />
              <Pwned />
            </Route>

            <Route exact path="/myaccount">
              <Sidenav />
              <About />
            </Route>
            
          </Switch>
        </Router>

        
      
      </div>
    </div>
    </>
  );
}

export default App;

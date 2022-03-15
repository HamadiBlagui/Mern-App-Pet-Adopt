import './App.css';
import {Switch , Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import UserSignUp from "./Components/UserSignUp/UserSignUp"




function App() {
  return (
    <div>
    <Switch>
     <Route path="/signUp"  render={()=> <UserSignUp /> } />
     <Route path="/"  render={()=> <UserLogin /> } />
      
      </Switch>  
     
    </div>
  );
}
export default App;

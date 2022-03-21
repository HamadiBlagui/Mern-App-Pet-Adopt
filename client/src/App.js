import './App.css';
import {Route,Switch} from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import UserSignUp from "./Components/UserSignUp/UserSignUp"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
    <Switch>
     {/*  <PrivateRoute path="/" component={}> */}
     <Route path="/signUp" render={()=><UserSignUp/>}/>
     <Route path="/" render={()=><UserLogin/>}/>
    </Switch>  
    </div>
  );
}
export default App;
